import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipeCardContainer.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipeCardContainer = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await fetch("http://localhost:8080/cookbook/recipes");
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      const recipeData = await response.json();
      setRecipes(recipeData);
    } catch (error) {
      return error.message;
    }
  };

  const deleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/cookbook/recipe/${recipeId}`,
        { method: "DELETE" },
      );
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      const updatedRecipes = recipes.filter((recipe) => recipe.id != recipeId);
      setRecipes(updatedRecipes);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipe-card-container">
      <div className="recipe-card-container__top-line">
        <h2 className="recipe-card-container__header">My recipes</h2>
        <Link to="/new">
          <button className="recipe-card-container__button">Add recipe</button>
        </Link>
      </div>
      <div className="recipe-card-container__recipes">
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
            />
          ))}
      </div>
    </div>
  );
};

export default RecipeCardContainer;
