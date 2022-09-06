import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import IngredientFormItem from "../IngredientFormItem/IngredientFormItem";
import "./RecipeForm.scss";

const RecipeForm = () => {
  const [ingredientFormItemsCount, setIngredientFormItemsCount] = useState(1);

  let ingredientFormItemsJsx = [];

  for (let i = 1; i <= ingredientFormItemsCount; i++) {
    ingredientFormItemsJsx.push(<IngredientFormItem key={i} />);
  }

  const handleAddIngredientFormItem = () => {
    setIngredientFormItemsCount(ingredientFormItemsCount + 1);
  };

  return (
    <form className="recipe-form">
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
        <div className="recipe-form__ingredients">
          <legend className="recipe-form__legend">Ingredients</legend>
          <FontAwesomeIcon
            icon={faCirclePlus}
            onClick={handleAddIngredientFormItem}
          />
        </div>
        {ingredientFormItemsJsx}
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
    </form>
  );
};

export default RecipeForm;
