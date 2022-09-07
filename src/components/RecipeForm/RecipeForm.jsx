import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import IngredientFormItem from "../IngredientFormItem/IngredientFormItem";
import Button from "../Button/Button";
import "./RecipeForm.scss";

const RecipeForm = ({ initialValues, handleSubmit, submitButtonText }) => {
  const [formValues, setFormValues] = useState({
    ...initialValues,
    description: initialValues.description.join(" "),
  });

  const {
    id,
    serves,
    name,
    description,
    createdBy,
    cuisine,
    ingredientsAndQuantities,
  } = formValues;

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
          (item, index) => index !== id,
        );
      tempFormValues.ingredientsAndQuantities = tempIngredientsAndQuantities;
      return tempFormValues;
    });
  };

  const handleInput = (e, id = "") => {
    setFormValues((currState) => {
      const tempFormValues = { ...currState };
      if (e.target.id === "recipeName") {
        tempFormValues.name = e.target.value;
      }
      if (e.target.id === "serves") {
        tempFormValues.serves = e.target.value;
      }
      if (e.target.id === "cuisine") {
        tempFormValues.cuisine = e.target.value;
      }
      if (e.target.id === "description") {
        tempFormValues.description = e.target.description;
      }
      return tempFormValues;
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormValues({
      ...initialValues,
      description: initialValues.description.join(" "),
    });
  };

  console.log(formValues);
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
        value={name}
        onInput={handleInput}
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
        onInput={handleInput}
        value={serves}
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
              key={id}
              id={id}
              data={item}
              handleRemoveIngredientFormItem={handleRemoveIngredientFormItem}
              setFormValues={setFormValues}
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
        value={description}
        onInput={handleInput}
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
        onInput={handleInput}
        value={cuisine}
        required
      />
      <div className="recipe-form__buttons-container">
        <Button text={submitButtonText} styling="primary" type="submit" />
        <Button
          text="Reset"
          styling="secondary"
          type="reset"
          handleClick={handleReset}
        />
      </div>
    </form>
  );
};

export default RecipeForm;
