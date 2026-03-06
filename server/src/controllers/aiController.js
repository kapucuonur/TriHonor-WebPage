// server/src/controllers/aiController.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// @desc    Chat with Gemini AI
// @route   POST /api/ai/chat
// @access  Public
exports.chatWithGemini = catchAsync(async (req, res, next) => {
    const { message, history } = req.body;

    if (!message) {
        return next(new AppError("Message is required", 400));
    }

    // Check for missing API Key and handle gracefully
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
        return res.status(200).json({
            success: true,
            reply: "I'm in 'demo mode' because the Gemini API key is not yet configured. Please add a valid key to the server's .env file to enable live AI responses!",
            isDemo: true
        });
    }

    // Start a chat session
    const chatSession = model.startChat({
        history: history || [],
        generationConfig: {
            maxOutputTokens: 500,
        },
    });

    // Provide context about TriHonor to the AI
    const systemPrompt = "You are the TriHonor AI assistant representing TriHonor agency (Fullstack Web, Mobile, AI, Wearable Tech). Be concise, friendly, and expert.";

    const result = await chatSession.sendMessage(`${systemPrompt}\n\nUser: ${message}`);
    const response = await result.response;
    const text = response.text();

    if (!text) {
        return next(new AppError("AI failed to generate a response", 500));
    }

    res.status(200).json({
        success: true,
        reply: text,
    });
});
