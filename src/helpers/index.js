const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatMeasurement = (value) => {
  return value.replace(/(\d)([a-zA-Z])/g, "$1 $2");
};

export const getCategories = (camper) => {
  const result = [];
  const { airConditioner, beds, kitchen } = camper.details;
  const { adults, transmission, engine } = camper;

  if (adults && adults > 0) {
    result.push({
      iconName: "users",
      text: `${adults} adults`,
      styles: {},
    });
  }
  if (transmission) {
    result.push({
      iconName: "automatic",
      text: capitalizeFirstLetter(transmission),
      styles: { fill: "transparent", stroke: "#101828" },
    });
  }
  if (engine) {
    result.push({
      iconName: "petrol",
      text: capitalizeFirstLetter(engine),
      styles: {},
    });
  }
  if (kitchen && kitchen > 0) {
    result.push({
      iconName: "kitchen",
      text: "Kitchen",
      styles: { fill: "transparent", stroke: "#101828" },
    });
  }
  if (beds && beds > 0) {
    result.push({
      iconName: "bed",
      text: `${beds} ${beds > 1 ? "beds" : "bed"}`,
      styles: { fill: "transparent", stroke: "#101828" },
    });
  }

  if (airConditioner && airConditioner > 0) {
    result.push({ iconName: "ac", text: "AC", styles: {} });
  }
  return result;
};

export const formatRentPrice = (price) => {
  return `€${price},00`;
};

export const getAllDetails = (camper) => {
  const styles = { fill: "transparent", stroke: "#101828" };
  const vehicle = [
    { title: "Form", value: capitalizeFirstLetter(camper.form) },
    { title: "Length", value: formatMeasurement(camper.length) },
    { title: "Width", value: formatMeasurement(camper.width) },
    { title: "Height", value: formatMeasurement(camper.height) },
    { title: "Tank", value: formatMeasurement(camper.tank) },
    { title: "Consumption", value: camper.consumption },
  ];
  const details = [];

  const {
    kitchen,
    beds,
    airConditioner,
    CD,
    radio,
    hob,
    toilet,
    shower,
    freezer,
    gas,
    water,
    microwave,
    TV,
  } = camper.details;
  const { adults, transmission, engine } = camper;

  if (adults && adults > 0) {
    details.push({
      iconName: "users",
      text: `${adults} adults`,
      styles: {},
    });
  }
  if (transmission) {
    details.push({
      iconName: "automatic",
      text: capitalizeFirstLetter(transmission),
      styles,
    });
  }
  if (engine) {
    details.push({
      iconName: "petrol",
      text: capitalizeFirstLetter(engine),
      styles: {},
    });
  }
  if (kitchen && kitchen > 0) {
    details.push({
      iconName: "kitchen",
      text: "Kitchen",
      styles,
    });
  }
  if (beds && beds > 0) {
    details.push({
      iconName: "bed",
      text: `${beds} ${beds > 1 ? "beds" : "bed"}`,
      styles,
    });
  }
  if (airConditioner && airConditioner > 0) {
    details.push({
      iconName: "airConditioner",
      text: "Air Conditioner",
      styles,
    });
  }
  if (CD && CD > 0) {
    details.push({
      iconName: "cd",
      text: `CD`,
      styles,
    });
  }
  if (radio && radio > 0) {
    details.push({
      iconName: "radio",
      text: `Radio`,
      styles,
    });
  }
  if (hob && hob > 0) {
    details.push({
      iconName: "hob",
      text: `${hob} ${hob > 1 ? "hobs" : "bed"}`,
      styles,
    });
  }
  if (toilet && toilet > 0) {
    details.push({
      iconName: "toilet",
      text: `Toilet`,
      styles: {},
    });
  }
  if (shower && shower > 0) {
    details.push({
      iconName: "shower",
      text: "Shower",
      styles,
    });
  }
  if (freezer && freezer > 0) {
    details.push({
      iconName: "freezer",
      text: "Freezer",
      styles,
    });
  }
  if (gas) {
    details.push({
      iconName: "gas",
      text: "Gas",
      styles: {},
    });
  }
  if (water) {
    details.push({
      iconName: "water",
      text: "Water",
      styles,
    });
  }
  if (microwave && microwave > 0) {
    details.push({
      iconName: "microwave",
      text: "Microwave",
      styles,
    });
  }
  if (TV && TV > 0) {
    details.push({
      iconName: "tv",
      text: "TV",
      styles,
    });
  }
  return { vehicle, details };
};
