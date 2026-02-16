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

### Production Build

```bash
npm run build
npm run start
```

---

<details>
<summary><h2>Lab 1</h2></summary>

### Task 1 — Project Setup

- Initialized the project with `npx create-next-app` (TypeScript, ESLint, Tailwind CSS, App Router)
- Migrated to `src/` directory structure
- Cleaned default Next.js template

#### Screenshots

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

> Coming soon.

---

### Task 5 — Design

> Coming soon.

</details>
