import { useState, useEffect } from "react";
import "./RecipeCard.scss";
import Ingredient from "../Ingredient/Ingredient";

const RecipeCard = ({ recipe }) => {
  const [ingredientsAndQuantities, setIngredientsAndQuantities] = useState([]);
  const { id, name, description, createdBy, cuisine, recipeElements } = recipe;

  const getIngredient = async (id) => {
    try {
      let ingredientResponse = await fetch(
        `http://localhost:8080/cookbook/ingredient/recipe-element?recipeElementId=${id}`,
      );
      if (!ingredientResponse.ok) {
        throw new Error(ingredientResponse.status + " error with request");
      }
      let ingredientData = await ingredientResponse.json();
      return ingredientData;
    } catch (error) {
      return error.message;
    }
  };

  const getQuantity = async (id) => {
    try {
      let quantityResponse = await fetch(
        `http://localhost:8080/cookbook/quantity/recipe-element?recipeElementId=${id}`,
      );
      if (!quantityResponse.ok) {
        throw new Error(quantityResponse.status + " error with request");
      }
      let quantityData = await quantityResponse.json();
      return quantityData;
    } catch (error) {
      return error.message;
    }
  };

  const getAllIngredientsAndQuantities = () => {
    const ingredientsAndQuantitiesArr = [];
    recipeElements.forEach(async (recipeElement) => {
      const ingredient = await getIngredient(recipeElement.id);
      const quantity = await getQuantity(recipeElement.id);
      ingredientsAndQuantitiesArr.push({
        ingredientName: ingredient.name,
        quantityValue: quantity.value,
        quantityUnit: quantity.unit,
      });
    });
    return ingredientsAndQuantitiesArr;
  };

  useEffect(() => {
    setIngredientsAndQuantities(getAllIngredientsAndQuantities());
  }, []);

  console.log(ingredientsAndQuantities.length);

  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{cuisine}</p>
      <div>
        {ingredientsAndQuantities.length > 0 &&
          ingredientsAndQuantities.map((item, index) => (
            <Ingredient
              key={index}
              name={item.ingredientName}
              value={item.quantityValue}
              unit={item.quantityUnit}
            />
          ))}
      </div>
    </>
  );
};

export default RecipeCard;
