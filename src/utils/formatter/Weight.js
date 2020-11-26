const Weight = (weight) => {
  const lbs = Math.floor(weight * 22.046) / 100;
  return `${lbs} lbs (${weight / 10}kg)`;
};

export default Weight;
