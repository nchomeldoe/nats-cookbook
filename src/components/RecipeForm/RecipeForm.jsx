import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import IngredientFormItem from "../IngredientFormItem/IngredientFormItem";
import Button from "../Button/Button";
import "./RecipeForm.scss";

const RecipeForm = () => {
  const [ingredientFormItems, setIngredientFormItems] = useState([{ id: 1 }]);

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
      if (tempIngredientFormItems.length == 1) {
        return tempIngredientFormItems;
      }
      const filteredIngredientFormItems = tempIngredientFormItems.filter(
        (item) => item.id != id,
      );
      return filteredIngredientFormItems;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    console.log(
      recipeName,
      serves,
      description,
      cuisine,
      ingredientsAndQuantities,
    );
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
      />
      <label className="recipe-form__label" htmlFor="serves">
        Serves:
      </label>
      <input
        className="recipe-form__input recipe-form__input--text"
        type="text"
        id="serves"
        name="serves"
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
      />
      <label className="recipe-form__label" htmlFor="cuisine">
        Cuisine:
      </label>
      <input
        className="recipe-form__input recipe-form__input--text"
        type="text"
        id="cuisine"
        name="cuisine"
      />
      <div className="recipe-form__buttons-container">
        <Button text="Add recipe" styling="primary" type="submit" />
        <Button text="Reset" styling="secondary" type="reset" />
      </div>
    </form>
  );
};

export default RecipeForm;
