import { useState, useEffect } from "react";
import "./RecipeCard.scss";
import Ingredient from "../Ingredient/Ingredient";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    name,
    serves,
    description,
    createdBy,
    cuisine,
    ingredientsAndQuantities,
  } = recipe;

  return (
    <div className="recipe-card">
      <h3 className="recipe-card__name">{name}</h3>
      <p className="recipe-card__serves">{serves}</p>
      <p className="recipe-card__decsription">{description}</p>
      <p className="recipe-card__cuisine">{cuisine}</p>
      <div className="recipe-card__ingredients">
        <h4 className="recipe-card__ingredients-heading">Ingredients</h4>
        {ingredientsAndQuantities.length > 0 &&
          ingredientsAndQuantities.map((item, index) => (
            <Ingredient
              key={index}
              name={item.ingredient.name}
              value={item.quantity.value}
              unit={item.quantity.unit}
            />
          ))}
      </div>
    </div>
  );
};

export default RecipeCard;
