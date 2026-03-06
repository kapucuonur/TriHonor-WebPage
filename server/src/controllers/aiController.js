// server/src/controllers/aiController.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// @desc    Chat with Gemini AI
// @route   POST /api/ai/chat
// @access  Public
exports.chatWithGemini = async (req, res) => {
    try {
        const { message, history } = req.body;

        if (!message) {
            return res.status(400).json({ success: false, error: "Message is required" });
        }

        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
            return res.status(200).json({
                success: true,
                reply: "I'm in 'demo mode' because the Gemini API key is not yet configured. Please add a valid key to the server's .env file to enable live AI responses!",
                isDemo: true
            });
        }

        // Start a chat session (optional: include history for context)
        const chatSession = model.startChat({
            history: history || [],
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        // Provide context about TriHonor to the AI
        const systemPrompt = "You are the TriHonor AI assistant, a helpful and professional AI representing TriHonor, a software development agency specializing in Fullstack Web, Mobile, AI Integration, and Wearable Tech (especially Garmin CIQ). Be concise, friendly, and expert in your tone.";

        const result = await chatSession.sendMessage(`${systemPrompt}\n\nUser: ${message}`);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({
            success: true,
            reply: text,
        });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to connect to AI service. Please try again later.",
        });
    }
};
