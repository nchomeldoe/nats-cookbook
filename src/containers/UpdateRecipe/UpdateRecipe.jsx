import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UpdateRecipe.scss";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/");
  };
  const { recipe } = location.state;
  return (
    <div className="update-recipe">
      <h2 className="update-recipe__header">Edit your recipe:</h2>
      <RecipeForm
        submitButtonText={"Update recipe"}
        initialValues={recipe}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UpdateRecipe;
