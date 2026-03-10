import React, { useState } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeResult from "./components/RecipeResult";

function App() {
  const [recipe, setRecipe] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <RecipeForm setRecipe={setRecipe} />
      <RecipeResult recipe={recipe} />
    </div>
  );
}

export default App;