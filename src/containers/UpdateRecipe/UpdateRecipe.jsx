import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./UpdateRecipe.scss";
import RecipeForm from "../../components/RecipeForm/RecipeForm";
import { getDataFromForm } from "../../utils/utils";

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { recipe } = location.state;

  const [formValues, setFormValues] = useState({
    ...recipe,
    description: recipe.description.join(" "),
  });

  const handleReset = () => {
    setFormValues({
      ...recipe,
      description: recipe.description.join(" "),
    });
  };

  const updateRecipe = async (recipeData, recipeId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/cookbook/recipe/${recipeId}`,
        {
          method: "PUT",
          body: JSON.stringify(recipeData),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      navigate("/");
    } catch (error) {
      return error.message;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRecipe(getDataFromForm(formValues), recipe.id);
  };

  return (
    <div className="update-recipe">
      <h2 className="update-recipe__header">Edit your recipe:</h2>
      <RecipeForm
        submitButtonText={"Update recipe"}
        handleSubmit={handleSubmit}
        formValues={formValues}
        setFormValues={setFormValues}
        handleReset={handleReset}
      />
    </div>
  );
};

export default UpdateRecipe;
