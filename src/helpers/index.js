const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
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
export const obj = {
  _id: "2",
  name: "Cruise America C-21",
  price: 8000,
  rating: 4.3,
  location: "Ukraine, Poltava",
  adults: 2,
  children: 2,
  engine: "petrol",
  transmission: "automatic",
  form: "alcove",
  length: "6.4m",
  width: "2.34m",
  height: "3.72m",
  tank: "151l",
  consumption: "21l/100km",
  description:
    "Discover the charm of the open road with the Cruise America C-21, a compact and versatile alcove-style motorhome. Ideal for couples or small families, this motorhome combines practicality with comfort, offering an efficient and enjoyable travel experience. The Cruise America C-21 is designed to provide you with the freedom to explore while ensuring a cozy retreat at the end of the day.",
  details: {
    airConditioner: 1,
    bathroom: 1,
    kitchen: 1,
    beds: 2,
    TV: 0,
    CD: 0,
    radio: 1,
    shower: 1,
    toilet: 1,
    freezer: 1,
    hob: 3,
    microwave: 1,
    gas: "22kg",
    water: "76l",
  },
  gallery: [
    "https://ftp.goit.study/img/campers-test-task/2-1.webp",
    "https://ftp.goit.study/img/campers-test-task/2-2.webp",
    "https://ftp.goit.study/img/campers-test-task/2-3.webp",
  ],
  reviews: [
    {
      reviewer_name: "Alice",
      reviewer_rating: 5,
      comment:
        "The Cruise America C-21 exceeded our expectations! Compact yet spacious, it's perfect for a couple's getaway. The kitchen facilities were impressive, and the bathroom setup was convenient. Highly recommended for a cozy and memorable road trip.",
    },
    {
      reviewer_name: "Bob",
      reviewer_rating: 3,
      comment:
        "Decent motorhome for the price. The Cruise America C-21 provided a comfortable stay, but the lack of a TV and CD player was a downside for entertainment. Overall, a satisfactory experience for a short trip.",
    },
  ],
  isFreezer: true,
  isTV: false,
  isKitchen: true,
  isShowerOrWC: true,
};
