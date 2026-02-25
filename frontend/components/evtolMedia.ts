type ImageFormat = 'avif' | 'webp' | 'jpg';

const images = import.meta.glob('../assets/evtol-optimized/*.{avif,webp,jpg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const getEntries = (base: string, format: ImageFormat) => {
  const entries = Object.entries(images)
    .filter(([path]) => path.includes(`/evtol-optimized/${base}-`) && path.endsWith(`.${format}`))
    .map(([path, url]) => {
      const match = path.match(/-(\d+)\.(avif|webp|jpg)$/);
      const width = match ? Number(match[1]) : 0;
      return { width, url };
    })
    .filter((entry) => entry.width > 0)
    .sort((a, b) => a.width - b.width);

  return entries;
};

export const getSrcSet = (base: string, format: ImageFormat) => {
  const entries = getEntries(base, format);
  return entries.map((entry) => `${entry.url} ${entry.width}w`).join(', ');
};

export const getFallbackSrc = (base: string) => {
  const jpgEntries = getEntries(base, 'jpg');
  const preferred = jpgEntries.find((entry) => entry.width === 1024);
  return (preferred ?? jpgEntries[jpgEntries.length - 1])?.url ?? '';
};
