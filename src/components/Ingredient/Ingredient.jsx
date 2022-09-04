import "./Ingredient.scss";

const Ingredient = ({ name, value, unit }) => {
  console.log("name value and unit", name, value, unit);
  return (
    <>
      <h3>Ingredient</h3>
      <p>{name}</p>
      <p>{value}</p>
      <p>{unit}</p>
    </>
  );
};

export default Ingredient;
