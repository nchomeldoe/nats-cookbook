import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NewRecipe.scss";
import RecipeForm from "../../components/RecipeForm/RecipeForm";
import { getDataFromForm } from "../../utils/utils";

const NewRecipe = () => {
  const navigate = useNavigate();

  const initialValues = {
    id: "",
    serves: "",
    name: "",
    description: "",
    createdBy: "Nat",
    ingredientsAndQuantities: [
      {
        ingredient: { name: "" },
        quantity: { unit: "item", value: "" },
      },
      {
        ingredient: { name: "" },
        quantity: { unit: "item", value: "" },
      },
    ],
    cuisine: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleReset = () => {
    setFormValues(initialValues);
  };

  const postRecipe = async (recipeData) => {
    try {
      const response = await fetch(`http://localhost:8080/cookbook/recipe`, {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
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
    await postRecipe(getDataFromForm(formValues));
  };

  return (
    <div className="new-recipe">
      <h2 className="new-recipe__header">Add a new recipe:</h2>
      <RecipeForm
        submitButtonText={"Add recipe"}
        handleSubmit={handleSubmit}
        formValues={formValues}
        setFormValues={setFormValues}
        handleReset={handleReset}
      />
    </div>
  );
};

export default NewRecipe;
