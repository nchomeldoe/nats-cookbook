import "./Ingredient.scss";

const Ingredient = ({ name, value, unit }) => {
  if (value !== 1) {
    switch (unit) {
      case "cup":
        unit = "cups";
        break;
      case "can":
        unit = "cans";
        break;
      case "tin":
        unit = "tins";
        break;
      case "pinch":
        unit = "pinches";
        break;
      case "drizzle":
        unit = "drizzles";
        break;
      case "clove":
        unit = "cloves";
        break;
      case "stick":
        unit = "sticks";
        break;
      case "bunch":
        unit = "bunches";
        break;
      case "packet":
        unit = "packets";
        break;
      default:
        unit = unit;
        break;
    }
  }

  if (unit === "item") {
    unit = "";
  }

  return (
    <>
      <p>
        {name}: ({Number(value)}
        {unit.length > 0 && ` ${unit}`})
      </p>
    </>
  );
};

export default Ingredient;
