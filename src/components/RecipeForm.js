import React, { useState } from "react";
import { getRecipe } from "../actions";

const RecipeForm = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [ingredient, setIngredient] = useState("");

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setIngredient(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Filter", selectedFilter);
    console.log("Ingredient", ingredient);
  };

  return (
    <form>
      <label htmlFor="filter-select">Choose a filter</label>
      <select
        name="filters"
        id="filter-select"
        onChange={handleSelect}
        value={selectedFilter}
      >
        <option value=""> -- Select One -- </option>
        <option value="under_30">Under 30</option>
        <option value="british">British</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="middle_eastern">Middle Eastern</option>
        <option value="dairy_free">Dairy Free</option>
      </select>
      <input
        type="text"
        placeholder="Name of ingredient"
        onChange={handleInput}
        value={ingredient}
      />
      <button onClick={handleSubmit}>Get Recipe</button>
    </form>
  );
};

export default RecipeForm;
