# VibeMatch 🎵✨

VibeMatch is an AI-powered aesthetic curation tool that finds the perfect niche music and generates stunning Instagram story templates for your photos. Whether it's a daily outfit check or a special birthday surprise, VibeMatch transforms your moments into high-vibe digital scrapbooks.

![VibeMatch Banner](<img width="1920" height="836" alt="Screenshot 2026-03-10 001153" src="https://github.com/user-attachments/assets/d2547eaf-1267-4e86-9b60-60369dc20d69" />
)

## 🚀 Features

- **AI Vibe Analysis**: Powered by Google Gemini, our AI analyzes your style, colors, and setting to identify your unique aesthetic.
- **Niche Music Curation**: Get hand-picked, gatekeep-worthy tracks that match your vibe perfectly.
- **Story Templates**: Choose from Editorial, Filmstrip, Scrapbook, and more.
- **Birthday Mode**: Create personalized birthday stories with custom voice notes and heartfelt AI-generated wishes.
- **Voice Recording**: Record a personal message for your friends and share it via a unique link.
- **Multi-Image Support**: Showcase your theme with up to 4 images in a single template.
- **Gen Z Captions**: AI-generated captions that actually sound like you.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **AI**: Google Gemini API (@google/genai)
- **Icons**: Lucide React
- **Styling**: Brutalist UI Design

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vibematch.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment on Vercel

VibeMatch is a full-stack application (Express + Vite). To deploy it on Vercel:

1. **Push your code to GitHub**.
2. **Connect to Vercel**: Go to [vercel.com](https://vercel.com) and import your repository.
3. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Environment Variables**: Add your `GEMINI_API_KEY` in the Vercel project settings.
5. **Serverless Functions**: Since this app uses an Express backend, you may need to wrap your Express app in a Vercel serverless function or use a framework like Next.js if you want a seamless single-command deployment. For the current structure, Vercel will serve the static files, but you'll need to host the API separately or use Vercel's `/api` directory for serverless functions.

Attention- this project is built for sole purpose of fun.

---
Made with ❤️ by [Bhavi](https://github.com/yourusername)
