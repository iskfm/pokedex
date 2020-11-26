const Feet = (meters) => {
  const realFeet = (meters * 0.3937) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return `${feet} feet ${inches}"`;
};

const Height = (height) => `${Feet(height * 10)} (${height / 10}m)`;

export default Height;
