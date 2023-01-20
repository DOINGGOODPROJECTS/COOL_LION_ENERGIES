import buildingsImage from "../../Assets/Imgs/buildings.jpg";
import clim from "../../Assets/Imgs/clim.jpg";
import meeting from "../../Assets/Imgs/meeting.jpg";
import rental from "../../Assets/Imgs/rental.jpg";
import sheds from "../../Assets/Imgs/sheds.jpg";
import emergency from "../../Assets/Imgs/emergency.png";
import climSolution from "../../Assets/Imgs/climSolution.jpg";
import shedsSolution from "../../Assets/Imgs/shedsSolution.jpg";
import Routes from "../../Router/Routes";

const EnglishContent = {
  appbar: {
    navLink: {
      about: "about us",
      product: "Products and Services",
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
        image: emergency,
      },
      {
        title: "Cool Clim",
        text: "Solar efficient refrigerated containers or solar generators for a long term rental, cash or periodic payments which will meet all your preservation needs.",
        button: "Find out more",
        image: climSolution,
      },
      {
        title: "Cool Sheds",
        text: "A solar shed enables you to store your goods and also generate energy for your own needs and even for sale.",
        button: "Find out more",
        image: shedsSolution,
      },
      {
        title: "Cool Buildings",
        text: "We build attics, bays, storage buildings with natural ventilation and as much as possible using local materials.",
        button: "Find out more",
        image: buildingsImage,
      },
      {
        title: " Consulting & Support ",
        text: "We support you in your storage projects. From the conception of the project to the realization, we are at your service.",
        button: "Find out more",
        image: meeting,
      },
    ],
  },
  contact: {
    title: "Contact Us",
    form: {
      firstName: "First name",
      lastName: "Last name",
      organisation: "Name of your organization",
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
      country: "Choose your country",
      email: "Email",
      phone: "Telephone",
      message: "Message",
      send: "SEND",
    },
  },
  footer: {
    partner: {
      title: "Partner",
      text: "Join us in the emergence",
      button: "Apply now",
    },
    newsLetter: "Subscribe to our newsletter",
  },
  products: {
    button: ["ASK FOR A QUOTE", " CONTACT FORM"],
    emergency: {
      title: "Cool Emergency Rental  | Solar - powered cold rooms      ",
      link: Routes.EmergencyRouteLink,
      image: emergency,
      text: "The rental of a refrigerated storage is the ideal solution to face unexpected situations (emergency, breakdown...), mitigate a temporary lack of capacity, also renovation or maintenance of your own refrigerated storage.On your site, we are able to move autonomous solar refrigeration generators that can be attached to your buildings or any storage infrastructure to rent them for a fixed period. In addition, we have a 20 feet solar refrigerated container with positive temperature on our site in Djorogobité (Angré) that can store your goods at any time. ",
      subTitle: "",
      choose: {
        title: "You have two possibilities",
        case: [
          "Rent storage space inside our containers for the conservation of your products over a fixed period",
          "Deploy solar cooling generators on your site for rental following a given period of time.",
        ],
      },
    },
    clim: {
      title: "Cool Clim | Solar - powered cold rooms      ",
      link: Routes.ClimRouteLink,
      image: clim,
      text: "We have refrigerated containers which are 100%  powered by solar energy, by regular energy, or even hybrid   (several sources of cross power) with different sizes (10, 20 and 40 feet for an average storage capacity of 6, 20 and 29 tons). For fishing products, we refer to a negative cold room (between -18°C and -30°C) and for agriculture and  food industry, we refer to a positive cold room (between +2°C and +16°C). The conservation of your products is thus extended from 2 weeks to 1 year.The containers are assembled locally from imported prefabricated panels with various characteristics of being removable, quickly deployed and space-saving.",
      subTitle:
        "We offer flexible payment solutions such as installment and pay-as-you-go. ",
    },
    sheds: {
      title: "Cool Sheds  | Solar sheds      ",
      link: Routes.ShedsRouteLink,
      image: sheds,
      text: "Regardless of your needs (storage building, livestock building, parking lot...) and your activity, a photovoltaic building has many advantages.",
      subTitle:
        "It allows you to store your goods and also generate energy for your own need and even for sale.",
    },
    buildings: {
      title: "Cool Buildings | Green farm buildings",
      link: Routes.BuildingsRouteLink,
      image: buildingsImage,
      text: "A solution well suited for livestock and agriculture: food crops without need of refrigeration (rice, corn, soybeans, yams, etc.) that need to be stored at room temperature and free from pests - we have reinvented for you the traditional granary or makeshift shed for grouped collection.",
      subTitle:
        "We offer naturally ventilated, environmentally friendly buildings that use local materials such as compressed mud bricks etc.Our designs are low cost, visually attractive and enhance the rural environment by transforming your buildings into living spaces.",
    },
    support: {
      title: "Consulting & Support ",
      link: Routes.SupportRouteLink,
      image: meeting,
      text: "You have a project related to storage and cold storage?",
      subTitle:
        "We support you with your research, consulting or even for the end-to-end realization of your project",
    },
  },
};

export default EnglishContent;
