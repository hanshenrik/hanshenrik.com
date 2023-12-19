const randomFromList = (values: string[]) => {
  return values[Math.floor(Math.random() * values.length)];
};

export const randomBackgroundColor = () => {
  return randomFromList(["bg-dark-blue", "bg-indigo", "bg-orange", "bg-pink"]);
};
