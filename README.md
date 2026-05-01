# Film Collection (Angular Intro)

## Task Context

This repository is an implementation of the assignment:
[Angular Intro: Film Collection](https://github.com/rolling-scopes-school/tasks/blob/master/angular/tasks/angular-intro-task/README.md).

## Project Structure

```text
src/app/
  features/
    about/
    catalog/
    film-details/
    not-found/
  shared/
    components/
    models/
    pipes/
    resolvers/
    services/
```

## Getting Started

### 1) Install dependencies

The workspace uses `pnpm` as package manager:

```bash
pnpm install
```

### 2) Run application in development mode

```bash
pnpm start
```

This command starts both processes in parallel:
- Angular dev server: `http://localhost:4200`
- Mock API (`json-server`): `http://localhost:3001` (`/films`)

If you need to run services separately:

```bash
pnpm run ng serve
pnpm mock:api
```

### 3) Build project

```bash
pnpm build
```

### 4) Run tests
![Coverage](./badges/coverage-jest%20coverage.svg)
![Coverage Branches](./badges/coverage-branches.svg)
![Coverage Functions](./badges/coverage-functions.svg)
![Coverage Lines](./badges/coverage-lines.svg)

```bash
pnpm test
```

### 5) Quality checks

```bash
pnpm type-check
pnpm lint
pnpm format
```

## Troubleshooting

### Port `4200` or `3001` is already in use

- Stop the process that uses the port, then run `pnpm start` again.
- Or run services separately and change one of the ports manually if needed.

### Films are not loaded in the catalog

- Ensure mock API is running on `http://localhost:3001`.
- Check that `http://localhost:3001/films` responds in the browser.
- If needed, restart both processes:

```bash
pnpm start
```
