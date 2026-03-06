# TriHonor | Fullstack Web, Software & AI Development

TriHonor is a premium agency website showcasing specialized services in Web, Mobile, AI integration, and Wearable Technology (Garmin CIQ). 

![TriHonor Logo](public/logo.png)

## 🌐 Live Demo
Visit the professional live site at: **[trihonor.com](https://trihonor.com)**

## 🚀 Key Features

- **AI Chatbot**: Real-time business assistant powered by **Google Gemini 1.5 Flash**.
- **Pro Backend Architecture**: Enterprise-grade structure featuring:
    - Global Error Handling Middleware.
    - Automated `catchAsync` wrappers for controllers.
    - Real-time Request Logging and performance monitoring.
    - Custom `AppError` operational error classes.
- **Neon Migration**: High-performance Serverless PostgreSQL integration via **Prisma ORM**.
- **Premium UI/UX**: 
    - Modern "Glassmorphism" design system.
    - Smooth scroll animations using **GSAP**.
    - Optimized 2x2 Services Grid for high visual balance.
    - Floating **Scroll-to-Top** navigation for enhanced UX.
- **Branding**: Custom-designed **Apex Unity** geometric logo for a cohesive digital identity.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), GSAP, Axios, React Router Hash Link.
- **Backend**: Node.js (Express 5), Prisma ORM.
- **Database**: Neon (PostgreSQL).
- **AI**: Google Generative AI SDK.
- **DevOps**: GitHub Actions (CI/CD), Vercel (Frontend), Render (Backend).

## 📦 Getting Started

### Prerequisites
- Node.js (v20+)
- Neon Account
- Google Gemini API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kapucuonur/TriHonor-WebPage.git
   cd TriHonor-WebPage
   ```

2. **Install Dependencies**:
   ```bash
   npm install && npm run install-all
   ```

3. **Backend Setup**:
   Create a `server/.env` file:
   ```env
   PORT=5000
   DATABASE_URL=your_neon_postgresql_url
   GEMINI_API_KEY=your_gemini_api_key
   EMAIL_USER=your_email@outlook.com
   EMAIL_PASS=your_email_app_password
   ```

4. **Prisma Initialization**:
   ```bash
   cd server
   npx prisma generate
   npx prisma db push
   ```

5. **Run Locally**:
   From the root directory:
   ```bash
   npm run dev
   ```

## 📂 Architecture Overview
```text
server/
├── src/
│   ├── components/     # Express routes
│   ├── controllers/    # Business logic (catchAsync enabled)
│   ├── middleware/     # Global Error & Logger
│   ├── utils/          # AppError classes
│   └── app.js          # Express 5 entry point
```

## 📄 License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---
Developed with 💎 by **TriHonor Team** | [trihonor.com](https://trihonor.com)
