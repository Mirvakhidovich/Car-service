export const BASE_API_URL = "http://localhost:8080";
// export const BASE_API_URL = "https://car-serice-api.onrender.com";

export const makes = ["Tesla", "Chevrolet", "Nissan", "Audi", "Jaguar", "BYD"];

export const models = [
  "Tesla Model S",
  "Tesla Model 3",
  "Tesla Model X",
  "Tesla Model Y",
  "Chevrolet Bolt EV",
  "Nissan Leaf",
  "Audi e-tron",
  "Jaguar I-PACE",
  "BYD Tang",
  "BYD Qin",
  "BYD e6",
];

export const randomLicensePlate = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let licensePlate = "";

  for (let i = 0; i < 5; i++) {
    if (i < 2) {
      licensePlate += letters.charAt(
        Math.floor(Math.random() * letters.length),
      );
    } else {
      licensePlate += numbers.charAt(
        Math.floor(Math.random() * numbers.length),
      );
    }
  }

  return licensePlate;
};

export const randomYear = () => {
  const min = 20010;
  const max = new Date().getFullYear();
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomMake = () => {
  return makes[Math.floor(Math.random() * makes.length)];
};

export const randomModel = () => {
  return models[Math.floor(Math.random() * models.length)];
};

export const randomColor = () => {
  const colors = [
    "Black",
    "White",
    "Silver",
    "Gray",
    "Red",
    "Blue",
    "Brown",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export const services = [
  {
    icon: "🚗",
    heading: "Repair Job",
    paragraph: "Get your car serviced",
    link: "repair-job",
    price: "100",
    id: "5287",
    inclusions: ["Oil Change", "Car Wash", "Tire Rotation"],
  },
  {
    icon: "🚗",
    heading: "Tires & Wheels Care",
    paragraph: "Get your car's tires and wheels checked",
    link: "tires-wheels-care",
    price: "75",
    id: "2af3",
    inclusions: ["Tire Rotation", "Wheel Alignment", "Wheel Balancing"],
  },
  {
    icon: "🚗",
    heading: "Battery change",
    paragraph: "Get your car's battery replaced",
    link: "battery-change",
    price: "150",
    id: "8f7a",
    inclusions: ["Battery Replacement"],
  },
  {
    icon: "🚗",
    heading: "Car Spa",
    paragraph: "Get your car spa",
    link: "ac",
    price: "50",
    id: "8f7a",
    inclusions: ["Car Spa"],
  },
  {
    icon: "🚗",
    heading: "Oil Change",
    paragraph: "Get your car's oil changed",
    link: "oil-change",
    price: "50",
    id: "55af",
    inclusions: ["Oil Change"],
  },
  {
    icon: "🚗",
    heading: "Car Wash",
    paragraph: "Get your car washed",
    link: "car-wash",
    price: "25",
    id: "85af",
    inclusions: ["Car Wash"],
  },
  {
    icon: "🚗",
    heading: "Car Painting",
    paragraph: "Get your car painted",
    link: "car-painting",
    price: "150",
    id: "635a",
    inclusions: ["Car Painting"],
  },
  {
    icon: "🚗",
    heading: "Car Insurance",
    paragraph: "Get your car insured",
    link: "car-insurance",
    price: "200",
    id: "b494",
    inclusions: ["Car Insurance"],
  },
  {
    icon: "🚗",
    heading: "Tune-up Service",
    paragraph: "Get your car tuned up",
    link: "tune-up-service",
    price: "50",
    id: "4328",
    inclusions: ["Tune-up Service"],
  },
];
