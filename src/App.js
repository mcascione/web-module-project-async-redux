import React from "react";
import "./App.css";
import RecipeForm from "./components/RecipeForm";
import data from "./data/recipes";
import RecipeList from "./components/RecipeList";

function App(props) {
  const recipes = data;
  const loading = false;
  const error = "";

  return (
    <div className="App">
      <h1>Tasty Recipe App</h1>
      <RecipeForm />
      {loading ? (
        <h3>Cooking Up Your Recipe...</h3>
      ) : (
        <RecipeList recipes={recipes} />
      )}
      {error && <h3>You have an error: {error}</h3>}
    </div>
  );
}

export default App;
