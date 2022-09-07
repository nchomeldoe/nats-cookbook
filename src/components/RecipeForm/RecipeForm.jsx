import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import IngredientFormItem from "../IngredientFormItem/IngredientFormItem";
import Button from "../Button/Button";
import "./RecipeForm.scss";

const RecipeForm = ({ initialValues, handleSubmit }) => {
  const [formValues, setFormValues] = useState(initialValues);

  console.log(formValues.ingredientsAndQuantities);

  const handleAddIngredientFormItem = () => {
    setFormValues((currState) => {
      const tempFormValues = { ...currState };
      tempFormValues.ingredientsAndQuantities.push({
        ingredient: { name: "" },
        quantity: { unit: "", value: "" },
      });
      return tempFormValues;
    });
  };

  const handleRemoveIngredientFormItem = (id) => {
    setFormValues((currState) => {
      const tempFormValues = { ...currState };
      const tempIngredientsAndQuantities =
        tempFormValues.ingredientsAndQuantities.filter(
          (item, index) => `${item.ingredient.name}-${index}` !== id,
        );
      tempFormValues.ingredientsAndQuantities = tempIngredientsAndQuantities;
      return tempFormValues;
    });
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
        defaultValue={initialValues && initialValues.name}
        required
      />
      <label className="recipe-form__label" htmlFor="serves">
        Serves:
      </label>
      <input
        className="recipe-form__input recipe-form__input--text"
        type="number"
        id="serves"
        name="serves"
        defaultValue={initialValues && initialValues.serves}
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
          {formValues.ingredientsAndQuantities.map((item, id) => (
            <IngredientFormItem
              key={`${item.ingredient.name}-${id}`}
              id={`${item.ingredient.name}-${id}`}
              data={item}
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
        defaultValue={initialValues && initialValues.description.join(" ")}
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
        defaultValue={initialValues && initialValues.cuisine}
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
