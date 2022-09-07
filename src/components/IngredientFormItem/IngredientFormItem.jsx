import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "./IngredientFormItem.scss";
import { formatData } from "../../utils/utils";

const IngredientFormItem = ({
  handleRemoveIngredientFormItem,
  id,
  data,
  setFormValues,
}) => {
  const handleInput = (e) => {
    setFormValues((currState) => {
      const tempFormValues = {
        ...currState,
        ingredientsAndQuantities: [...currState.ingredientsAndQuantities],
      };
      if (e.target.id === "ingredientName") {
        tempFormValues.ingredientsAndQuantities[id].ingredient.name =
          formatData(e.target.value);
      }
      if (e.target.id === "quantityValue") {
        tempFormValues.ingredientsAndQuantities[id].quantity.value =
          e.target.value;
      }
      return tempFormValues;
    });
  };

  const handleChange = (e) => {
    setFormValues((currState) => {
      const tempFormValues = {
        ...currState,
        ingredientsAndQuantities: [...currState.ingredientsAndQuantities],
      };
      tempFormValues.ingredientsAndQuantities[id].quantity.unit =
        e.target.value;
      return tempFormValues;
    });
  };

  return (
    <div className="ingredient-form-item">
      <div className="ingredient-form-item__name-heading">
        <label className="ingredient-form-item__label" htmlFor="ingredientName">
          Name:
        </label>
        {id > 1 && (
          <FontAwesomeIcon
            className="ingredient-form-item__icon"
            icon={faCircleMinus}
            onClick={() => {
              handleRemoveIngredientFormItem(id);
            }}
          />
        )}
      </div>
      <input
        className="ingredient-form-item__input ingredient-form-item__input--text"
        type="text"
        id="ingredientName"
        name="ingredientName"
        value={data.ingredient.name}
        onInput={handleInput}
        required
      />
      <fieldset className="ingredient-form-item__fieldset">
        <legend className="ingredient-form-item__legend">Quantity:</legend>
        <div className="ingredient-form-item__quantity-container">
          <div className="ingredient-form-item__quantity-section">
            <label
              className="ingredient-form-item__label"
              htmlFor="quantityValue"
            >
              Value:
            </label>
            <input
              className="ingredient-form-item__input ingredient-form-item__input--text"
              type="number"
              id="quantityValue"
              name="quantityValue"
              value={data.quantity.value}
              onInput={handleInput}
              required
            />
          </div>
          <div className="ingredient-form-item__quantity-section">
            <label
              className="ingredient-form-item__label"
              htmlFor="quantityUnit"
            >
              Unit:
            </label>
            <select
              className="ingredient-form-item__input ingredient-form-item__input--select"
              name="quantityUnit"
              id="quantityUnit"
              value={data.quantity.unit}
              onChange={handleChange}
            >
              <option>item</option>
              <option>mg</option>
              <option>g</option>
              <option>kg</option>
              <option>ml</option>
              <option>l</option>
              <option>cup</option>
              <option>tbsp</option>
              <option>tsp</option>
              <option>can</option>
              <option>tin</option>
              <option>pinch</option>
              <option>drizzle</option>
              <option>clove</option>
              <option>stick</option>
              <option>bunch</option>
              <option>packet</option>
            </select>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default IngredientFormItem;
