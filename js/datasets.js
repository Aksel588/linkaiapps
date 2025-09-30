// Dataset metadata
const datasets = [
    // AI & Tech
    { name: "AI Research Papers", category: "AI & Tech", file: "ai_research_papers_dataset", description: "Collection of 10,000+ AI research papers with abstracts, keywords, and metadata for NLP and text analysis research.", tags: ["NLP", "Text Analysis", "Research"], records: 10247, size: "2.3 GB", icon: "document", color: "blue" },
    { name: "GitHub Projects", category: "AI & Tech", file: "github_projects_dataset", description: "Comprehensive dataset of GitHub projects with metadata, stars, forks, and programming languages.", tags: ["Open Source", "Development", "Code"], records: 50000, size: "1.8 GB", icon: "code", color: "green" },
    { name: "Programming Languages", category: "AI & Tech", file: "programming_languages_dataset", description: "Dataset containing programming languages, their features, popularity metrics, and usage statistics.", tags: ["Programming", "Languages", "Development"], records: 500, size: "15 MB", icon: "terminal", color: "purple" },
    { name: "Tech Companies", category: "AI & Tech", file: "tech_companies_dataset", description: "Comprehensive dataset of technology companies with financial data, employee counts, and market information.", tags: ["Technology", "Business", "Companies"], records: 2000, size: "45 MB", icon: "building", color: "indigo" },
    { name: "Cybersecurity", category: "AI & Tech", file: "cybersecurity_dataset", description: "Dataset of cybersecurity incidents, vulnerabilities, and security measures across different industries.", tags: ["Security", "Cybersecurity", "Vulnerabilities"], records: 15000, size: "120 MB", icon: "shield", color: "red" },
    { name: "Cloud Services", category: "AI & Tech", file: "cloud_services_dataset", description: "Comprehensive dataset of cloud service providers, pricing, features, and performance metrics.", tags: ["Cloud", "Services", "Infrastructure"], records: 5000, size: "80 MB", icon: "cloud", color: "blue" },
    { name: "Hardware", category: "AI & Tech", file: "hardware_dataset", description: "Dataset of computer hardware components, specifications, prices, and performance benchmarks.", tags: ["Hardware", "Components", "Performance"], records: 10000, size: "95 MB", icon: "chip", color: "gray" },
    { name: "Software", category: "AI & Tech", file: "software_dataset", description: "Dataset of software applications, versions, features, and user ratings across different categories.", tags: ["Software", "Applications", "Reviews"], records: 25000, size: "180 MB", icon: "application", color: "green" },
    { name: "Internet Usage", category: "AI & Tech", file: "internet_usage_dataset", description: "Global internet usage statistics, trends, and demographic data across different regions.", tags: ["Internet", "Usage", "Statistics"], records: 8000, size: "65 MB", icon: "globe", color: "cyan" },

    // Business & Finance
    { name: "Cryptocurrency", category: "Business & Finance", file: "cryptocurrency_dataset", description: "Comprehensive dataset of cryptocurrencies with prices, market caps, trading volumes, and technical data.", tags: ["Crypto", "Finance", "Trading"], records: 5000, size: "75 MB", icon: "currency", color: "yellow" },
    { name: "Stock Prices", category: "Business & Finance", file: "stock_price_simulations", description: "Simulated stock price data for various companies with historical trends and market analysis.", tags: ["Stocks", "Finance", "Trading"], records: 100000, size: "2.1 GB", icon: "chart", color: "green" },
    { name: "Banking", category: "Business & Finance", file: "banking_dataset", description: "Dataset of banking institutions, services, fees, and financial performance metrics.", tags: ["Banking", "Finance", "Services"], records: 3000, size: "55 MB", icon: "bank", color: "blue" },
    { name: "Startups", category: "Business & Finance", file: "startup_dataset", description: "Comprehensive dataset of startup companies, funding rounds, valuations, and growth metrics.", tags: ["Startups", "Funding", "Valuation"], records: 15000, size: "200 MB", icon: "rocket", color: "purple" },
    { name: "Real Estate", category: "Business & Finance", file: "real_estate_dataset", description: "Real estate market data including property prices, locations, features, and market trends.", tags: ["Real Estate", "Property", "Market"], records: 50000, size: "1.5 GB", icon: "home", color: "orange" },
    { name: "Insurance", category: "Business & Finance", file: "insurance_dataset", description: "Dataset of insurance companies, policies, claims data, and risk assessment metrics.", tags: ["Insurance", "Risk", "Claims"], records: 8000, size: "110 MB", icon: "shield-check", color: "indigo" },
    { name: "Retail Sales", category: "Business & Finance", file: "retail_sales_dataset", description: "Retail sales data across different categories, regions, and time periods with trend analysis.", tags: ["Retail", "Sales", "Commerce"], records: 75000, size: "1.2 GB", icon: "shopping-cart", color: "green" },
    { name: "Employment & Wages", category: "Business & Finance", file: "employment_wage_dataset", description: "Employment statistics, wage data, and labor market trends across different industries.", tags: ["Employment", "Wages", "Labor"], records: 25000, size: "180 MB", icon: "briefcase", color: "blue" },
    { name: "Global Trade", category: "Business & Finance", file: "global_trade_dataset", description: "International trade data, import/export statistics, and economic indicators.", tags: ["Trade", "Global", "Economics"], records: 40000, size: "300 MB", icon: "globe-alt", color: "cyan" },
    { name: "Inflation", category: "Business & Finance", file: "inflation_dataset", description: "Inflation rates, consumer price indices, and economic indicators across different countries.", tags: ["Inflation", "Economics", "CPI"], records: 12000, size: "90 MB", icon: "trending-up", color: "red" },
    { name: "Consumer Spending", category: "Business & Finance", file: "consumer_spending_dataset", description: "Consumer spending patterns, preferences, and economic behavior analysis.", tags: ["Consumer", "Spending", "Behavior"], records: 30000, size: "220 MB", icon: "credit-card", color: "purple" },
    { name: "Company Financials", category: "Business & Finance", file: "company_financials_dataset", description: "Financial statements, ratios, and performance metrics for publicly traded companies.", tags: ["Financials", "Companies", "Analysis"], records: 20000, size: "350 MB", icon: "calculator", color: "green" },
    { name: "Venture Capital", category: "Business & Finance", file: "venture_capital_deals_dataset", description: "Venture capital investment data, deal sizes, valuations, and investor information.", tags: ["VC", "Investment", "Funding"], records: 18000, size: "280 MB", icon: "investment", color: "indigo" },
    { name: "Corporate M&A", category: "Business & Finance", file: "corporate_mergers_acquisitions_dataset", description: "Mergers and acquisitions data, deal values, and corporate restructuring information.", tags: ["M&A", "Corporate", "Deals"], records: 12000, size: "160 MB", icon: "handshake", color: "blue" },
    { name: "Banking Fraud", category: "Business & Finance", file: "banking_fraud_dataset", description: "Banking fraud detection dataset with transaction patterns and risk indicators.", tags: ["Fraud", "Banking", "Security"], records: 25000, size: "190 MB", icon: "exclamation-triangle", color: "red" },
    { name: "Business Bankruptcy", category: "Business & Finance", file: "business_bankruptcy_dataset", description: "Business bankruptcy filings, causes, and financial distress indicators.", tags: ["Bankruptcy", "Business", "Risk"], records: 8000, size: "70 MB", icon: "exclamation-circle", color: "orange" },
    { name: "Pension & Retirement", category: "Business & Finance", file: "pension_retirement_dataset", description: "Pension fund data, retirement planning, and social security statistics.", tags: ["Pension", "Retirement", "Planning"], records: 15000, size: "130 MB", icon: "user-group", color: "purple" },
    { name: "Taxes", category: "Business & Finance", file: "taxes_dataset", description: "Tax rates, policies, and revenue data across different jurisdictions.", tags: ["Taxes", "Policy", "Revenue"], records: 10000, size: "85 MB", icon: "receipt-tax", color: "gray" },

    // Entertainment & Media
    { name: "Movies", category: "Entertainment & Media", file: "movies_dataset", description: "Comprehensive movie database with ratings, genres, box office data, and cast information.", tags: ["Movies", "Entertainment", "Cinema"], records: 50000, size: "1.8 GB", icon: "film", color: "purple" },
    { name: "TV Shows", category: "Entertainment & Media", file: "tv_shows_dataset", description: "Television shows database with ratings, seasons, episodes, and streaming information.", tags: ["TV", "Shows", "Streaming"], records: 25000, size: "900 MB", icon: "tv", color: "blue" },
    { name: "Music", category: "Entertainment & Media", file: "music_dataset", description: "Music database with artists, albums, songs, genres, and streaming statistics.", tags: ["Music", "Artists", "Albums"], records: 100000, size: "2.5 GB", icon: "musical-note", color: "pink" },
    { name: "Books", category: "Entertainment & Media", file: "books_dataset", description: "Book database with authors, genres, ratings, and publication information.", tags: ["Books", "Literature", "Reading"], records: 75000, size: "1.2 GB", icon: "book", color: "green" },
    { name: "Celebrities", category: "Entertainment & Media", file: "celebrity_dataset", description: "Celebrity database with biographical information, career data, and social media presence.", tags: ["Celebrities", "Entertainment", "Biography"], records: 15000, size: "400 MB", icon: "star", color: "yellow" },
    { name: "Animation", category: "Entertainment & Media", file: "animation_dataset", description: "Animation films and series database with technical details and production information.", tags: ["Animation", "Films", "Production"], records: 8000, size: "200 MB", icon: "sparkles", color: "cyan" },
    { name: "Comics", category: "Entertainment & Media", file: "comics_dataset", description: "Comic books and graphic novels database with publishers, creators, and sales data.", tags: ["Comics", "Graphic Novels", "Publishers"], records: 12000, size: "180 MB", icon: "book-open", color: "orange" },
    { name: "Theater", category: "Entertainment & Media", file: "theater_dataset", description: "Theater productions, plays, and performances database with venue and cast information.", tags: ["Theater", "Plays", "Performances"], records: 5000, size: "120 MB", icon: "theater-masks", color: "purple" },
    { name: "Awards", category: "Entertainment & Media", file: "awards_dataset", description: "Entertainment awards database with winners, nominees, and ceremony information.", tags: ["Awards", "Recognition", "Ceremonies"], records: 20000, size: "150 MB", icon: "trophy", color: "gold" },
    { name: "Social Media Trends", category: "Entertainment & Media", file: "social_media_trends_dataset", description: "Social media trends, hashtags, and viral content analysis across platforms.", tags: ["Social Media", "Trends", "Viral"], records: 30000, size: "250 MB", icon: "share", color: "blue" },
    { name: "Streaming Platforms", category: "Entertainment & Media", file: "streaming_platforms_dataset", description: "Streaming service data including content libraries, pricing, and user statistics.", tags: ["Streaming", "Platforms", "Content"], records: 10000, size: "160 MB", icon: "play", color: "red" },

    // Geography & Demographics
    { name: "Countries", category: "Geography & Demographics", file: "countries_dataset", description: "Comprehensive country database with demographics, geography, and economic data.", tags: ["Countries", "Demographics", "Geography"], records: 195, size: "45 MB", icon: "globe", color: "blue" },
    { name: "Cities", category: "Geography & Demographics", file: "cities_dataset", description: "Global cities database with population, coordinates, and urban statistics.", tags: ["Cities", "Urban", "Population"], records: 50000, size: "800 MB", icon: "building-office", color: "gray" },
    { name: "Population", category: "Geography & Demographics", file: "population_dataset", description: "Population statistics, growth rates, and demographic trends by region.", tags: ["Population", "Demographics", "Growth"], records: 100000, size: "1.5 GB", icon: "users", color: "green" },
    { name: "Climate", category: "Geography & Demographics", file: "climate_dataset", description: "Climate data including temperature, precipitation, and weather patterns.", tags: ["Climate", "Weather", "Environment"], records: 75000, size: "1.2 GB", icon: "cloud-sun", color: "cyan" },
    { name: "Economies", category: "Geography & Demographics", file: "economies_dataset", description: "Economic indicators, GDP, and financial data by country and region.", tags: ["Economy", "GDP", "Finance"], records: 30000, size: "400 MB", icon: "chart-bar", color: "green" },
    { name: "Languages", category: "Geography & Demographics", file: "languages_dataset", description: "World languages database with speakers, regions, and linguistic features.", tags: ["Languages", "Linguistics", "Culture"], records: 7000, size: "80 MB", icon: "language", color: "purple" },
    { name: "Religions", category: "Geography & Demographics", file: "religions_dataset", description: "Religious demographics and distribution data across different regions.", tags: ["Religion", "Demographics", "Culture"], records: 5000, size: "60 MB", icon: "church", color: "indigo" },
    { name: "Holidays", category: "Geography & Demographics", file: "holidays_dataset", description: "Global holidays, festivals, and cultural celebrations database.", tags: ["Holidays", "Culture", "Celebrations"], records: 15000, size: "120 MB", icon: "calendar", color: "orange" },

    // Food & Retail
    { name: "Restaurants", category: "Food & Retail", file: "restaurants_dataset", description: "Restaurant database with cuisine types, ratings, locations, and menu information.", tags: ["Restaurants", "Food", "Cuisine"], records: 100000, size: "1.8 GB", icon: "utensils", color: "orange" },
    { name: "Food Products", category: "Food & Retail", file: "food_products_dataset", description: "Food products database with nutritional information, ingredients, and pricing.", tags: ["Food", "Nutrition", "Products"], records: 50000, size: "900 MB", icon: "apple", color: "green" },
    { name: "Retail Stores", category: "Food & Retail", file: "retail_stores_dataset", description: "Retail store database with locations, products, and sales data.", tags: ["Retail", "Stores", "Commerce"], records: 75000, size: "1.2 GB", icon: "store", color: "blue" },
    { name: "E-commerce", category: "Food & Retail", file: "ecommerce_dataset", description: "E-commerce platform data including products, sellers, and transaction information.", tags: ["E-commerce", "Online", "Shopping"], records: 200000, size: "3.5 GB", icon: "shopping-bag", color: "purple" },
    { name: "Supermarkets", category: "Food & Retail", file: "supermarkets_dataset", description: "Supermarket chain database with locations, products, and pricing information.", tags: ["Supermarkets", "Grocery", "Retail"], records: 30000, size: "500 MB", icon: "shopping-cart", color: "green" },
    { name: "Food Chains", category: "Food & Retail", file: "food_chains_dataset", description: "Fast food and restaurant chain database with locations and menu data.", tags: ["Food Chains", "Fast Food", "Franchises"], records: 25000, size: "400 MB", icon: "hamburger", color: "red" },
    { name: "Beverages", category: "Food & Retail", file: "beverages_dataset", description: "Beverage products database with brands, types, and nutritional information.", tags: ["Beverages", "Drinks", "Brands"], records: 15000, size: "200 MB", icon: "cup", color: "blue" },
    { name: "Food Delivery", category: "Food & Retail", file: "food_delivery_dataset", description: "Food delivery service data including restaurants, orders, and delivery metrics.", tags: ["Delivery", "Food", "Services"], records: 50000, size: "800 MB", icon: "truck", color: "orange" },
    { name: "Food Reviews", category: "Food & Retail", file: "food_reviews_dataset", description: "Food and restaurant reviews with ratings, comments, and sentiment analysis.", tags: ["Reviews", "Food", "Ratings"], records: 100000, size: "1.5 GB", icon: "star", color: "yellow" },
    { name: "Food Trends", category: "Food & Retail", file: "food_trends_dataset", description: "Food trend analysis including popular ingredients, cuisines, and dietary preferences.", tags: ["Trends", "Food", "Analysis"], records: 20000, size: "300 MB", icon: "trending-up", color: "green" },
    { name: "Food Safety", category: "Food & Retail", file: "food_safety_dataset", description: "Food safety incidents, recalls, and health inspection data.", tags: ["Safety", "Food", "Health"], records: 15000, size: "250 MB", icon: "shield-check", color: "red" },
    { name: "Food Allergies", category: "Food & Retail", file: "food_allergies_dataset", description: "Food allergy information, ingredients, and dietary restriction data.", tags: ["Allergies", "Health", "Dietary"], records: 8000, size: "120 MB", icon: "exclamation-triangle", color: "orange" },
    { name: "Food Waste", category: "Food & Retail", file: "food_waste_dataset", description: "Food waste statistics, reduction strategies, and sustainability metrics.", tags: ["Waste", "Sustainability", "Environment"], records: 10000, size: "150 MB", icon: "recycle", color: "green" },

    // Gaming & Esports
    { name: "Video Games", category: "Gaming & Esports", file: "video_games_dataset", description: "Comprehensive video games database with genres, ratings, sales, and platform information.", tags: ["Games", "Gaming", "Entertainment"], records: 50000, size: "1.5 GB", icon: "gamepad", color: "purple" },
    { name: "Esports Tournaments", category: "Gaming & Esports", file: "esports_tournaments_dataset", description: "Esports tournament data including teams, players, matches, and prize pools.", tags: ["Esports", "Tournaments", "Competitive"], records: 15000, size: "300 MB", icon: "trophy", color: "gold" },
    { name: "Game Reviews", category: "Gaming & Esports", file: "game_reviews_dataset", description: "Video game reviews with ratings, comments, and user feedback analysis.", tags: ["Reviews", "Games", "Feedback"], records: 100000, size: "2.0 GB", icon: "star", color: "yellow" },
    { name: "Player Stats", category: "Gaming & Esports", file: "player_stats_dataset", description: "Gaming statistics and performance data for professional and amateur players.", tags: ["Stats", "Players", "Performance"], records: 25000, size: "400 MB", icon: "chart-bar", color: "blue" },
    { name: "Game Streaming", category: "Gaming & Esports", file: "game_streaming_dataset", description: "Game streaming data including platforms, viewers, and content creator statistics.", tags: ["Streaming", "Content", "Creators"], records: 30000, size: "500 MB", icon: "video-camera", color: "red" },
    { name: "Mobile Games", category: "Gaming & Esports", file: "mobile_games_dataset", description: "Mobile gaming database with app store data, downloads, and user engagement metrics.", tags: ["Mobile", "Apps", "Gaming"], records: 40000, size: "600 MB", icon: "device-mobile", color: "green" },
    { name: "Retro Games", category: "Gaming & Esports", file: "retro_games_dataset", description: "Classic and retro video games database with historical information and ratings.", tags: ["Retro", "Classic", "History"], records: 10000, size: "200 MB", icon: "clock", color: "gray" },
    { name: "Speedrun", category: "Gaming & Esports", file: "speedrun_dataset", description: "Speedrunning records, times, and community data for various games.", tags: ["Speedrun", "Records", "Community"], records: 20000, size: "350 MB", icon: "stopwatch", color: "orange" },

    // Sports & Fitness
    { name: "Sports Teams", category: "Sports & Fitness", file: "sports_teams_dataset", description: "Professional sports teams database with rosters, statistics, and performance data.", tags: ["Sports", "Teams", "Professional"], records: 5000, size: "150 MB", icon: "users", color: "blue" },
    { name: "Athletes", category: "Sports & Fitness", file: "athletes_dataset", description: "Athlete database with career statistics, achievements, and biographical information.", tags: ["Athletes", "Sports", "Statistics"], records: 25000, size: "400 MB", icon: "user", color: "green" },
    { name: "Sports Events", category: "Sports & Fitness", file: "sports_events_dataset", description: "Sports events and competitions database with schedules, results, and venue information.", tags: ["Events", "Competitions", "Sports"], records: 30000, size: "500 MB", icon: "calendar", color: "purple" },
    { name: "Fitness Programs", category: "Sports & Fitness", file: "fitness_programs_dataset", description: "Fitness and workout programs database with exercises, routines, and health metrics.", tags: ["Fitness", "Workouts", "Health"], records: 15000, size: "250 MB", icon: "heart", color: "red" },

    // Art & Creativity
    { name: "Artists", category: "Art & Creativity", file: "artists_dataset", description: "Artist database with biographical information, works, and artistic movements.", tags: ["Artists", "Art", "Creativity"], records: 20000, size: "400 MB", icon: "palette", color: "pink" },
    { name: "Museums", category: "Art & Creativity", file: "museums_dataset", description: "Museum database with collections, exhibitions, and visitor information.", tags: ["Museums", "Art", "Culture"], records: 8000, size: "200 MB", icon: "building-museum", color: "purple" },
    { name: "NFTs", category: "Art & Creativity", file: "nft_dataset", description: "NFT marketplace data including collections, sales, and digital art information.", tags: ["NFTs", "Digital Art", "Blockchain"], records: 50000, size: "1.2 GB", icon: "cube", color: "cyan" },

    // Culture & Society
    { name: "Languages", category: "Culture & Society", file: "languages_dataset", description: "World languages database with speakers, regions, and linguistic characteristics.", tags: ["Languages", "Linguistics", "Culture"], records: 7000, size: "80 MB", icon: "language", color: "blue" },
    { name: "Religions", category: "Culture & Society", file: "religions_dataset", description: "Religious demographics and distribution data across different regions.", tags: ["Religion", "Demographics", "Culture"], records: 5000, size: "60 MB", icon: "church", color: "indigo" },
    { name: "Holidays", category: "Culture & Society", file: "holidays_dataset", description: "Global holidays, festivals, and cultural celebrations database.", tags: ["Holidays", "Culture", "Celebrations"], records: 15000, size: "120 MB", icon: "calendar", color: "orange" },

    // Education & Research
    { name: "Universities", category: "Education & Research", file: "universities_dataset", description: "University database with rankings, programs, faculty, and student statistics.", tags: ["Universities", "Education", "Research"], records: 10000, size: "300 MB", icon: "academic-cap", color: "blue" },

    // Influencers & Blogging
    { name: "Influencers", category: "Influencers & Blogging", file: "influencers_dataset", description: "Social media influencers database with follower counts, engagement rates, and content analysis.", tags: ["Influencers", "Social Media", "Content"], records: 25000, size: "400 MB", icon: "user-group", color: "pink" },
    { name: "Blogs", category: "Influencers & Blogging", file: "blogs_dataset", description: "Blog database with topics, authors, and content analysis across different niches.", tags: ["Blogs", "Content", "Writing"], records: 50000, size: "800 MB", icon: "document-text", color: "green" },

    // Transport & Mobility
    { name: "Transportation", category: "Transport & Mobility", file: "transportation_dataset", description: "Transportation data including routes, schedules, and mobility statistics.", tags: ["Transport", "Mobility", "Routes"], records: 30000, size: "500 MB", icon: "truck", color: "blue" },
    { name: "Public Transit", category: "Transport & Mobility", file: "public_transit_dataset", description: "Public transportation systems data with routes, stops, and ridership statistics.", tags: ["Public Transit", "Transport", "Urban"], records: 20000, size: "350 MB", icon: "bus", color: "green" }
];

