# AAAG Project

Актуальная структура проекта:

- `frontend/` - фронтенд-приложение (React + TypeScript + Vite).
- `Dockerfile`, `docker-compose.yml` - контейнерный запуск из корня.

## Технологии фронтенда

- `React`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `framer-motion`
- `react-router-dom`
- `react-leaflet`

## Требования

- `Node.js` 20+
- `npm` 10+
- `Docker Desktop`

## Запуск через npm

Команды выполнять в `frontend`:

1. Установить зависимости:
   `npm install`
2. Запустить dev-сервер:
   `npm run dev`
3. Открыть в браузере:
   `http://localhost:3000`

## Запуск через Docker Compose

Команды выполнять из корня проекта:

1. Собрать и запустить:
   `docker-compose up -d --build`
2. Локальный сайт:
   `http://localhost:3001`
3. Остановить:
   `docker-compose down`

## Сборка фронтенда

Команды выполнять в `frontend`:

- `npm run build` - production-сборка в `frontend/dist`
- `npm run preview` - просмотр production-сборки локально

## Маршруты приложения

- `/main` - главная страница
- `/security` - страница безопасности
- `/privacy` - политика конфиденциальности
- `/terms` - условия использования

Legacy-редиректы:

- `/` -> `/main`
- `/bezop` -> `/security`
