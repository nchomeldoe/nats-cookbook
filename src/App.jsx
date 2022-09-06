import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.scss";
import RecipeCardContainer from "./containers/RecipeCardContainer/RecipeCardContainer";
import NewRecipe from "./containers/NewRecipe/NewRecipe";
import UpdateRecipe from "./containers/UpdateRecipe/UpdateRecipe";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Link to={`/`}>
          <h1 className="app__header">Nat's Cookbook</h1>
        </Link>
        <Routes>
          <Route path="/" element={<RecipeCardContainer />} />
          <Route path="/new" element={<NewRecipe />} />
          <Route path="/update/:recipeId" element={<UpdateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
