import { RoadmapItem, RouteItem, Partner } from './types';

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    year: '2025',
    title: 'Исследования',
    description: 'Фундамент UAM',
    details: ['Цифровая карта местности', 'Дорожная карта UAM', 'Анализ воздушных коридоров'],
  },
  {
    year: '2026',
    title: 'Инфраструктура',
    description: 'Первый полет',
    details: ['Строительство тестового центра', 'Ангары в Алатау-Сити', 'Первый тестовый полет', '4 сезона испытаний'],
  },
  {
    year: '2027',
    title: 'Легализация',
    description: 'Сеть вертипортов',
    details: ['Создание законодательной базы', 'Проектирование Центрального вертипорта', 'Сеть остановок'],
  },
  {
    year: '2028',
    title: 'Запуск',
    description: 'Коммерческий старт',
    details: ['Запуск авиалинии', 'Пассажирские перевозки', 'Масштабирование флота'],
  },
];

export const ROUTES_DATA: RouteItem[] = [
  {
    id: 'r1',
    from: 'Центр Алатау',
    to: 'Акимат (Республика)',
    description: 'Скоростной маршрут для деловых поездок, минуя городской трафик.',
    coordinates: { start: [43.676667, 77.109167], end: [43.23889, 76.94532] },
  },
  {
    id: 'r2',
    from: 'Алматы (Аэропорт)',
    to: 'Алатау Сити',
    description: 'Трансфер из международного аэропорта в инновационный центр за 15 минут.',
    coordinates: { start: [43.3521, 77.0405], end: [43.676667, 77.109167] },
  },
  {
    id: 'r3',
    from: 'Конаев (Капчагай)',
    to: 'Алатау Сити',
    description: 'Живописный маршрут вдоль береговой линии и русла рек.',
    coordinates: { start: [43.85517, 77.06146], end: [43.676667, 77.109167] },
  },
];

export const PARTNERS_DATA: Partner[] = [
  { name: 'Embraer' },
  { name: 'Honeywell' },
  { name: 'Thales' },
  { name: 'Siemens' },
  { name: 'Alatau City Admin' },
  { name: 'KazAir' },
];
