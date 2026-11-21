# Wedding Invitation

A React and Vite single-page wedding invitation.

## Live Demo

[View the live wedding invitation](https://zohaib-muneer.github.io/Sohaib-wedding/)

## Responsive previews

The invitation layout is shown at desktop, tablet, and mobile viewport sizes:

<table>
  <tr>
    <th>Desktop (1365 × 900)</th>
    <th>Tablet (768 × 1024)</th>
    <th>Mobile (390 × 844)</th>
  </tr>
  <tr>
    <td><img src="docs/screenshots/desktop.png" width="400" alt="Wedding invitation on a desktop viewport"></td>
    <td><img src="docs/screenshots/tablet.png" width="225" alt="Wedding invitation on a tablet viewport"></td>
    <td><img src="docs/screenshots/mobile.png" width="115" alt="Wedding invitation on a mobile viewport"></td>
  </tr>
</table>

## Tools & Technologies

- React 19
- Vite 8
- JavaScript and JSX
- Tailwind CSS 4
- Framer Motion
- DotLottie React
- Animated Backgrounds
- Fontsource
- CSS
- Google Maps Embed
- Oxlint
- GitHub Pages and `gh-pages`

## Project structure

```text
src/
├── app/                 # App entry component
├── pages/               # Page-level composition
├── sections/            # Hero, event, venue, and RSVP sections
├── components/          # Shared UI and background components
├── data/                # Page or event content data
├── assets/
│   ├── animations/      # Lottie animations
│   ├── audio/           # Audio files
│   └── fonts/           # Local fonts
├── styles/              # Global styles
├── main.jsx             # React entry point
└── declarations.d.ts    # TypeScript asset declarations
```

## Getting started

Install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) with npm, then open a terminal and run:

```bash
git clone https://github.com/Zohaib-muneer/Sohaib-wedding.git
cd Sohaib-wedding
npm ci
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/`) in your browser. Keep the terminal open while using the development server; press `Ctrl+C` to stop it.

## Available commands

Run these from the project directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally (run `npm run build` first). |
| `npm run lint` | Run Oxlint. |
