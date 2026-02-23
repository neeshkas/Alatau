import React, { useMemo, useState } from 'react';
import { Section } from './Section';
import { ROUTES_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Navigation, ArrowRight } from 'lucide-react';
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip, useMap, Pane, useMapEvents, Circle } from 'react-leaflet';
import type { Polyline as LeafletPolyline } from 'leaflet';

const MapSizeFix: React.FC<{ trigger: string | null }> = ({ trigger }) => {
  const map = useMap();

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      map.invalidateSize();
    }, 0);
    return () => window.clearTimeout(id);
  }, [map, trigger]);

  return null;
};

const MapFit: React.FC<{ positions: [number, number][]; trigger: string | null }> = ({ positions, trigger }) => {
  const map = useMap();

  React.useEffect(() => {
    if (!positions.length) return;
    const isCloseRoute = trigger === 'r1' || trigger === 'r2';
    map.fitBounds(positions, {
      padding: isCloseRoute ? [40, 40] : [50, 50],
      maxZoom: isCloseRoute ? 15 : 14,
      animate: false,
    });
  }, [map, positions, trigger]);

  return null;
};

const AnimatedRoute: React.FC<{
  positions: [number, number][];
  trigger: string | null;
}> = ({ positions, trigger }) => {
  const polylineRef = React.useRef<LeafletPolyline | null>(null);
  const map = useMap();
  const animatedFor = React.useRef<string | null>(null);

  React.useEffect(() => {
    const layer = polylineRef.current;
    const path = layer ? (layer as any)._path as SVGPathElement | undefined : undefined;
    if (!path) return;

    const svg = path.ownerSVGElement;
    if (svg) {
      const defs =
        svg.querySelector('defs[data-aaag="route"]') ??
        (() => {
          const d = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
          d.setAttribute('data-aaag', 'route');
          svg.prepend(d);
          return d;
        })();

      const gradientId = `aaag-route-gradient-${trigger ?? 'default'}`;
      const glowId = `aaag-route-glow`;
      let gradient = defs.querySelector(`#${gradientId}`) as SVGLinearGradientElement | null;
      if (!gradient) {
        gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.id = gradientId;
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '0%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#3B2E73');
        stop1.setAttribute('stop-opacity', '0.35');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '50%');
        stop2.setAttribute('stop-color', '#6B5BD0');
        stop2.setAttribute('stop-opacity', '1');

        const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop3.setAttribute('offset', '100%');
        stop3.setAttribute('stop-color', '#3B2E73');
        stop3.setAttribute('stop-opacity', '0.35');

        gradient.append(stop1, stop2, stop3);
        defs.appendChild(gradient);
      }

      let glow = defs.querySelector(`#${glowId}`) as SVGFilterElement | null;
      if (!glow) {
        glow = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        glow.id = glowId;
        glow.setAttribute('x', '-50%');
        glow.setAttribute('y', '-50%');
        glow.setAttribute('width', '200%');
        glow.setAttribute('height', '200%');
        const blur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
        blur.setAttribute('stdDeviation', '3.5');
        blur.setAttribute('result', 'blur');
        const merge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
        const m1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
        m1.setAttribute('in', 'blur');
        const m2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
        m2.setAttribute('in', 'SourceGraphic');
        merge.append(m1, m2);
        glow.append(blur, merge);
        defs.appendChild(glow);
      }

      path.setAttribute('stroke', `url(#${gradientId})`);
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('opacity', '1');
      path.setAttribute('filter', `url(#${glowId})`);
    }

    const length = path.getTotalLength();
    const currentKey = trigger ?? 'default';

    path.style.transition = 'none';
    path.style.strokeDasharray = `${length}`;

    if (animatedFor.current !== currentKey) {
      animatedFor.current = currentKey;
      path.style.strokeDashoffset = `${length}`;
      path.getBoundingClientRect();
      requestAnimationFrame(() => {
        path.style.transition = 'stroke-dashoffset 2.2s ease-in-out';
        path.style.strokeDashoffset = '0';
      });
    } else {
      path.style.strokeDashoffset = '0';
    }

    const settle = () => {
      const l = path.getTotalLength();
      path.style.transition = 'none';
      path.style.strokeDasharray = `${l}`;
      path.style.strokeDashoffset = '0';
    };

    map.once('moveend', settle);
    map.once('zoomend', settle);
  }, [positions, trigger, map]);

  return (
    <Pane name="route-anim" style={{ zIndex: 650 }}>
      <Polyline
        ref={polylineRef}
        positions={positions}
        pathOptions={{ color: '#3B2E73', weight: 6, opacity: 1, lineCap: 'round' }}
      />
    </Pane>
  );
};

