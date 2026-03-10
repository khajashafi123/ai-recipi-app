import axios from "axios";

export const generateRecipe = async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/recipe/generate",
    data
  );

  return response.data;
};