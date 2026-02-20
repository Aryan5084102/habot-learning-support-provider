# Habot Connect - Learning Support Directory

A responsive, React-based web module designed to help parents find learning support providers for children. Built as part of a technical assessment for Habot Connect DMCC.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** SCSS Modules
* **Data:** Simulated Asynchronous API 

## Features
* View a comprehensive list of learning support providers.
* Real-time search/filtering by name or specialization.
* Detailed view pages for individual providers.
* Graceful error handling (404 pages) for invalid provider IDs.
* Responsive design across mobile, tablet, and desktop.

## Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd habot-directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
habot-directory/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx       # Navigation header
│   │   ├── Pagination.tsx   # Pagination controls
│   │   ├── ProviderCard.tsx # Individual provider display card
│   │   ├── ProviderList.tsx # Grid display of providers
│   │   └── SearchBar.tsx    # Search input component
│   ├── providers/
│   │   └── [id]/
│   │       └── page.tsx     # Dynamic provider detail page
│   ├── services/
│   │   ├── api.ts           # API service functions
│   │   └── data.json        # Mock provider data
│   ├── styles/              # SCSS module stylesheets
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── globals.css          # Global CSS styles
│   ├── layout.tsx           # Root layout component
│   ├── loading.tsx          # Loading state component
│   ├── not-found.tsx        # 404 error page
│   └── page.tsx             # Home/main page
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## Key Components

### ProviderList
Displays a responsive grid of learning support provider cards with pagination support.

### ProviderCard
Individual card component showing provider name, specialization, location, and rating.

### SearchBar
Real-time search functionality to filter providers by name or specialization.

### Pagination
Controls for navigating through multiple pages of provider results.

### Provider Detail Page
Dynamic route (`/providers/[id]`) displaying detailed information about a specific provider.

## Data Source

The application uses a simulated asynchronous API with mock data stored in `app/services/data.json`. The data includes:
- Provider names and contact information
- Specializations and qualifications
- Location details
- Rating scores
- Service descriptions

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality |

## License

This project is created for Habot Connect DMCC technical assessment purposes.
