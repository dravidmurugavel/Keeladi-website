# Keeladi: A City Beneath the Grove 

An independent and interactive storytelling platform dedicated to the Keeladi archaeological excavations in Tamil Nadu, India. This project presents 2,600 years of urban history through a bilingual (English/Tamil), immersive web experience featuring stratigraphy visualization, artifact galleries, and educational narratives.

> **Disclaimer:** This is an independent digital narrative curated by Independent Archaeologist Dravid Murugavel. The interpretations presented here are based on publicly available reports (including the 2025 preliminary excavation report by the Tamil Nadu State Department of Archaeology) and do not represent the official stance of any government body. Built strictly for educational, non-commercial purposes.

## ✨ Key Features

-   **Bilingual Experience:** Full English & Tamil support with script-specific typography tuning via CSS variables.
-   **Interactive Stratigraphy:** Clickable soil layers revealing depth, period, and archaeological interpretation.
-   **Glassmorphism Navigation:** Sticky header with dynamic blur/saturation backdrop filter that covers video backgrounds seamlessly.
-   **Custom Cursor System:** Motion-physics-based cursor with radial halo effect (disabled on touch devices).
-   **Light Reveal Cards:** Mouse-tracking radial gradient hover effects for artifact and structure cards.
-   **Responsive Design:** Mobile-first layout with dedicated font-size control panels for each language.
-   **Zero-Build Routing:** React Router v6 with layout routes and smooth anchor scrolling for same-page sections.

## 🛠 Tech Stack

| Category       | Technology                  |
| :------------- | :-------------------------- |
| Framework      | React 18 + TypeScript       |
| Build Tool     | Vite 5                      |
| Styling        | Tailwind CSS 3 + PostCSS    |
| Animations     | Framer Motion 11            |
| Icons          | Lucide React                |
| Routing        | React Router DOM v6         |
| Fonts          | Papyrus, Titillium Web, TAU-marudham, Arima Madurai |

##  Getting Started

### Prerequisites
-   Node.js >= 18.0.0
-   npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dravidmurugavel/keeladi-website.git
cd keeladi-website

# Install dependencies
npm install

# Start development server
npm run dev