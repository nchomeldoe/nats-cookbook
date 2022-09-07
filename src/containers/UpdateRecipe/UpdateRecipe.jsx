import { useLocation } from "react-router-dom";

import "./UpdateRecipe.scss";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

const handleSubmit = console.log("handling submit");

const UpdateRecipe = () => {
  const location = useLocation();
  const { recipe } = location.state;
  return (
    <div className="update-recipe">
      <h2 className="update-recipe__header">Edit your recipe:</h2>
      <RecipeForm initialValues={recipe} handleSubmit={handleSubmit} />
    </div>
  );
};

export default UpdateRecipe;
