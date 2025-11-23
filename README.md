# Floravision-app
loralVision is a React-based front-end project designed for a plant e-commerce concept. The application contains multiple sections such as a hero banner, featured plants, trending plants, top-selling products, customer reviews, O₂ plant highlights, and footer information. The project uses custom PNG UI assets and pure CSS for layout and styling.

**Features**
**Hero Section**
Background poster image
Main title and subtitle
Buy button and demo button
Right-side main plant card
**Main Plant Section**
Blurred rectangle background
Large plant image
Title and small caption
Explore button and navigation indicators
**Trending Plants**
Two separate plant highlight cards
PNG background shapes
Description, pricing, explore button, and cart icon
**Top Selling Plants**
Six plant cards
PNG rectangle background
Name, description, price, and cart icon
Hover animations
**Customer Reviews**
Title bar with decorative vector corners
Three review cards
User image, star rating, name, and description
PNG background card
**Best O₂ Plants Section**
Rounded rectangle background
Left-side plant
Right-side title and description
Explore button and pagination indicator
**Footer**
FloraVision logo and brand name
Company description
Quick links list
Email subscribe input and button
Copyright text

**Technologies Used**
React.js
JavaScript 
(ES6)
CSS3 (custom styling)
React Router (optional, not mandatory)
Local PNG assets for UI
Installation

**Clone the repository:**

git clone <repository-url>

**Navigate to the project folder:**
cd floralvision-app

**Install dependencies:**
npm install


**Start development server:**
npm start

**The application will be available at:**
http://localhost:3000

**Folder Structure**
**src/**
│
├── **assets/**
│   ├── Plant images
│   ├── PNG UI shapes
│   └── Icons
│
├── **components/**
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Mainplant.jsx
│   ├── Review.jsx
│   ├── Trendingplant1.jsx
│   ├── Trendingplant2.jsx
│   ├── Sellingplant.jsx
│   ├── BestO2.jsx
│   └── Footer.jsx
│
├── **styles/**
│   ├── Hero.css
│   ├── Mainplant.css
│   ├── Review.css
│   ├── Trendingplant1.css
│   ├── Trendingplant2.css
│   ├── Sellingplant.css
│   ├── BestO2.css
│   └── Footer.css
│
├── App.js
└── index.js


**Scripts**

**Available npm scripts:**
npm start       # start the development server
npm run build   # generate production build
npm test        # run test suite (if added)

**Design Notes**
No CSS frameworks are used; the entire UI is styled manually using CSS.
PNG assets provide the rounded rectangles, vectors, stars, cart icons, and plant renderings.
Positioning relies on absolute and relative alignment to match the design provided.
The site layout is optimized for desktop/laptop screens.

**Known Limitations**
The application is not fully responsive for mobile devices.
No backend or functional cart is implemented (UI-only).
Routing is optional and only used if needed.

**Future Improvements**
Add responsive behavior with media queries.
Add functional cart and checkout system.
Add backend integration using Node.js or Firebase.
Add dynamic product pages.

**License**
This project is intended for learning and personal portfolio use.
