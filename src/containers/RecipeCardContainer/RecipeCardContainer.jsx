import { useState, useEffect } from "react";
import "./RecipeCardContainer.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipeCardContainer = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      let response = await fetch("http://localhost:8080/cookbook/recipes");
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      let recipeData = await response.json();
      setRecipes(recipeData);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    setRecipes(getRecipes());
  }, []);

  return (
    <>
      <h2>My recipes</h2>
      <div>
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </>
  );
};

export default RecipeCardContainer;