// Dataset download functionality
function downloadDataset(datasetName, format) {
    const button = event.target;
    const originalText = button.textContent;
    
    // Add loading state
    button.textContent = 'Downloading...';
    button.disabled = true;
    button.classList.add('downloading');
    
    // Simulate download delay
    setTimeout(() => {
        // Create download link
        const link = document.createElement('a');
        link.href = `../datasets/${datasetName}.${format}`;
        link.download = `${datasetName}.${format}`;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset button state
        button.textContent = originalText;
        button.disabled = false;
        button.classList.remove('downloading');
        
        // Show success message
        showDownloadSuccess(datasetName, format);
    }, 1500);
}

function showDownloadSuccess(datasetName, format) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Download started: ${datasetName}.${format}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Format size display
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Initialize dataset page
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to dataset cards
    const datasetCards = document.querySelectorAll('.bg-white.dark\\:bg-gray-900');
    datasetCards.forEach(card => {
        card.classList.add('dataset-card');
    });
    
    // Add hover effects to download buttons
    const downloadButtons = document.querySelectorAll('button[onclick*="downloadDataset"]');
    downloadButtons.forEach(button => {
        button.classList.add('download-button');
    });
    
    // Add format badges to dataset descriptions
    addFormatBadges();
});

// Render dataset card matching website design
function renderDatasetCard(dataset) {
    return `
        <div class="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow dataset-card" data-category="${dataset.category}">
            <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">${dataset.name}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">${dataset.category}</p>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">${dataset.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${dataset.tags.map(tag => `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-full">${tag}</span>`).join('')}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <span class="font-medium">Size:</span> ${dataset.size} | <span class="font-medium">Records:</span> ${dataset.records.toLocaleString()}
                    </div>
                </div>
            </div>
            <div class="space-y-3">
                <button onclick="downloadDataset('${dataset.category}/${dataset.file}', 'csv')" class="w-full bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                    <span class="flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download CSV
                    </span>
                </button>
                <button onclick="downloadDataset('${dataset.category}/${dataset.file}', 'json')" class="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span class="flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download JSON
                    </span>
                </button>
            </div>
        </div>
    `;
}

// Pagination variables
let currentPage = 1;
const datasetsPerPage = 5;
let filteredDatasets = [];

// Render datasets with pagination
function renderDatasets(datasetsToRender = datasets) {
    console.log('renderDatasets called with', datasetsToRender.length, 'datasets');
    
    const container = document.getElementById('datasets-container');
    const loadingIndicator = document.getElementById('loading-indicator');
    const noResults = document.getElementById('no-results');

    console.log('Container found:', !!container);
    console.log('Loading indicator found:', !!loadingIndicator);
    console.log('No results found:', !!noResults);

    if (!container) {
        console.error('datasets-container not found!');
        return;
    }

    // Store filtered datasets for pagination
    filteredDatasets = datasetsToRender;

    if (filteredDatasets.length === 0) {
        console.log('No datasets to render');
        container.innerHTML = '';
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    // Calculate pagination
    const totalPages = Math.ceil(filteredDatasets.length / datasetsPerPage);
    const startIndex = (currentPage - 1) * datasetsPerPage;
    const endIndex = startIndex + datasetsPerPage;
    const currentDatasets = filteredDatasets.slice(startIndex, endIndex);

    console.log(`Showing page ${currentPage} of ${totalPages} (${currentDatasets.length} datasets)`);

    // Group current datasets by category
    const categories = {};
    currentDatasets.forEach(dataset => {
        if (!categories[dataset.category]) {
            categories[dataset.category] = [];
        }
        categories[dataset.category].push(dataset);
    });

    console.log('Categories found:', Object.keys(categories));

    // Render current page datasets
    let html = '';
    Object.keys(categories).sort().forEach(category => {
        html += `
            <div class="category-section" data-category="${category}">
                <div class="text-center mb-20">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">${category}</h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        High-quality datasets for ${category.toLowerCase()} research and analysis.
                    </p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    ${categories[category].map(dataset => renderDatasetCard(dataset)).join('')}
                </div>
            </div>
        `;
    });

    // Add pagination
    html += renderPagination(totalPages);

    console.log('Rendering HTML to container');
    container.innerHTML = html;
    if (loadingIndicator) loadingIndicator.classList.add('hidden');
    if (noResults) noResults.classList.add('hidden');
    console.log('Datasets rendered successfully');
}

// Render pagination buttons
function renderPagination(totalPages) {
    if (totalPages <= 1) return '';

    let paginationHtml = `
        <div class="flex justify-center items-center space-x-2 mt-16">
            <button onclick="goToPage(${Math.max(1, currentPage - 1)})" 
                    class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                    ${currentPage === 1 ? 'disabled' : ''}>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
    `;

    // Show page numbers (max 5 pages)
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
        const isActive = i === currentPage;
        paginationHtml += `
            <button onclick="goToPage(${i})" 
                    class="px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive 
                            ? 'bg-gray-900 dark:bg-white text-white dark:text-black' 
                            : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }">
                ${i}
            </button>
        `;
    }

    paginationHtml += `
            <button onclick="goToPage(${Math.min(totalPages, currentPage + 1)})" 
                    class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}"
                    ${currentPage === totalPages ? 'disabled' : ''}>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    `;

    return paginationHtml;
}

// Go to specific page
function goToPage(page) {
    const totalPages = Math.ceil(filteredDatasets.length / datasetsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderDatasets(filteredDatasets);
    
    // Scroll to top of datasets section
    const datasetsSection = document.querySelector('#datasets-container').closest('section');
    if (datasetsSection) {
        datasetsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search and filter datasets
function filterDatasets() {
    const searchTerm = document.getElementById('dataset-search')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('category-filter')?.value || '';

    const filtered = datasets.filter(dataset => {
        const matchesSearch = !searchTerm || 
            dataset.name.toLowerCase().includes(searchTerm) ||
            dataset.description.toLowerCase().includes(searchTerm) ||
            dataset.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            dataset.category.toLowerCase().includes(searchTerm);

        const matchesCategory = !categoryFilter || dataset.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    // Reset to first page when filtering
    currentPage = 1;
    renderDatasets(filtered);
}

// Preview dataset
function previewDataset(datasetPath) {
    console.log('previewDataset called with path:', datasetPath);
    console.log('Available datasets:', datasets.length);
    
    // Find the dataset
    const dataset = datasets.find(d => `${d.category}/${d.file}` === datasetPath);
    console.log('Found dataset:', dataset);
    
    if (!dataset) {
        console.error('Dataset not found for path:', datasetPath);
        alert('Dataset not found. Please try again.');
        return;
    }

    // Remove any existing modals
    const existingModal = document.querySelector('.preview-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'preview-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div class="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${dataset.name} - Preview</h3>
                <button id="close-preview" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="p-6 overflow-auto flex-1">
                <div class="mb-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${dataset.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${dataset.tags.map(tag => `<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Dataset Information</h4>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div><span class="text-gray-600 dark:text-gray-400">Category:</span> <span class="text-gray-900 dark:text-white font-medium">${dataset.category}</span></div>
                        <div><span class="text-gray-600 dark:text-gray-400">Records:</span> <span class="text-gray-900 dark:text-white font-medium">${dataset.records.toLocaleString()}</span></div>
                        <div><span class="text-gray-600 dark:text-gray-400">Size:</span> <span class="text-gray-900 dark:text-white font-medium">${dataset.size}</span></div>
                        <div><span class="text-gray-600 dark:text-gray-400">Formats:</span> <span class="text-gray-900 dark:text-white font-medium">CSV, JSON</span></div>
                    </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Sample Data</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Download the dataset to explore the full data.</p>
                </div>
            </div>
            <div class="p-6 border-t border-gray-200 dark:border-gray-800 flex gap-3">
                <button id="download-csv" class="flex-1 bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                    Download CSV
                </button>
                <button id="download-json" class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Download JSON
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('#close-preview');
    const csvBtn = modal.querySelector('#download-csv');
    const jsonBtn = modal.querySelector('#download-json');
    
    closeBtn.addEventListener('click', () => modal.remove());
    csvBtn.addEventListener('click', () => {
        downloadDataset(datasetPath, 'csv');
        modal.remove();
    });
    jsonBtn.addEventListener('click', () => {
        downloadDataset(datasetPath, 'json');
        modal.remove();
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    console.log('Modal created and added to DOM');
}

// Make functions globally accessible
window.previewDataset = previewDataset;
window.downloadDataset = downloadDataset;
window.goToPage = goToPage;

// Calculate real statistics from datasets
function calculateRealStatistics() {
    const totalDatasets = datasets.length;
    const categories = [...new Set(datasets.map(d => d.category))];
    const totalCategories = categories.length;
    const formats = ['CSV', 'JSON']; // Based on available formats
    const totalFormats = formats.length;
    
    return {
        totalDatasets,
        totalCategories,
        totalFormats
    };
}

// Update statistics display with real data
function updateStatisticsDisplay() {
    const stats = calculateRealStatistics();
    
    // Update the statistics in the HTML using IDs
    const datasetsElement = document.getElementById('total-datasets');
    const categoriesElement = document.getElementById('total-categories');
    const formatsElement = document.getElementById('total-formats');
    
    if (datasetsElement) {
        datasetsElement.textContent = `${stats.totalDatasets}+`;
    }
    if (categoriesElement) {
        categoriesElement.textContent = stats.totalCategories;
    }
    if (formatsElement) {
        formatsElement.textContent = stats.totalFormats;
    }
    
    // Update description with real numbers
    const description = document.querySelector('.text-xl.text-gray-600.dark\\:text-gray-300');
    if (description) {
        description.textContent = `Access our curated collection of ${stats.totalDatasets}+ high-quality datasets across ${stats.totalCategories} specialized domains for AI research and machine learning.`;
    }
    
    console.log('Real statistics updated:', stats);
}

// Initialize dataset page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the datasets page
    const container = document.getElementById('datasets-container');
    if (container) {
        console.log('Initializing datasets page...');
        
        // Update statistics with real data
        updateStatisticsDisplay();
        
        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            renderDatasets();
            console.log('Datasets rendered');
        }, 100);

        // Add event listeners for search and filter
        const searchInput = document.getElementById('dataset-search');
        const categoryFilter = document.getElementById('category-filter');

        if (searchInput) {
            searchInput.addEventListener('input', filterDatasets);
        }

        if (categoryFilter) {
            categoryFilter.addEventListener('change', filterDatasets);
        }
    }
});

// Also try to initialize if DOM is already loaded
if (document.readyState === 'loading') {
    // Document is still loading, wait for DOMContentLoaded
} else {
    // Document is already loaded, initialize immediately
    const container = document.getElementById('datasets-container');
    if (container) {
        console.log('DOM already loaded, initializing datasets...');
        renderDatasets();
        
        const searchInput = document.getElementById('dataset-search');
        const categoryFilter = document.getElementById('category-filter');

        if (searchInput) {
            searchInput.addEventListener('input', filterDatasets);
        }

        if (categoryFilter) {
            categoryFilter.addEventListener('change', filterDatasets);
        }
    }
}
