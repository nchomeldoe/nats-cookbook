import { useState, useEffect } from "react";
import "./RecipeCard.scss";
import Ingredient from "../Ingredient/Ingredient";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    name,
    description,
    createdBy,
    cuisine,
    ingredientsAndQuantities,
  } = recipe;

  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{cuisine}</p>
      <div>
        <h4>Ingredients</h4>
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
    </>
  );
};

export default RecipeCard;
