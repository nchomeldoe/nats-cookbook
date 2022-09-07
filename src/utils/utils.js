export const formatData = (str) => {
  return str.length > 0
    ? str[0].toUpperCase() + str.substring(1, str.length).toLowerCase()
    : str;
};

export const formatDescription = (str) => {
  const arr = str.split(". ").map((sentence) => {
    if (sentence[sentence.length - 1] !== ".") {
      sentence += ".";
    }
    return formatData(sentence);
  });
  return arr;
};

export const getDataFromForm = (values) => {
  const fullRecipeData = {
    serves: values.serves,
    name: values.name,
    description: formatDescription(values.description),
    createdBy: "Nat",
    cuisine: values.cuisine,
    ingredientsAndQuantities: [...values.ingredientsAndQuantities],
  };
  return fullRecipeData;
};
