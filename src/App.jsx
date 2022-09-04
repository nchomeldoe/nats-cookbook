import "./App.scss";
import RecipeCardContainer from "./containers/RecipeCardContainer/RecipeCardContainer";

const App = () => {
  return (
    <div className="App">
      <h1>Nat's Cookbook</h1>
      <RecipeCardContainer />
    </div>
  );
};

export default App;
