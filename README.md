# NextJS Labs

A Next.js laboratory project built with TypeScript, Tailwind CSS v4, and App Router.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database (Development)

To run the local PostgreSQL database using Docker:

```bash
docker-compose up -d
```

### Testing

Run unit tests with Jest:

```bash
npm run test
npm run test:coverage   # To check code coverage
```

Run End-to-End tests with Playwright:

```bash
npx playwright test
npx playwright show-report   # To view the HTML report
```

### Production Build

```bash
npm run build
npm run start
```

---

<details>
<summary><b>📘 Lab 1 — Project Setup, Pages, Data Fetching, Styling & Design</b></summary>

### Task 1 — Project Setup

- Initialized the project with `npx create-next-app` (TypeScript, ESLint, Tailwind CSS, App Router)
- Migrated to `src/` directory structure
- Cleaned default Next.js template

#### Screenshots

**Checking Node.js and npm versions:**

![Node.js Version](screenshots/task1-node-npm-ver.PNG)

**Project structure after setup:**

![Project Structure](screenshots/task1-project-structure.PNG)

---

### Task 2 — Pages & Navigation

- Created pages: `/`, `/articles`, `/articles/favorite`, `/articles/create`, `/profile/settings`, `/profile/security`
- Route Group `(main)` for shared layout (all pages except `/`)
- Main navigation: Articles, Settings, Security
- Articles sub-navigation: Favorite, Create
- Active link highlighting via `NavLink` component using `usePathname()`

#### Screenshots

**Home page (`/`) — no navigation:**

![Home Page](screenshots/task2-home-page.PNG)

**Articles page (`/articles`) — main nav + sub-nav:**

![Articles Page](screenshots/task2-articles-page.PNG)

**Profile Settings (`/profile/settings`) — main nav only:**

![Profile Settings](screenshots/task2-profile-settings.PNG)

---

### Task 3 — Data Fetching

- Fetching all posts from JSONPlaceholder API on `/articles`
- `loading.tsx` shows loading state while articles are being fetched
- `/articles/favorite` — 3 independent `<Suspense>` boundaries with `FavoriteArticle` async component
- `/articles/[id]` — dynamic page fetching post + comments in parallel
- `generateStaticParams()` for static generation of articles with ID 1-10
- TypeScript interfaces for API responses in `lib/types.ts`

#### Screenshots

**Articles page loading state:**

![Articles Loading](screenshots/task3-articles-loading.PNG)

**Articles list after loading:**

![Articles List](screenshots/task3-articles-list.PNG)

**Favorite articles list after loading:**

![Favorite Loading](screenshots/task3-favorite.PNG)

**Article detail page with comments:**

![Article Detail](screenshots/task3-article-detail.PNG)

**Console output for fetching data:**

![Console Output](screenshots/task3-console-output.PNG)

---

### Task 4 — Styling

- Global CSS files: `variables.css` (design tokens), `typography.css`, `layout.css`
- CSS Module for navigation menu (`NavMenu.module.css`)
- Custom Tailwind CSS v4 theme: breakpoints (xs–2xl), color palettes (primary, secondary, accent, neutral)
- Shimmer skeleton loading components (`ui/skeletons.tsx`) with Tailwind classes
- Ant Design integration with `AntdRegistry` for SSR
- Ant Design components: Form, Input, Button, Card, Switch, Divider

#### Screenshots

**Styled navigation with active state:**

![Navigation Styled](screenshots/task4-nav-styled.png)

**Skeleton loading with shimmer animation:**

![Skeletons](screenshots/task4-skeletons.png)

**Create Article page with Ant Design form:**

![Create Article](screenshots/task4-create-antd.png)

**Profile Settings with Ant Design components:**

![Settings](screenshots/task4-settings-antd.png)

---

### Task 5 — Design

- Dark mode as default with working light mode toggle (ThemeProvider + localStorage)
- Hero landing page with animated gradient blobs and CTA buttons
- Glassmorphism navigation bar with sticky positioning and gradient logo
- Articles page with responsive card grid (1/2/3 columns) and hover animations
- Article detail with gradient avatars and styled comments section
- Favorite articles with accent color badges and fade-in animations
- Dark-themed Ant Design forms with gradient buttons
- Inter font for improved readability
- Smooth theme transition (0.3s ease)

#### Screenshots

**Hero landing page:**

![Home](screenshots/task5-home.png)

**Articles card grid:**

![Articles Grid](screenshots/task5-articles-grid.png)

**Article detail with comments:**

![Article Detail](screenshots/task5-article-detail.png)

**Favorite articles:**

![Favorite](screenshots/task5-favorite.png)

**Create article form:**

