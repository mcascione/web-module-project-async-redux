import React from "react";
import Recipe from "./Recipe";

const RecipeList = (props) => {
  const { recipes } = props;

  return (
    <div id="recipeList">
      {recipes[0]?.map((recipe) => {
        return <Recipe recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

export default RecipeList;
