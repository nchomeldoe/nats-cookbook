import "./App.scss";
import RecipeCardContainer from "./containers/RecipeCardContainer/RecipeCardContainer";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__header">Nat's Cookbook</h1>
      <RecipeCardContainer />
    </div>
  );
};

export default App;