![Create](screenshots/task5-create.png)

**Settings — dark theme:**

![Settings Dark](screenshots/task5-settings-dark.png)

**Settings — light theme:**

![Settings Light](screenshots/task5-settings-light.png)

</details>

---

<details>
<summary><b>📗 Lab 2 — Environment Variables, Databases, API & Client Fetching</b></summary>

### Task 1 — Environment Variables

- Created `.env` file to securely store environment configuration.
- Added public (`NEXT_PUBLIC_APP_VERSION`) and server-side (`SECRET_API_KEY`, `DB_CONNECTION_STATUS`) variables.
- Displayed `NEXT_PUBLIC_APP_VERSION` on the UI within the Settings page.

#### Screenshots

**UI Display (Settings Page):**

![UI Display](screenshots/lab2_env_ui.png)

### Task 2 — Production Database (Vercel Postgres / Neon)

- Created a Postgres database on Neon.
- Configured `.env` with connection variables (`DATABASE_URL` and `DATABASE_URL_UNPOOLED`).
- Initialized Prisma ORM and created schema for `Article` and `Comment` models.
- Executed `npx prisma db push` to synchronize the schema.
- Created and executed `seed.ts` script to populate the database with initial mock data.

#### Screenshots

**Database Synchronization and Seeding Logs:**

![Database Seeding](screenshots/lab2_proddb_logs.png)

### Task 3 — Development Database (Docker)

- Created a `docker-compose.yml` to spin up a local PostgreSQL container for development.
- Switched the `.env` connection strings to point to the local Docker database (`postgres://postgres:postgrespassword@localhost:5432/nextjs_labs_dev`).
- Re-ran `npx prisma db push` and `npx prisma db seed` to initialize the local dev database.

#### Screenshots

**Docker Container Running:**

![Docker Dev DB](screenshots/lab2_docker_db.png)

### Task 4 — API Routes (Route Handlers)

- Created Next.js Route Handlers inside `src/app/api/articles` to provide a RESTful API.
- Implemented full CRUD functionality using Prisma:
  - `GET /api/articles` — Fetch all articles.
  - `POST /api/articles` — Create a new article.
  - `GET /api/articles/[id]` — Fetch a specific article by ID.
  - `PATCH /api/articles/[id]` — Update an existing article.
  - `DELETE /api/articles/[id]` — Delete an article.
- Created `src/lib/prisma.ts` to instantiate a global Prisma client to prevent connection exhaustion during development hot-reloads.

#### Screenshots

**API Testing via Postman (Insomnia):**

![Postman API Test](screenshots/lab2_api_postman.png)

### Task 5 — Client Pages with SWR

- Refactored `api.ts` to fetch from local `/api` routes instead of JSONPlaceholder.
- Converted `ArticlesPage` to a Client Component using `useSWR` for fetching the list of articles.
- Converted `ArticlePage` to a Client Component using `useSWR` to fetch an individual article and its comments.
- Updated `FavoriteArticle` UI component to fetch data dynamically via SWR.
- Handled `isLoading` and `error` states gracefully with skeleton loaders and error messages.

#### Screenshots

**Articles List (SWR):**

![Articles List](screenshots/lab2_swr_list.png)

**Article Detail (SWR):**

![Article Detail](screenshots/lab2_swr_detail.png)

</details>

---

<details>
<summary><b>📙 Lab 3 — OpenID Connect (Authentication)</b></summary>

### Task 1 — Users Table

- Added `User` model to Prisma schema with `email` as the unique identifier field.
- Fields: `id`, `email` (unique), `name`, `password` (optional, for OAuth users), `image`, `age`, `provider`, `createdAt`, `updatedAt`.
- Executed migration `add_users_table` to create the table in the database.
- Added a test user (`test@example.com`) to the seed script.

#### Screenshots

**User table in database:**

![Migration](screenshots/lab3-task1-migration.png)

---

### Task 2 — Credentials Authentication (Login/Password)

- Installed and configured NextAuth.js (Auth.js v5) with Credentials provider.
- Created `auth.ts`, `auth.config.ts` and `middleware.ts` for route protection.
- Login page (`/login`) with email + password form.
- Registration page (`/register`) with name, email, password.
- Password hashing with `bcryptjs`, validation with `Zod`.
- Navigation updates: Login/Logout button based on session state.

#### Screenshots

**Login page:**

![Login](screenshots/lab3-task2-login.png)

**Registration page:**

![Register](screenshots/lab3-task2-register.png)

**Successful authentication:**

![Auth Success](screenshots/lab3-task2-auth-success.png)

---

### Task 3 — Google OAuth Authentication

