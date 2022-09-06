import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import IngredientFormItem from "../IngredientFormItem/IngredientFormItem";
import Button from "../Button/Button";
import "./RecipeForm.scss";

const RecipeForm = () => {
  const [ingredientFormItems, setIngredientFormItems] = useState([
    { id: 1 },
    { id: 2 },
  ]);
  const navigate = useNavigate();

  const handleAddIngredientFormItem = () => {
    setIngredientFormItems((currState) => {
      const tempIngredientFormItems = [...currState];
      tempIngredientFormItems.push({
        id: tempIngredientFormItems[tempIngredientFormItems.length - 1].id + 1,
      });
      return tempIngredientFormItems;
    });
  };

  const handleRemoveIngredientFormItem = (id) => {
    setIngredientFormItems((currState) => {
      const tempIngredientFormItems = [...currState];
      if (tempIngredientFormItems.length == 2) {
        return tempIngredientFormItems;
      }
      const filteredIngredientFormItems = tempIngredientFormItems.filter(
        (item) => item.id != id,
      );
      return filteredIngredientFormItems;
    });
  };

  const getDataFromForm = (e) => {
    const recipeName =
      e.target.recipeName.value[0].toUpperCase() +
      e.target.recipeName.value
        .substring(1, e.target.recipeName.value.length)
        .toLowerCase();
    const serves = e.target.serves.value;
    const description = e.target.description.value
      .split(". ")
      .map((sentence) => {
        if (sentence[sentence.length - 1] != ".") {
          sentence += ".";
        }
        return (
          sentence[0].toUpperCase() +
          sentence.substring(1, sentence.length).toLowerCase()
        );
      });
    const cuisine =
      e.target.cuisine.value[0].toUpperCase() +
      e.target.cuisine.value
        .substring(1, e.target.recipeName.value.length)
        .toLowerCase();
    const ingredientsAndQuantities = [];
    e.target.ingredientName.forEach((name) => {
      const ingredientDetails = {
        ingredient: { name: "" },
        quantity: { unit: "", value: "" },
      };
      ingredientDetails.ingredient.name = name.value;
      ingredientsAndQuantities.push(ingredientDetails);
    });
    e.target.quantityUnit.forEach((unit, index) => {
      ingredientsAndQuantities[index].quantity.unit = unit.value;
    });
    e.target.quantityValue.forEach((quantityValue, index) => {
      ingredientsAndQuantities[index].quantity.value = quantityValue.value;
    });
    const fullRecipeData = {
      serves: serves,
      name: recipeName,
      description: description,
      createdBy: "Nat",
      cuisine: cuisine,
      ingredientsAndQuantities: ingredientsAndQuantities,
    };
    return fullRecipeData;
  };

  const postRecipe = async (recipeData) => {
    try {
      const response = await fetch(`http://localhost:8080/cookbook/recipe`, {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      navigate("/");
    } catch (error) {
      return error.message;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postRecipe(getDataFromForm(e));
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <label className="recipe-form__label" htmlFor="recipeName">
        Recipe name:
      </label>
      <input
        className="recipe-form__input recipe-form__input--text"
        type="text"
        id="recipeName"
        name="recipeName"
        required
      />
      <label className="recipe-form__label" htmlFor="serves">
        Serves:
      </label>
      <input
        className="recipe-form__input recipe-form__input--text"
        type="text"
        id="serves"
        name="serves"
        required
      />
      <fieldset className="recipe-form__fieldset">
        <div className="recipe-form__ingredients-container">
          <div className="recipe-form__ingredients-heading">
            <legend className="recipe-form__legend">Ingredients</legend>
            <FontAwesomeIcon
              className="recipe-form__icon"
              icon={faCirclePlus}
              onClick={handleAddIngredientFormItem}
            />
          </div>
          {ingredientFormItems.map((item) => (
            <IngredientFormItem
              key={item.id}
              id={item.id}
              handleRemoveIngredientFormItem={handleRemoveIngredientFormItem}
              ingredientFormItems={ingredientFormItems}
            />
          ))}
        </div>
      </fieldset>
      <label className="recipe-form__label" htmlFor="description">
        Method:
      </label>
      <textarea
        className="recipe-form__input recipe-form__input--textarea"
        id="description"
        name="description"
        required
      />
      <label className="recipe-form__label" htmlFor="cuisine">
        Cuisine:
      </label>
      <input
        className="recipe-form__input recipe-form__input--text"
        type="text"
        id="cuisine"
        name="cuisine"
        required
      />
      <div className="recipe-form__buttons-container">
        <Button text="Add recipe" styling="primary" type="submit" />
        <Button text="Reset" styling="secondary" type="reset" />
      </div>
    </form>
  );
};

export default RecipeForm;
