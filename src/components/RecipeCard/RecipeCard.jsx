import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./RecipeCard.scss";
import Ingredient from "../Ingredient/Ingredient";

const RecipeCard = ({ recipe, deleteRecipe }) => {
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
      <div className="recipe-card__top-line">
        <h3 className="recipe-card__name">
          {name} <span className="recipe-card__serves">(serves {serves})</span>
        </h3>
        <div className="recipe-card__icons">
          <Link to={`/update/${id}`} state={{ recipe: recipe }}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="
            recipe-card__icon recipe-card__icon--edit"
            />
          </Link>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="recipe-card__icon recipe-card__icon--delete"
            onClick={() => {
              deleteRecipe(id);
            }}
          />
        </div>
      </div>

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