- Configured Google OAuth 2.0 in Google Cloud Console.
- Added Google provider to NextAuth configuration.
- "Sign in with Google" button on login page.
- Auto-creation of user record in DB on first Google sign-in (upsert by email).

#### Screenshots

**Google sign-in flow:**

![Google Auth](screenshots/lab3-task3-google-login-form.png)

![Google Auth](screenshots/lab3-task3-google-login-auth.png)

![Google Auth](screenshots/lab3-task3-google-login-success.png)

---

### Task 4 — GitHub OAuth Authentication

- Created GitHub OAuth App in Developer settings.
- Added GitHub provider to NextAuth configuration.
- "Sign in with GitHub" button on login page.
- Auto-creation of user record in DB on first GitHub sign-in (upsert by email).

#### Screenshots

**GitHub sign-in flow:**

![GitHub Auth](screenshots/lab3-task4-github-login-form.png)

![GitHub Auth](screenshots/lab3-task4-github-login-auth.png)

![GitHub Auth](screenshots/lab3-task4-github-login-success.png)

---

### Task 5 — User Profile Page

- Profile page (`/profile`) displaying user info: name, email, avatar, provider, registration date.
- Profile editing form: name, age — saved via `PATCH /api/auth/profile`.
- Security page (`/profile/security`) for password change (available only for credentials users).
- Navigation shows logged-in user's name and Logout button.

#### Screenshots

**Profile page:**

![Profile](screenshots/lab3-task5-profile.png)

**Password change page:**

![Security](screenshots/lab3-task5-security.png)

</details>

---

<details>
<summary><b>🧪 Lab 4 — Testing and CI</b></summary>

### Task 1 — Jest Testing Framework Setup

- Installed Jest, `jest-environment-jsdom`, and `@testing-library` packages.
- Created `jest.config.ts` configured for Next.js App Router using `next/jest`.
- Created `jest.setup.ts` to include custom jest-dom matchers.
- Added a basic unit test for the home page (`__tests__/page.test.tsx`).
- Configured npm `test` script in `package.json`.

#### Screenshots

**Successful basic Jest test run:**

![Jest Setup](screenshots/lab4-task1-jest.png)

---

### Task 2 — Code Coverage

- Configured `jest.config.ts` with `coverageThreshold` requiring a minimum of **40%** coverage for statements, branches, functions, and lines.
- Configured `collectCoverageFrom` to focus on source files (`src/`) while excluding irrelevant files (like types or root layouts).
- Added the `test:coverage` script to `package.json` to generate coverage reports.
- Created unit tests for the following components to meet the coverage threshold:
  - `AuthProvider`
  - `ThemeProvider`
  - `NavLink`
  - `UserNav`
  - `skeletons`
  - `ArticlesPage` (Main Feed)
  - Layout Pages (`LoginPage`, `RegisterPage`, `CreateArticlePage`, `FavoriteArticlesPage`)
- Handled mock implementations for `next/navigation`, `next-auth/react`, `swr`, and `antd`.
- Verified that the testing suite met the required 40% criteria globally.

#### Screenshots

**Test Coverage Results:**

![Code Coverage](screenshots/lab4-task2-coverage.png)

---

### Task 3 — End-to-End (E2E) Testing

- Initialized Playwright testing framework (`npm init playwright@latest`).
- Configured Playwright to use `baseURL: 'http://localhost:3000'` and automatically start the Next.js development server during tests.
- Implemented 3 key End-to-End tests in `e2e/app.spec.ts`:
  1. Validates the Home page loads correctly and displays the primary heading.
  2. Verifies the "Browse Articles" navigation flow.
  3. Verifies the "Sign Up" navigation flow from the Login page.
- Executed the E2E tests successfully across chromium, firefox, and webkit browsers.

#### Screenshots

**Successful Playwright E2E Test Run:**

![Playwright Tests](screenshots/lab4-task3-playwright.png)

**Playwright E2E Test Report:**

![Playwright Test Report](screenshots/lab4-task3-playwright-report.png)

---

### Task 4 — GitHub Actions Workflow (CI)

- Created `.github/workflows/ci.yml` based on the Playwright template.
- Configured the workflow to run automatically on `push` and `pull_request` to `main`, `master`, and `lab-4` branches.
- Added steps to:
  - Install dependencies (`npm ci`).
  - Run the Jest unit test suite (`npm run test`).
  - Install Playwright browsers.
  - Run the Playwright E2E test suite (`npx playwright test`).
- The pipeline ensures both unit and E2E tests are executed for Continuous Integration.

#### Screenshots

**Successful CI Pipeline Execution:**

![CI Pipeline](screenshots/lab4-task4-ci.png)

</details>