const MapPlaneOverlay: React.FC<{
  start: [number, number];
  end: [number, number];
  trigger: string | null;
}> = ({ start, end, trigger }) => {
  const map = useMap();
  const [data, setData] = useState(() => ({
    path: '',
  }));

  const update = React.useCallback(() => {
    const s = map.latLngToContainerPoint(start);
    const e = map.latLngToContainerPoint(end);
    const path = `M ${s.x} ${s.y} L ${e.x} ${e.y}`;
    setData({ path });
  }, [map, start, end]);

  React.useEffect(() => {
    update();
  }, [update, trigger]);

  useMapEvents({
    move: update,
    zoom: update,
    resize: update,
  });

  if (!data.path) return null;

  return (
    <div className="absolute inset-0 z-[700] pointer-events-none">
      <motion.div
        key={`plane-${trigger ?? 'route'}`}
        className="absolute"
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
        style={{
          offsetPath: `path("${data.path}")`,
          offsetRotate: 'auto',
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 blur-md opacity-60 bg-[#6B5BD0] rounded-full"></div>
          <svg
            viewBox="0 0 64 64"
            className="relative w-10 h-10 drop-shadow-[0_0_12px_rgba(107,91,208,0.85)]"
            aria-hidden="true"
          >
            <g fill="none" stroke="#EDE9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 36 L28 32 L52 36 L28 40 Z" fill="#3B2E73" />
              <path d="M28 20 L28 46" />
              <circle cx="14" cy="28" r="4" />
              <circle cx="50" cy="28" r="4" />
              <circle cx="20" cy="18" r="3" />
              <circle cx="44" cy="18" r="3" />
              <path d="M20 18 L28 20 L44 18" />
              <path d="M18 28 L10 28" />
              <path d="M54 28 L46 28" />
            </g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

const MapLabelsOverlay: React.FC<{
  start: [number, number];
  end: [number, number];
  from: string;
  to: string;
  trigger: string | null;
}> = ({ start, end, from, to, trigger }) => {
  const map = useMap();
  const [labels, setLabels] = useState(() => ({
    s: { x: 0, y: 0 },
    e: { x: 0, y: 0 },
  }));

  const update = React.useCallback(() => {
    const s = map.latLngToContainerPoint(start);
    const e = map.latLngToContainerPoint(end);
    setLabels({ s: { x: s.x, y: s.y }, e: { x: e.x, y: e.y } });
  }, [map, start, end]);

  React.useEffect(() => {
    update();
  }, [update, trigger]);

  useMapEvents({
    move: update,
    zoom: update,
    resize: update,
  });

  return (
    <div className="absolute inset-0 z-[690] pointer-events-none">
      <div
        className="absolute"
        style={{ left: labels.s.x + 14, top: labels.s.y - 22 }}
      >
        <div className="text-[10px] uppercase tracking-[0.35em] text-white drop-shadow-[0_0_10px_rgba(107,91,208,0.9)]">
          {from}
        </div>
      </div>
      <div
        className="absolute"
        style={{ left: labels.e.x + 14, top: labels.e.y - 22 }}
      >
        <div className="text-[10px] uppercase tracking-[0.35em] text-white drop-shadow-[0_0_10px_rgba(244,114,182,0.9)]">
          {to}
        </div>
      </div>
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <div className="text-[10px] uppercase tracking-[0.35em] text-white/70 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">
          Алматы · Almaty
        </div>
      </div>
    </div>
  );
};

export const RoutesMap: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(ROUTES_DATA[0].id);

  const active = useMemo(
    () => ROUTES_DATA.find((route) => route.id === activeRoute) ?? ROUTES_DATA[0],
    [activeRoute]
  );

  const positions = useMemo(
    () => [active.coordinates.start, active.coordinates.end],
    [active]
  );
  const almatyCenter: [number, number] = [43.238, 76.945];

  const formatCoord = (value: number) => value.toFixed(3);

  return (
    <Section id="routes" className="bg-[#0f172a] text-white">
      <style>{`
        .aaag-map .leaflet-tile-pane img {
          filter: none;
        }
      `}</style>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f172a]/80"></div>
      </div>
      <div className="mt-16 lg:mt-20 flex flex-col lg:flex-row w-full h-full min-h-[80vh] max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative z-10">
        
        {/* Sidebar / Accordion */}
        <div className="w-full lg:w-1/3 bg-aaag-blue/20 backdrop-blur-xl p-8 flex flex-col z-20">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
                <Navigation className="text-aaag-blue" />
                Маршруты
            </h2>
            
            <div className="space-y-4">
                {ROUTES_DATA.map((route) => (
                    <button
                        key={route.id}
                        onClick={() => setActiveRoute(route.id)}
                        className={`w-full text-left p-6 rounded-xl transition-all duration-300 group border ${
                            activeRoute === route.id 
                            ? 'bg-aaag-blue text-white border-aaag-blue shadow-[0_0_20px_rgba(59,46,115,0.5)]' 
                            : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                        }`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-lg">{route.from}</h3>
                            <ArrowRight size={16} className={activeRoute === route.id ? 'text-white' : 'text-gray-600'} />
                        </div>
                        <h3 className="font-bold text-lg mb-3">{route.to}</h3>
                        
                        <motion.div 
                            initial={false}
                            animate={{ height: activeRoute === route.id ? 'auto' : 0, opacity: activeRoute === route.id ? 1 : 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm font-light leading-relaxed opacity-90">
                                {route.description}
                            </p>
                        </motion.div>
                    </button>
                ))}
            </div>
        </div>

        {/* Map Visualization */}
        <div className="relative w-full lg:w-2/3 bg-[#0B1121] overflow-hidden flex items-center justify-center">
            <MapContainer
              center={[43.25, 76.95]}
              zoom={11}
              scrollWheelZoom={false}
              zoomControl={false}
              className="absolute inset-0 z-0 aaag-map"
              style={{ height: '100%', width: '100%' }}
            >
              <MapSizeFix trigger={activeRoute} />
              <MapFit positions={positions} trigger={activeRoute} />
              <TileLayer
                attribution="© OpenStreetMap contributors © CARTO"
                url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
              />
              <Pane name="almaty-boundary" style={{ zIndex: 620 }}>
                <Circle
                  center={almatyCenter}
                  radius={26000}
                  pathOptions={{ color: '#6B5BD0', weight: 2, opacity: 0.6, fillColor: '#6B5BD0', fillOpacity: 0.08 }}
                />
                <Circle
                  center={almatyCenter}
                  radius={26000}
                  pathOptions={{ color: '#C4B5FD', weight: 10, opacity: 0.08, fillOpacity: 0 }}
                />
              </Pane>
              <Pane name="route-base" style={{ zIndex: 640 }}>
                <Polyline
                  positions={positions}
                  pathOptions={{ color: '#6B5BD0', weight: 2, opacity: 0.35, dashArray: '6 10' }}
                />
              </Pane>
              <AnimatedRoute positions={positions} trigger={activeRoute} />
              <MapLabelsOverlay
                start={active.coordinates.start}
                end={active.coordinates.end}
                from={active.from}
                to={active.to}
                trigger={activeRoute}
              />
              <MapPlaneOverlay
                start={active.coordinates.start}
                end={active.coordinates.end}
                trigger={activeRoute}
              />
              <CircleMarker center={active.coordinates.start} radius={16} pathOptions={{ color: '#6B5BD0', weight: 1, fillColor: '#6B5BD0', fillOpacity: 0.15 }} />
              <CircleMarker center={active.coordinates.start} radius={9} pathOptions={{ color: '#3B2E73', weight: 2, fillColor: '#3B2E73', fillOpacity: 0.95 }}>
                <Tooltip direction="top" offset={[0, -8]} opacity={0.9}>Старт</Tooltip>
              </CircleMarker>
              <CircleMarker center={active.coordinates.end} radius={16} pathOptions={{ color: '#F472B6', weight: 1, fillColor: '#F472B6', fillOpacity: 0.15 }} />
              <CircleMarker center={active.coordinates.end} radius={9} pathOptions={{ color: '#F472B6', weight: 2, fillColor: '#F472B6', fillOpacity: 0.95 }}>
                <Tooltip direction="top" offset={[0, -8]} opacity={0.9}>Финиш</Tooltip>
              </CircleMarker>
            </MapContainer>

            {/* Grid Overlay for Tech feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,46,115,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,46,115,0.12)_1px,transparent_1px)] bg-[size:50px_50px] z-10 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,46,115,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(107,91,208,0.2),transparent_60%)] z-10 mix-blend-screen"></div>
            <div className="absolute inset-0 z-10 pointer-events-none opacity-25 mix-blend-screen" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(148,163,184,0.08) 0, rgba(148,163,184,0.08) 1px, transparent 1px, transparent 4px)' }}></div>

            {/* HUD */}
            <div className="absolute top-6 left-6 z-20 text-xs uppercase tracking-[0.35em] text-cyan-200/70">
              Air Corridor
              <div className="mt-2 text-[10px] tracking-[0.4em] text-white/60">AAAG NAV</div>
            </div>
            <div className="absolute top-6 right-6 z-20 text-[10px] uppercase tracking-[0.35em] text-white/60 text-right">
              Alt 120m<br />V 180km/h
            </div>
            <div className="absolute bottom-6 left-6 z-20 text-[10px] uppercase tracking-[0.35em] text-white/60">
              Sector A-03
            </div>
            <div className="absolute inset-4 z-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-white/30"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-white/30"></div>
            </div>

            <div className="absolute bottom-8 right-8 text-right z-20">
                <p className="text-xs text-aaag-blue font-mono mb-1">COORDINATES</p>
                <p className="font-mono text-lg tracking-widest">
                  {formatCoord(active.coordinates.start[0])}° N, {formatCoord(active.coordinates.start[1])}° E
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
};
