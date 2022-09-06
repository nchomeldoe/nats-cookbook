import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import IngredientFormItem from "../IngredientFormItem/IngredientFormItem";
import "./RecipeForm.scss";

const RecipeForm = () => {
  const [ingredientFormItems, setIngredientFormItems] = useState([{ id: 1 }]);

  console.log(ingredientFormItems);

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
        {ingredientFormItems.map((item) => (
          <IngredientFormItem
            key={item.id}
            id={item.id}
            handleRemoveIngredientFormItem={handleRemoveIngredientFormItem}
          />
        ))}
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
