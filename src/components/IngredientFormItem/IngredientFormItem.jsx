import "./IngredientFormItem.scss";

const IngredientFormItem = () => {
  return (
    <div>
      <label className="recipe-form__label" htmlFor="ingredientName">
        Name:
      </label>
      <input
        className="recipe-form__input recipe-form__input--text"
        type="text"
        id="ingredientName"
        name="ingredientName"
      />
      <fieldset className="recipe-form__fieldset">
        <legend className="recipe-form__legend">Quantity</legend>
        <label className="recipe-form__label" htmlFor="value">
          Value:
        </label>
        <input
          className="recipe-form__input recipe-form__input--text"
          type="text"
          id="value"
          name="value"
        />
        <label className="recipe-form__label" htmlFor="unit">
          Unit:
        </label>
        <select
          className="recipe-form__input recipe-form__input--select"
          name="unit"
          id="unit"
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
      </fieldset>
    </div>
  );
};

export default IngredientFormItem;
