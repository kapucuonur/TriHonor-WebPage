# TriHonor | Fullstack Web, Software & AI Development

TriHonor is a premium agency website showcasing specialized services in Web, Mobile, AI integration, and Wearable Technology (Garmin CIQ). 

![TriHonor Banner](client/src/assets/hero-bg.png)

## 🚀 Features

- **AI Chatpot**: Integrated Assistant powered by Google Gemini API.
- **Wearable Tech Showcase**: Dedicated portfolio and services for Garmin Connect IQ and wearable apps.
- **Premium UI/UX**: Modern "Glassmorphism" design with smooth scroll animations (GSAP) and responsive layouts.
- **Dark Mode**: High-contrast dark theme accessible via the top navigation bar.
- **Safe Backend**: Robust Node.js Express server with graceful error handling and API proxying.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), GSAP (Animations), Axios, React Router.
- **Backend**: Node.js, Express, Prisma (PostgreSQL).
- **Database**: Neon (Serverless Postgres).
- **AI**: Google Generative AI (Gemini 1.5 Flash).
- **Styling**: Vanilla CSS with modern variables and glassmorphism effects.

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- Neon account (for PostgreSQL database)
- Google Gemini API Key (for Chatbot)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/TriHonor-WebPage.git
   cd TriHonor-WebPage
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npm install --prefix client
   npm install --prefix server
   ```

3. **Environment Setup**:
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   DATABASE_URL=your_neon_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run Locally**:
   From the root directory:
   ```bash
   npm run dev
   ```
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

## 📄 License

This project is licensed under the ISC License.

---
Developed with ❤️ by Onur Kapucu | [TriHonor](https://trihonor.com)
