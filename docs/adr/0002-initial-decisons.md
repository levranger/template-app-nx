# 2. Initial decisions

Date: 2023-09-20

## Status

Proposed

## Context

We are starting a new project and need to make some initial decisions.

## Decision

We will build a fullstack application using React and Express. We will use [`Nx`](https://nx.dev/) to manage the project as a monorepo. It will be organized as follows:

```sh
ev-pilot/
  ├── docs/
  ├── packages/
  │   ├── ui/
  │   │   ├── src/
  │   │   ├── ...
  │   │   └── package.json
  │   ├── api/
  │   │   ├── src/
  │   │   ├── ...
  │   │   └── package.json
  │   ├── shared/
  │   │   ├── src/
  │   │   ├── ...
  │   │   └── package.json
  │   └── types/
  │       ├── src/
  │       ├── ...
  │       └── package.json
  ├── package.json
  └── README.md
```

## Libraries 

### Frontend

- Framework: [`React`](https://react.dev/)
- Component Library: [`Material UI`](https://mui.com/)
- Styling: [`TailwindCSS`](https://tailwindcss.com/)
- Form Handling: [`react-hook-form`](https://www.react-hook-form.com/)

### Backend

- Runtime: [`Node.js`](https://nodejs.org/en)
- Framework: [`Express`](https://expressjs.com/)
- Database: [`PostgreSQL`](https://www.postgresql.org/)
- ORM: [`TypeORM`](https://typeorm.io/)
- Authentication: [`Passport.js`](https://www.passportjs.org/)
- Email: [`Azure Communication Services`](https://azure.microsoft.com/en-us/products/communication-services)
- SMS: [`Azure Communication Services`](https://azure.microsoft.com/en-us/products/communication-services)

### Common

- Language: [`TypeScript`](https://www.typescriptlang.org/)
- E2E Testing: [`Playwright`](https://playwright.dev/)
- Validation: [`zod`](https://zod.dev/)
- Build tool: [`Vite`](https://vitejs.dev/)
- Test Framework: [`Vitest`](https://vitest.dev/)
- Package Manager: [`npm`](https://www.npmjs.com/)
- Hosting Service: [`Azure App Service`](https://azure.microsoft.com/en-us/products/app-service)

## Consequences

We will have a monorepo with a client, server, shared, and types package. We will use [`Nx`](https://nx.dev/) to manage the monorepo. This system lets us ship code changes for the frontend and backend simultaneously. 

`Next.js` was also considered. It was not chosen because it does not allow us to use common server behaviors like cronjobs. It is more of a backend for the frontend, rather than a full server framework. We *could* use Next with a separate server, but that would add complexity to the project that is not needed.

`Vite` was chosen as the build tool because it is fast and has a great developer experience. It does not have the same ecosystem as Webpack, but it is good enough for our needs. The tight integration with `Vitest` is nice as well.

We'll deploy the frontend as a single-page app that is served by the backend. This makes authentication easier. It'll be deployed to `Azure App Service`. This is a simple solution that is easy to set up and maintain. It is not as scalable as other solutions, but it is good enough for our needs. 

We'll use Azure Dev Ops (ADO) for CI/CD. We'll deploy automatically on commits to `main` up until we deploy to production and then we'll re-evaluate our deployment system. We will set up a preview system so we can share changes with stakeholders before PRs are merged. 
