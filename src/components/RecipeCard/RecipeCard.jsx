import "./RecipeCard.scss";
import Ingredient from "../Ingredient/Ingredient";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    name,
    serves,
    description,
    createdBy,
    cuisine,
    ingredientsAndQuantities,
  } = recipe;

  const descriptionText = description.join(" ");

  return (
    <div className="recipe-card">
      <h3 className="recipe-card__name">
        {name} <span className="recipe-card__serves">(serves {serves})</span>
      </h3>
      <div className="recipe-card__ingredients">
        <h4 className="recipe-card__subheading">Ingredients</h4>
        {ingredientsAndQuantities.length > 0 &&
          ingredientsAndQuantities.map((item, index) => (
            <Ingredient
              key={index}
              name={item.ingredient.name}
              value={item.quantity.value}
              unit={item.quantity.unit}
            />
          ))}
      </div>
      <h4 className="recipe-card__subheading">Method</h4>
      <p className="recipe-card__description">{descriptionText}</p>
      <p className="recipe-card__cuisine">{cuisine}</p>
    </div>
  );
};

export default RecipeCard;
