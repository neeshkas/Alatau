# AAAG Project

Актуальная структура проекта:

- `frontend/` - фронтенд-приложение (React + TypeScript + Vite).
- `ngrok/` - директория под ngrok-материалы (опционально).
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
- аккаунт ngrok и `authtoken` (для стабильной работы туннеля)

## Переменные окружения

В корне проекта создайте файл `.env`:

```env
NGROK_AUTHTOKEN=YOUR_NGROK_AUTHTOKEN
```

## Запуск через npm

Команды выполнять в `frontend`:

1. Установить зависимости:
   `npm install`
2. Запустить dev-сервер:
   `npm run dev`
3. Открыть в браузере:
   `http://localhost:3000`

## Запуск через Docker Compose (с ngrok)

Команды выполнять из корня проекта:

1. Собрать и запустить:
   `docker-compose up -d --build`
2. Локальный сайт:
   `http://localhost:3001`
3. Панель ngrok (инспектор):
   `http://localhost:4040`
4. Публичный URL сайта берется из инспектора ngrok (`Forwarding`).
5. Остановить:
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

## Важно

- `npm run dev` использует `3000`, а `docker-compose` публикует `3001` -> прямого конфликта портов нет.
- `.gitignore` должен быть в репозитории - это нормальная и правильная практика.
- Если в логах `ngrok` видишь `ERR_NGROK_334`, это конфликт endpoint: такой же URL уже используется другим ngrok-процессом/контейнером.
