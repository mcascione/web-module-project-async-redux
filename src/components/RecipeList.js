import React from "react";
import Recipe from "./Recipe";
import { connect } from 'react-redux'

const RecipeList = (props) => {
  const { recipes } = props;
    console.log("recipelistprops", props)
  return (
    <div id="recipeList">
      {recipes?.map((recipe) => {
        // console.log("what is a recipe", recipe)
        return <Recipe recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

export default connect((state) => state)(RecipeList);
