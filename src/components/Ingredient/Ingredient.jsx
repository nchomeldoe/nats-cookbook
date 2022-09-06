import "./Ingredient.scss";

const Ingredient = ({ name, value, unit }) => {
  console.log("name value and unit", name, value, unit);
  return (
    <>
      <p>
        {name}: ({value} {unit})
      </p>
    </>
  );
};

export default Ingredient;
