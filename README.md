# Portfolio Website
https://prakhardwivedi.vercel.app/

## What It Is

This is a modern, personal developer portfolio website designed to showcase professional experience, projects, certifications, and programming achievements. It features a responsive design, dynamic data fetching for coding stats, and an interactive UI.

<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/b1646155-23e1-4f59-a2ad-7d0daf5876e9" />

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/) (v19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules (Vanilla CSS with scoped scoping)
- **Deployment**: Vercel

## Libraries Used

- **`framer-motion`**: For smooth page transitions and component animations.
- **`react-icons`**: For consistent vector icons (Feather, Simple Icons, etc.).
- **`react-github-calendar`**: To display the GitHub contribution heatmap.
- **`nodemailer`**: For handling contact form submissions via email.

## How It Works

- **Routing**: Built using the Next.js App Router (`src/app`), allowing for file-system based routing and server components.
- **Styling**: Uses CSS Modules (`*.module.css`) for component-level style isolation, ensuring no global namespace pollution.
- **Data Fetching**:
  - **Client-Side**: Uses `useEffect` and `fetch` for live stats from Codeforces and GitHub APIs in the Programming section.
  - **Static Data**: Project and experience data are stored in typed data files (`src/data`) for easy maintenance.
- **API**: Contains a server-side API route (`/api/contact`) to handle form submissions securely using Nodemailer.

## Structure and Routing

### File Structure

The project follows the standard Next.js App Router structure:

```
src/
├── app/                    # Application routes
│   ├── api/                # API routes (e.g., contact form)
│   ├── about/              # About page
│   ├── certifications/     # Certifications page
│   ├── contact/            # Contact page
│   ├── education/          # Education page
│   ├── experience/         # Experience/Work page
│   ├── programming/        # Coding stats & blog
│   ├── projects/           # Projects showcase
│   ├── globals.css         # Global styles & variables
│   ├── layout.tsx          # Root layout (Sidebar + Main Content)
│   └── page.tsx            # Home page
├── components/             # Reusable UI components
│   ├── Sidebar.tsx         # Main navigation
│   ├── StatCard.tsx        # Programming stat display
│   ├── ContestTile.tsx     # Blog post tile
│   └── ...
└── data/                   # Static data definitions
```

### Routing

| Route             | Description                                |
| ----------------- | ------------------------------------------ |
| `/`               | Home page with introduction and heatmap    |
| `/about`          | Detailed personal background               |
| `/experience`     | Work history and internships               |
| `/projects`       | Showcase of technical projects             |
| `/certifications` | Professional certificates and achievements |
| `/programming`    | Live coding stats (LeetCode, GitHub, etc.) |
| `/education`      | Academic background                        |
| `/contact`        | Contact form                               |
