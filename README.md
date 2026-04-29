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

### 2) Run development server

```bash
pnpm start
```

Open `http://localhost:4200/`.

### 3) Build project

```bash
pnpm build
```

### 4) Run tests

![Coverage Badge Workflow](https://github.com/dashque/angular2026q2/actions/workflows/badges.yml/badge.svg?branch=main)
![Quality Check](https://github.com/dashque/angular2026q2/actions/workflows/quality-check.yml/badge.svg?branch=main)

```bash
pnpm test
```

### 5) Quality checks

```bash
pnpm type-check
pnpm lint
pnpm format
```
