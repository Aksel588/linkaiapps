# Aqwel AI Website - HTML/CSS/JS Version

This is a converted version of the Aqwel AI Next.js website to simple HTML, CSS, and JavaScript with Tailwind CSS.

## Files Structure

```
/
├── index.html              # Main homepage
├── css/                    # Stylesheets
│   └── styles.css          # Custom CSS styles
├── js/                     # JavaScript files
│   ├── script.js           # Main JavaScript functionality
│   └── components.js       # Component loader utility
├── images/                 # Static assets
│   ├── logo_website.png
│   ├── logo_ceo.png
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest
│   ├── browserconfig.xml
│   ├── robots.txt
│   └── sitemap.xml
├── pages/                  # Additional pages
│   ├── about.html          # About page
│   ├── docs.html           # Documentation page
│   ├── research.html       # Research page
│   ├── safety.html         # AI Safety page
│   └── careers.html        # Careers page
├── components/             # Reusable components
│   ├── header.html         # Header component
│   └── footer.html         # Footer component
└── README.md               # This file
```

## Features

### ✅ Converted Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Mobile Navigation**: Hamburger menu with smooth animations
- **FAQ Accordion**: Interactive FAQ section with JavaScript
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **SEO Optimized**: Complete meta tags, structured data, and Open Graph
- **Performance**: Optimized loading and animations
- **Accessibility**: ARIA labels, keyboard navigation, focus states

### 🎨 Design Features
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Typography**: Inter font family for better readability
- **Animations**: Smooth transitions and hover effects
- **Icons**: SVG icons throughout the interface
- **Color Scheme**: Professional gray and black color palette

### 📱 Mobile Features
- **Responsive Layout**: Adapts to all screen sizes
- **Touch-Friendly**: Optimized touch targets (44px minimum)
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Performance**: Optimized for mobile loading

## Technical Details

### HTML Structure
- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- ARIA labels for accessibility
- Meta tags for SEO and social sharing
- Structured data (JSON-LD) for search engines

### CSS Architecture
- Tailwind CSS for utility-first styling
- Custom CSS for specific animations and effects
- Mobile-first responsive design
- CSS custom properties for theming
- Performance optimizations (font-smoothing, etc.)

### JavaScript Functionality
- Vanilla JavaScript (no frameworks)
- Modular code organization
- Event delegation for performance
- Debounced scroll and resize handlers
- Intersection Observer for animations
- Error handling and performance monitoring

## Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+
- **Features**: ES6+ JavaScript, CSS Grid, Flexbox, Intersection Observer

## Performance Features

- **Lazy Loading**: Images and non-critical resources
- **Preloading**: Critical resources loaded early
- **Minification**: Optimized CSS and JavaScript
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip compression support

## SEO Features

- **Meta Tags**: Complete meta description, keywords, and Open Graph
- **Structured Data**: JSON-LD for rich snippets
- **Semantic HTML**: Proper heading structure and landmarks
- **Alt Text**: Descriptive alt text for all images
- **Canonical URLs**: Proper canonical link tags
- **Sitemap**: XML sitemap support

## Getting Started

1. **Clone or Download**: Get the files from this repository
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Server** (Recommended): Use a local server for best performance:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization

### Colors
Edit the Tailwind configuration in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#your-color',
                secondary: '#your-color'
            }
        }
    }
}
```

### Content
- **Text Content**: Edit directly in `index.html`
- **FAQ Data**: Modify the `faqData` array in `script.js`
- **Images**: Replace images in the `public/` folder

### Styling
- **Custom CSS**: Add styles to `styles.css`
- **Tailwind Classes**: Use utility classes in HTML
- **Responsive Design**: Modify breakpoints as needed

## Deployment

### Static Hosting
This website can be deployed to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to an S3 bucket

### CDN Setup
For better performance, consider:
- **Cloudflare**: Free CDN and optimization
- **AWS CloudFront**: Global content delivery
- **KeyCDN**: High-performance CDN

## Conversion Notes

### From Next.js to Vanilla
- **React Components**: Converted to HTML templates
- **State Management**: Replaced with vanilla JavaScript
- **Routing**: Replaced with anchor links and page navigation
- **Image Optimization**: Using standard HTML img tags
- **Font Loading**: Using Google Fonts CDN

### Preserved Features
- **Design**: Identical visual appearance
- **Functionality**: All interactive features work
- **Performance**: Optimized loading and animations
- **SEO**: Complete meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation

## Browser Testing

Tested on:
- ✅ Chrome 120+
- ✅ Firefox 120+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ Mobile Chrome
- ✅ Mobile Safari

## License

This project is part of Aqwel AI's website. All rights reserved.

## Support

For questions or issues with this conversion:
- **Email**: aqwelai.company@gmail.com
- **GitHub**: Create an issue in the repository
- **Documentation**: Check the inline comments in the code

---

**Note**: This is a static HTML version of the original Next.js website. For dynamic features like server-side rendering or API routes, you would need to implement additional backend functionality.
