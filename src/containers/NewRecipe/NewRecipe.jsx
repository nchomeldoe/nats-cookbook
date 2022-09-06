import "./NewRecipe.scss";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

const NewRecipe = () => {
  return (
    <div className="new-recipe">
      <h2 className="new-recipe__header">Add a new recipe:</h2>
      <RecipeForm />
    </div>
  );
};

export default NewRecipe;
