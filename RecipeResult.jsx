import React from "react";

const RecipeResult = ({ recipe }) => {
  return (
    <div>
      <h3>Generated Recipe</h3>
      <pre>{recipe}</pre>
    </div>
  );
};

export default RecipeResult;