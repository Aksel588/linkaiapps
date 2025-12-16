# Aqwel AI Web Experience

![Aqwel AI Logo](images/logo_website.png)

<<<<<<< HEAD


© 2025 Aqwel AI. All rights reserved.
=======
A polished, responsive site for Aqwel AI that blends modern research storytelling with festive, cinematic touches (snow overlays, celebratory moments) while staying production-ready. Built with Tailwind via CDN, custom CSS/JS, and a clean page set (home, docs, research, datasets, safety, careers, about).

Born in 2025, Aqwel AI is a safe AGI company focused on the hardest frontiers—space, mathematics, and health. The flagship Aion library (175+ functions across 12 modules) lets researchers simulate galaxies and orbital dynamics, explore theorem discovery, and build health diagnostics with alignment-first guardrails. Vision: stand alongside DeepMind, OpenAI, and Anthropic, but with a sharper thesis—empowering humanity through AI for space, science, and health. We pair warm, modern design with rigorous engineering: dark/light modes, responsive layouts, research highlights, dataset search, and celebratory seasonal moments (snow, New Year overlay) that can be toggled as needed.

## Quick start
- From the project root, serve locally (required for relative assets and scripts):
  - Python: `python3 -m http.server 8000` then open `http://localhost:8000`
  - Node: `npm install -g http-server && http-server -p 8000`
  - VS Code: Live Server extension → “Open with Live Server” on `index.html`

## What’s inside
- `index.html` plus `pages/` for about, docs, research, datasets, safety, careers.
- `css/styles.css`, `js/components.js`, `js/script.js`, `js/datasets.js`.
- `images/` holds logos/icons; `datasets/` contains sample dataset files.
- Tailwind configured inline for dark mode and custom font stack.

## Highlights
- Responsive layout with dark mode and smooth animations.
- Rich hero/section design, Aion library showcase, dataset search/filter experience, and research highlights.
- Snow + celebration layers (New Year cinematic overlay) kept in the main page; easy to toggle or extend.
- Accessibility-friendly nav and mobile menus.

## Production tips
- Replace CDN Tailwind with a local build for performance: `npm install -D tailwindcss && npx tailwindcss init` then pipe through your bundler.
- Optimize images (lossless/lossy as appropriate) and consider preloading critical assets.
- Host on HTTPS (Netlify/Vercel/GitHub Pages) to keep service-worker-like behaviors future-proof.
- Keep the snow/celebration overlays behind a feature flag if you need a lean variant for launch.

## Contact
- GitHub: https://github.com/Aqwel-AI
- LinkedIn: https://www.linkedin.com/company/aqwelaiofficial/
- Email: aqwelai.company@gmail.com
- Founder: Aksel Aghajanyan
>>>>>>> ef645bb (chore: update README with Aqwel AI mission and product context)
