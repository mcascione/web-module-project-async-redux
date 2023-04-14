import React from "react";

const Recipe = (props) => {
  const { recipe } = props;

  return (
    <div className="recipe">
      <h3>{recipe.name}</h3>
      <img width="200" src={recipe.thumbnail_url} />
      <p> Minutes to Prepare {recipe.cook_time_minutes}</p>
      <p>{recipe.yields}</p>
    </div>
  );
};

export default Recipe;
