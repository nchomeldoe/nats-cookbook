import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "./IngredientFormItem.scss";

const IngredientFormItem = ({
  // handleRemoveIngredientFormItem,
  // id,
  // ingredientFormItems,
  data,
}) => {
  // const position = ingredientFormItems.findIndex((item) => item.id === id);
  // console.log(position);
  console.log(data.ingredient);
  return (
    <div className="ingredient-form-item">
      <div className="ingredient-form-item__name-heading">
        <label className="ingredient-form-item__label" htmlFor="ingredientName">
          Name:
        </label>
        {/* {position > 1 && ( */}
        <FontAwesomeIcon
          className="ingredient-form-item__icon"
          icon={faCircleMinus}
          // onClick={() => {
          //   handleRemoveIngredientFormItem(id);
          // }}
        />
        {/* )} */}
      </div>
      <input
        className="ingredient-form-item__input ingredient-form-item__input--text"
        type="text"
        id="ingredientName"
        name="ingredientName"
        defaultValue={data && data.ingredient.name}
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
              defaultValue={data && data.quantity.value}
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
              defaultValue={data && data.quantity.unit}
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
