# Aqwel AI Website

A modern, responsive website for Aqwel AI showcasing AI research, datasets, and company information.

## 🚀 Quick Start

### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to the project directory
cd "/Users/aksel/Desktop/Aqwel AI/new_website_(2.0)"

# Start a local server (Python 3)
python3 -m http.server 8000

# Or if you have Python 2
python -m SimpleHTTPServer 8000
```

Then open: http://localhost:8000

### Option 2: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Navigate to the project directory
cd "/Users/aksel/Desktop/Aqwel AI/new_website_(2.0)"

# Start the server
http-server -p 8000
```

Then open: http://localhost:8000

### Option 3: VS Code Live Server
If using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
/
├── index.html              # Homepage
├── pages/                  # Additional pages
│   ├── about.html
│   ├── datasets.html       # Comprehensive datasets page
│   ├── docs.html
│   ├── research.html
│   ├── safety.html
│   └── careers.html
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── components.js       # Reusable components
│   ├── datasets.js         # Dataset functionality
│   └── script.js           # Main JavaScript
├── images/                 # Images and icons
└── datasets/               # Dataset files
    ├── AI & Tech/
    ├── Business & Finance/
    ├── Entertainment & Media/
    └── ... (12 categories total)
```

## 🎨 Features

### Homepage
- Modern hero section with animated elements
- Feature showcase
- Company mission and values
- Investment opportunity section
- Aion library showcase
- FAQ section

### Datasets Page
- **200+ datasets** across 12 categories
- Real-time search and filtering
- Download functionality (CSV/JSON)
- Live preview modals
- Responsive design
- Dark mode support

### Design System
- **Tailwind CSS** for styling
- **Inter font** for typography
- **Dark/Light mode** toggle
- **Mobile-first** responsive design
- **Smooth animations** and transitions

## 🔧 Development Notes

### Running Locally
- **Always use a local server** - don't open HTML files directly in browser
- The website uses relative paths that require HTTP/HTTPS protocol
- ServiceWorker and some features only work with proper server setup

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive Web App features

### Performance
- Optimized images and assets
- Lazy loading for better performance
- Preloading of critical resources

## 📊 Dataset Collection

The website showcases a comprehensive collection of datasets:

- **AI & Tech**: Research papers, GitHub projects, programming languages
- **Business & Finance**: Cryptocurrency, stocks, banking, startups
- **Entertainment & Media**: Movies, TV shows, music, books
- **Geography & Demographics**: Countries, cities, population data
- **Food & Retail**: Restaurants, products, e-commerce data
- **Gaming & Esports**: Video games, tournaments, streaming
- **Sports & Fitness**: Teams, athletes, events
- **Art & Creativity**: Artists, museums, NFTs
- **Culture & Society**: Languages, religions, holidays
- **Education & Research**: Universities, research data
- **Influencers & Blogging**: Social media, content creators
- **Transport & Mobility**: Transportation, public transit

## 🚀 Deployment

For production deployment:

1. **Replace Tailwind CDN** with local installation:
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

2. **Optimize images** and assets

3. **Set up proper hosting** (Netlify, Vercel, GitHub Pages, etc.)

4. **Configure HTTPS** for ServiceWorker functionality

## 📝 License

© 2025 Aqwel AI. All rights reserved.