import React, { useState } from "react";
import { generateRecipe } from "../api";

const RecipeForm = ({ setRecipe }) => {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await generateRecipe({
      ingredients,
      diet
    });

    setRecipe(data.recipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>AI Recipe Generator</h2>

      <input
        type="text"
        placeholder="Enter ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <input
        type="text"
        placeholder="Diet preference (vegan, gluten-free)"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
      />

      <button type="submit">Generate Recipe</button>
    </form>
  );
};

export default RecipeForm;