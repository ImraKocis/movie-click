# MovieClick

Training application with inspiration of [JustWatch](https://www.justwatch.com).
Application is developed with [Next.Js](https://nextjs.org) and [React](https://react.com).

## Getting Started

### API

Application is using [TMDB API](https://developer.themoviedb.org/docs/getting-started). You will need to create account and login to get access to credentials.

Provide following variables in .env
```dotenv
API_TOKEN="xxx"
API_KEY="xxx"
API_BASE_URL="https://api.themoviedb.org/3/"
```

## Development run
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production build

### Install Docker

First step is to install [Docker](https://www.docker.com/) on your pc. Follow official documentation for your OS.

After successful installation you will need to run Docker on your pc.

```bash
# production build
docker compose build frontend
# after successful build, run local production build
docker compose up frontend
```

Open [http://localhost:3000](http://localhost:3000) with browser.