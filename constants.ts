import { TeamMember, RoadmapItem, RouteItem, Partner } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Сергей Хегай", role: "Генеральный Директор" },
  { name: "Алма Алигужинова", role: "Исполнительный директор" },
  { name: "Роман Богдашкин", role: "IT Директор" },
  { name: "Данияр Утеулин", role: "Проектный менеджер" },
  { name: "Айгуль Андабекова", role: "Юрист" },
  { name: "Юлия Бедельбаева", role: "Отдел снабжения" },
  { name: "Улжан Кабделова", role: "Работа с инвесторами" },
  { name: "Асем Биболова", role: "Административный менеджер" },
];

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    year: "2025",
    title: "Исследования",
    description: "Фундамент UAM",
    details: ["Цифровая карта местности", "Дорожная карта UAM", "Анализ воздушных коридоров"]
  },
  {
    year: "2026",
    title: "Инфраструктура",
    description: "Первый полет",
    details: ["Строительство тестового центра", "Ангары в Алатау-Сити", "Первый тестовый полет", "4 сезона испытаний"]
  },
  {
    year: "2027",
    title: "Легализация",
    description: "Сеть вертипортов",
    details: ["Создание законодательной базы", "Проектирование Центрального вертипорта", "Сеть остановок"]
  },
  {
    year: "2028",
    title: "Запуск",
    description: "Коммерческий старт",
    details: ["Запуск авиалинии", "Пассажирские перевозки", "Масштабирование флота"]
  }
];

export const ROUTES_DATA: RouteItem[] = [
  {
    id: "r1",
    from: "Центр Алатау",
    to: "Акимат",
    description: "Скоростной маршрут для деловых поездок, минуя городской трафик.",
    coordinates: { start: [0, 0], end: [100, 100] }
  },
  {
    id: "r2",
    from: "Алматы (Аэропорт)",
    to: "Алатау Сити",
    description: "Трансфер из международного аэропорта в инновационный центр за 15 минут.",
    coordinates: { start: [20, 20], end: [80, 80] }
  },
  {
    id: "r3",
    from: "Капчагай",
    to: "G4 City",
    description: "Живописный маршрут вдоль береговой линии и русла рек.",
    coordinates: { start: [10, 50], end: [90, 50] }
  }
];

export const PARTNERS_DATA: Partner[] = [
  { name: "Embraer", logo: "https://picsum.photos/200/80?random=1" },
  { name: "Honeywell", logo: "https://picsum.photos/200/80?random=2" },
  { name: "Thales", logo: "https://picsum.photos/200/80?random=3" },
  { name: "Siemens", logo: "https://picsum.photos/200/80?random=4" },
  { name: "Alatau City Admin", logo: "https://picsum.photos/200/80?random=5" },
  { name: "KazAir", logo: "https://picsum.photos/200/80?random=6" },
];
