const axios = require("axios");

exports.generateRecipe = async (req, res) => {
  try {
    const { ingredients, diet } = req.body;

    const prompt = `
    Create a recipe using these ingredients: ${ingredients}.
    Dietary preference: ${diet}.
    
    Provide:
    - Recipe Name
    - Ingredients
    - Steps
    - Cooking Time
    `;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      recipe: response.data.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: "Recipe generation failed" });
  }
};