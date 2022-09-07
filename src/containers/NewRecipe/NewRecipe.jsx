import { useNavigate } from "react-router-dom";
import "./NewRecipe.scss";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

const NewRecipe = () => {
  const navigate = useNavigate();

  const initialValues = {
    id: "",
    serves: "",
    name: "",
    description: [],
    createdBy: "Nat",
    ingredientsAndQuantities: [
      {
        ingredient: { name: "" },
        quantity: { unit: "", value: "" },
      },
      {
        ingredient: { name: "" },
        quantity: { unit: "", value: "" },
      },
    ],
    cuisine: "",
  };

  const getDataFromForm = (e) => {
    const recipeName =
      e.target.recipeName.value[0].toUpperCase() +
      e.target.recipeName.value
        .substring(1, e.target.recipeName.value.length)
        .toLowerCase();
    const serves = e.target.serves.value;
    const description = e.target.description.value
      .split(". ")
      .map((sentence) => {
        if (sentence[sentence.length - 1] !== ".") {
          sentence += ".";
        }
        return (
          sentence[0].toUpperCase() +
          sentence.substring(1, sentence.length).toLowerCase()
        );
      });
    const cuisine =
      e.target.cuisine.value[0].toUpperCase() +
      e.target.cuisine.value
        .substring(1, e.target.recipeName.value.length)
        .toLowerCase();
    const ingredientsAndQuantities = [];
    e.target.ingredientName.forEach((name) => {
      const ingredientDetails = {
        ingredient: { name: "" },
        quantity: { unit: "", value: "" },
      };
      ingredientDetails.ingredient.name = name.value;
      ingredientsAndQuantities.push(ingredientDetails);
    });
    e.target.quantityUnit.forEach((unit, index) => {
      ingredientsAndQuantities[index].quantity.unit = unit.value;
    });
    e.target.quantityValue.forEach((quantityValue, index) => {
      ingredientsAndQuantities[index].quantity.value = quantityValue.value;
    });
    const fullRecipeData = {
      serves: serves,
      name: recipeName,
      description: description,
      createdBy: "Nat",
      cuisine: cuisine,
      ingredientsAndQuantities: ingredientsAndQuantities,
    };
    return fullRecipeData;
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
    await postRecipe(getDataFromForm(e));
  };
  return (
    <div className="new-recipe">
      <h2 className="new-recipe__header">Add a new recipe:</h2>
      <RecipeForm initialValues={initialValues} handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewRecipe;
