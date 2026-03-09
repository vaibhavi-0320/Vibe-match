# Vibe Match

This app runs in two modes:

- Local development: Express serves the Vite app and the API from `server.ts`
- Vercel deployment: Vite builds the frontend, and Vercel serves the API from the `api/` folder

## Local Run

Prerequisites: Node.js 20+

1. Install dependencies:
   `npm install`
2. Create `.env.local` or `.env` with:
   `GEMINI_API_KEY=your_key_here`
3. Start the app:
   `npm run dev`
4. Open:
   `http://localhost:3000`

## Build

`npm run build`

## Deploy To Vercel

1. Import the project into Vercel.
2. Set the `GEMINI_API_KEY` environment variable in the Vercel project settings.
3. Deploy.

Notes:

- The Gemini key is now used only on the server, not exposed in the browser bundle.
- Shared voice notes use a JSON file locally.
- On Vercel, shared voice-note storage is temporary because serverless functions do not provide durable local disk. If you need persistent shared links in production, move that storage to a real database or Vercel Blob/KV.
