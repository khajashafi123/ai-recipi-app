const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recipe", recipeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});