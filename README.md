# TriHonor | Fullstack Web, Software & AI Development

TriHonor is a premium agency website showcasing specialized services in Web, Mobile, AI integration, and Wearable Technology (Garmin CIQ). 

![TriHonor Logo](public/logo.png)

## 🌐 Live Demo
Visit the professional live site at: **[trihonor.com](https://trihonor.com)**

---

## 🚀 Key Features

- **AI Chatbot**: Real-time business assistant powered by **Google Gemini 1.5 Flash** with custom CORS handling.
- **Pro Backend Architecture**: Enterprise-grade structure featuring:
    - Manual Preflight CORS handling for absolute domain security.
    - Global Error Handling Middleware & `catchAsync` wrappers.
    - Custom `AppError` operational error classes.
- **Neon Migration**: High-performance Serverless PostgreSQL integration via **Prisma ORM**.
- **Premium UI/UX**: 
    - **Balanced Bento Grid**: Symmetrical 2x2 Services layout with custom 3D imagery.
    - **Vibrant Hero**: Motion-designed hero section with floating 3D assets and mesh gradients.
    - **Legal Compliance**: Dedicated, professionally styled **Privacy Policy** and **Terms of Service** pages.
    - **Enhanced Navigation**: Floating Scroll-to-Top button with high visibility in Dark Mode.
- **Branding**: Custom-designed **Apex Unity** branding for a cohesive digital identity.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), GSAP, Axios, React Router Hash Link.
- **Backend**: Node.js (Express 5), Prisma ORM.
- **Database**: Neon (PostgreSQL).
- **AI**: Google Generative AI SDK.
- **DevOps**: GitHub Actions, Vercel (Frontend), Render (Backend).

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
│   ├── routes/         # Express routes
│   ├── controllers/    # Business logic (catchAsync enabled)
│   ├── middleware/     # Global Error & Logger
│   ├── utils/          # AppError classes
│   └── app.js          # Express 5 entry point with manual preflight
```

## 📄 License & Corporate
This project is licensed under the ISC License.

**Corporate Information:**
- **Location:** Tampere, Finland
- **Y-tunnus:** 3131622-7

---
Developed with 💎 by **Onur Kapucu** | [LinkedIn](https://www.linkedin.com/in/onur-kapucu/) | [GitHub](https://github.com/kapucuonur/)
