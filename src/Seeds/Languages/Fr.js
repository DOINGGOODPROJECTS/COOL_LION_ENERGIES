import buildingsImage from "../../Assets/Imgs/buildings.jpg";
import clim from "../../Assets/Imgs/clim.jpg";
import rental from "../../Assets/Imgs/rental.jpg";
import sheds from "../../Assets/Imgs/sheds.jpg";
import emergency from "../../Assets/Imgs/emergency.png";
import climSolution from "../../Assets/Imgs/climSolution.jpg";
import shedsSolution from "../../Assets/Imgs/shedsSolution.jpg";
import Routes from "../../Router/Routes";

const FrenchContent = {
  appbar: {
    navLink: {
      about: "A propos",
      product: "Produits & Services",
      news: "Actualités",
      contact: "Contacts",
    },
    button: "DEVENIR PARTENAIRE",
  },
  home: [
    {
      title: "Cool Urgence Location ",
      text: "Location en urgence de stockage frigorifique sur votre site ou notre site",
      button: "Learn more",
      image: rental,
    },
    {
      title: "Cool Clim - Froid solaire mobile",
      text: " Des conteneurs frigorifiques ou des groupes électrogènes solaires efficaces",
      button: "Learn more",
      image: clim,
    },
    {
      title: "Cool Hangars - Hangars solaires ",
      text: "Des hangars modernes pour votre stockage ",
      button: "Learn more",
      image: sheds,
    },
    {
      title: "Cool Bâtiments - Bâtiments écologiques ",
      text: " Des bâtiments écologiques et modernes pour tous vos besoins ",
      button: "Learn more",
      image: buildingsImage,
    },
  ],
  partner: {
    title: "Votre Partenaire Idéal",
    text: "COOL LION ENERGIES est le spécialiste en Côte d’Ivoire dans la construction, l'assemblage et la mise à disposition d’infrastructures de stockage et de stockage frigorifique par énergie propre. Nos solutions accompagnent tous les secteurs, en particulier l’agriculture, l’agroalimentaire, les industries et le commerce.",
    subTitle:
      "Nos solutions ont été primées comme la meilleure innovation de petites infrastructures par l’Agence pour le Développement de l’Union Africaine. ",
  },
  video: {
    text: "Texte en bas: Nous préservons ce qui est précieux pour vous.",
  },
  solution: {
    title: "Nos solutions",
    content: [
      {
        title: "Cool Urgence Location",
        text: "Location en urgence de stockage frigorifique sur votre site avec nos groupes électrogènes solaires ou notre site à Djorogobité (Angré) où nous mettons à disposition un conteneur frigorifique de 20 pieds.",
        button: "Find out more",
        image: emergency,
      },
      {
        title: "Cool Clim",
        text: "Des conteneurs frigorifiques ou des groupes électrogènes solaires efficaces en location à longue durée, en paiement cash ou paiements périodiques qui vont satisfaire tous vos besoins de conservation. ",
        button: "Find out more",
        image: climSolution,
      },
      {
        title: "Cool Hangars",
        text: "Un Hangar solaire vous permet de stocker votre marchandise et de produire aussi de l’énergie pour vos propres besoins et même de la revendre. ",
        button: "Find out more",
        image: shedsSolution,
      },
      {
        title: "Cool Bâtiments",
        text: "Nous construisons des greniers, des aires, des bâtiments de stockage avec une ventilation naturelle et autant que possible des matériaux locaux.",
        button: "Find out more",
        image: buildingsImage,
      },
    ],
  },
  contact: {
    title: "Ecrivez-nous",
    form: {
      firstName: "Nom",
      lastName: "Prénoms",
      organisation: "Nom de votre organisation",
      typeOfRequest: {
        title: "Nature de la demande",
        content: [
          "Cool Urgence Location",
          "Cool Clim",
          "Cool Hangar",
          "Cool Bâtiments",
          "Conseil & Accompagnemen",
        ],
      },
      country: "Votre Pays",
      email: "Email",
      phone: "Téléphone",
      message: "Message",
      send: "ENVOYER",
    },
  },
  footer: {
    partner: {
      title: "Partenaire",
      text: "Rejoignez-nous dans l'émergence",
      button: "Postulez dès maintenant",
    },
    newsLetter: "Abonnez vous à notre newsletter",
  },
  products: {
    emergency: {
      title: "Cool Urgence Location | Chambres froides solaires",
      link: Routes.EmergencyRouteLink,
    },
    clim: {
      title: "Cool Clim | Chambres froides solaires",
      link: Routes.ClimRouteLink,
    },
    sheds: {
      title: "Cool Bâtiments | Bâtiments agricoles écologiques",
      link: Routes.ShedsRouteLink,
    },
    buildings: {
      title: "Cool Buildings | Green farm buildings",
      link: Routes.BuildingsRouteLink,
    },
  },
};

export default FrenchContent;
