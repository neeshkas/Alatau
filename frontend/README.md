# AAAG Frontend

Фронтенд проекта `aaag---alatau-advance-air-group`.

## Технологии

- `React`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `framer-motion`
- `react-router-dom`
- `react-leaflet`

## Структура

Проект реорганизован:

- `frontend/` - исходники фронтенда (этот README находится здесь).
- `ngrok/` - отдельная директория под ngrok.
- В корне репозитория лежат `Dockerfile`, `docker-compose.yml`, `.dockerignore`.

## Требования

- `Node.js` 20+
- `npm` 10+
- `Docker Desktop` (если запускаете через Docker)

## Переменные окружения

Файл: `frontend/.env.local`

Минимально:

```env
GEMINI_API_KEY=YOUR_KEY_HERE
```

## Запуск через npm (локально)

Команды выполняются из папки `frontend`:

1. Установка зависимостей:
   `npm install`
2. Запуск dev-сервера:
   `npm run dev`
3. Открыть:
   `http://localhost:3000`

## Запуск через Docker Compose

Команды выполняются из корня репозитория (на уровень выше `frontend`):

1. Сборка и запуск:
   `docker-compose up -d --build`
2. Открыть:
   `http://localhost:3000`
3. Остановка:
   `docker-compose down`

## Полезные npm-скрипты

Выполняются из `frontend`:

- `npm run dev` - запуск в режиме разработки.
- `npm run build` - production-сборка в `frontend/dist`.
- `npm run preview` - локальный просмотр production-сборки.

## Маршруты приложения

- `/main` - главная страница.
- `/security` - страница безопасности.
- `/privacy` - политика конфиденциальности.
- `/terms` - условия использования.

Legacy-редиректы:

- `/` -> `/main`
- `/bezop` -> `/security`
