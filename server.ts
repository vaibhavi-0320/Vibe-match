import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { analyzeBirthday, analyzePhoto, chatCurator } from "./server/gemini";
import { getVoiceNote, saveVoiceNote } from "./server/voiceNotes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === "production";

  app.use(express.json({ limit: "50mb" }));

  app.post("/api/analyze", async (req, res) => {
    try {
      const { images, mode } = req.body ?? {};
      if (!Array.isArray(images) || images.length === 0) {
        return res.status(400).json({ error: "At least one image is required." });
      }

      const data = mode === "birthday" ? await analyzeBirthday(images) : await analyzePhoto(images);
      return res.json(data);
    } catch (error) {
      console.error("Analyze API failed:", error);
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to analyze images.",
      });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history, analysis } = req.body ?? {};
      if (!message || !analysis) {
        return res.status(400).json({ error: "Message and analysis are required." });
      }

      const reply = await chatCurator(message, Array.isArray(history) ? history : [], analysis);
      return res.json({ text: reply });
    } catch (error) {
      console.error("Chat API failed:", error);
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to chat with curator.",
      });
    }
  });

  app.post("/api/voice-notes", (req, res) => {
    try {
      const { audioBase64, imageUrl, templateId, vibe, birthdayMessage } = req.body ?? {};
      if (!audioBase64 || !imageUrl || !templateId || !vibe) {
        return res.status(400).json({ error: "Missing required voice note fields." });
      }

      const savedNote = saveVoiceNote({
        audioBase64,
        imageUrl,
        templateId,
        vibe,
        birthdayMessage,
      });

      return res.json({ id: savedNote.id });
    } catch (error) {
      console.error("Voice note save failed:", error);
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to save voice note.",
      });
    }
  });

  app.get("/api/voice-notes/:id", (req, res) => {
    try {
      const note = getVoiceNote(req.params.id);
      if (!note) {
        return res.status(404).json({ error: "Voice note not found." });
      }

      return res.json(note);
    } catch (error) {
      console.error("Voice note fetch failed:", error);
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to fetch voice note.",
      });
    }
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
