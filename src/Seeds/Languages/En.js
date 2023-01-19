import buildingsImage from "../../Assets/Imgs/buildings.jpg";
import clim from "../../Assets/Imgs/clim.jpg";
import meeting from "../../Assets/Imgs/meeting.jpg";
import rental from "../../Assets/Imgs/rental.jpg";
import sheds from "../../Assets/Imgs/sheds.jpg";

const EnglishContent = {
  appbar: {
    navLink: {
      about: "about us",
      product: "roducts and Services",
      news: "News",
      contact: "contacts",
    },
    button: "Become A partner",
  },
  home: [
    {
      title: "Emergency rental ",
      text: "of cold storage on your site or on our site",
      button: "Learn more",
      image: rental,
    },
    {
      title: "Cool Clim - Solar mobile cooling",
      text: "Solar efficient refrigerated containers or generators",
      button: "Learn more",
      image: clim,
    },
    {
      title: "Cool Sheds - Solar Sheds",
      text: "Modern sheds for your storage",
      button: "Learn more",
      image: sheds,
    },
    {
      title: "Cool Buildings - Green buildings",
      text: "Green and modern buildings for all your needs",
      button: "Learn more",
      image: buildingsImage,
    },
    {
      title: "Consulting & Advisory Services",
      text: " Consulting and Advisory for your storage project",
      button: "Learn more",
      image: meeting,
    },
  ],
  partner: {
    title: "Your Ideal Partner",
    text: "COOL LION ENERGIES is a specialist in Côte d’Ivoire majoring in the construction, assembly and  provision of storage infrastructures and refrigerated storage powered by clean energy. Our solutions provide a wide range of support in different sectors, in particular agriculture, agri-food, industries and trade.",
    subTitle:
      "We have been awarded as the best small infrastructure innovation by the African Union Development Agency.",
  },
  video: {
    text: "We preserve what is valuable to you",
  },
  solution: {
    title: "our solutions",
    content: [
      {
        title: "Cool Emergency Rental",
        text: "Emergency rental of refrigerated storage on your site with our solar generators or our site in Djorogobité (Angré) where we provide a 20 feet refrigerated container.",
        button: "Find out more",
      },
      {
        title: "Cool Clim",
        text: "Solar efficient refrigerated containers or solar generators for a long term rental, cash or periodic payments which will meet all your preservation needs.",
        button: "Find out more",
      },
      {
        title: "Cool Sheds",
        text: "A solar shed enables you to store your goods and also generate energy for your own needs and even for sale.",
        button: "Find out more",
      },
      {
        title: "Cool Buildings",
        text: "We build attics, bays, storage buildings with natural ventilation and as much as possible using local materials.",
        button: "Find out more",
      },
      {
        title: " Consulting & Support ",
        text: "We support you in your storage projects. From the conception of the project to the realization, we are at your service.",
        button: "Find out more",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    form: {
      firstName: "First name",
      lastName: "Last name",
      typeOfRequest: {
        title: "Type of request",
        content: [
          "Cool Emergency Rental ",
          "Cool Clim",
          "Cool Shed",
          "Cool Buildings",
          "Consulting & Support",
        ],
      },
      country: "country",
      email: "email",
      phone: "telephone",
      message: "message",
      send: "send",
    },
  },
  footer: {
    newsLetter: "Subscribe to our newsletter",
  },
};

export default EnglishContent;
