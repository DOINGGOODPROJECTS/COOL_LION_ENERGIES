import buildingsImage from "../../Assets/Imgs/buildings.jpg";
import clim from "../../Assets/Imgs/clim.jpg";
import rental from "../../Assets/Imgs/rental.jpg";
import sheds from "../../Assets/Imgs/sheds.jpg";
import emergency from "../../Assets/Imgs/emergency.png";
import climSolution from "../../Assets/Imgs/climSolution.jpg";
import shedsSolution from "../../Assets/Imgs/shedsSolution.jpg";
import agriStockImage from "../../Assets/Imgs/coolagristock.png";
import Routes from "../../Router/Routes";
import meeting from "../../Assets/Imgs/meeting.jpg";

const FrenchContent = {
  appbar: {
    navLink: {
      about: "A propos de nous",
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
      button: "Découvrir",
      image: rental,
      link: Routes.EmergencyRouteLink,
    },
    {
      title: "Cool Clim : Froid solaire mobile",
      text: " Des conteneurs frigorifiques ou des groupes électrogènes solaires efficaces",
      button: "Découvrir",
      image: clim,
      link: Routes.ClimRouteLink,
    },
    {
      title: "Cool Hangars:  Hangars solaires ",
      text: "Des hangars modernes pour votre stockage ",
      button: "Découvrir",
      image: sheds,
      link: Routes.ShedsRouteLink,
    },
    {
      title: "Cool Bâtiments : Bâtiments écologiques ",
      text: " Des bâtiments écologiques et modernes pour tous vos besoins ",
      button: "Découvrir",
      image: buildingsImage,
      link: Routes.BuildingsRouteLink,
    },
    {
      title: "Cool AgriStock : Pour une agriculture durable",
      text: "Des solutions numériques open source au service des chaînes de valeur agricoles locales",
      button: "Découvrir le projet",
      image: agriStockImage,
      link: Routes.AgriStockRouteLink,
    },
  ],
  partner: {
    title: "Votre Partenaire Idéal",
    text: "COOL LION ENERGIES est le spécialiste en Côte d’Ivoire dans la construction, l'assemblage et la mise à disposition d’infrastructures de stockage et de stockage frigorifique par énergie propre.  ",
    secondText:
      "Nos solutions accompagnent tous les secteurs, en particulier l’agriculture, l’agroalimentaire, les industries et le commerce.",
    subTitle:
      "Nos solutions ont été primées comme la meilleure innovation de petites infrastructures par l’Agence pour le Développement de l’Union Africaine. ",
  },
  video: {
    text: "Nous préservons ce qui est précieux pour vous.",
  },
  news: {
    title: "Cool Lion Energies dans la presse",
  },
  solution: {
    title: "Nos solutions",
    content: [
      {
        title: "Cool Urgence Location",
        text: "Location en urgence de stockage frigorifique sur votre site avec nos groupes électrogènes solaires ou notre site à Djorogobité (Angré) où nous mettons à disposition un conteneur frigorifique de 20 pieds.",
        button: "Je découvre",
        image: emergency,
        link: Routes.EmergencyRouteLink,
      },
      {
        title: "Cool Clim",
        text: "Des conteneurs frigorifiques ou des groupes électrogènes solaires efficaces en location à longue durée, en paiement cash ou paiements périodiques qui vont satisfaire tous vos besoins de conservation. ",
        button: "Je découvre",
        image: climSolution,
        link: Routes.ClimRouteLink,
      },
      {
        title: "Cool Hangars",
        text: "Un Hangar solaire vous permet de stocker votre marchandise et de produire aussi de l’énergie pour vos propres besoins et même de la revendre. ",
        button: "Je découvre",
        image: shedsSolution,
        link: Routes.ShedsRouteLink,
      },
      {
        title: "Cool Bâtiments",
        text: "Nous construisons des greniers, des aires, des bâtiments de stockage avec une ventilation naturelle et autant que possible des matériaux locaux.",
        button: "Je découvre",
        image: buildingsImage,
        link: Routes.BuildingsRouteLink,
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
          "Conseil & Accompagnement",
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
      title: "Newsletter",
      text: "Rejoignez-nous dans l'émergence",
      button: "Postulez dès maintenant",
    },
    newsLetter: "Abonnez vous à notre newsletter",
    follow: "Nous suivre",
  },
  products: {
    button: ["DEMANDEZ UN DEVIS", "FORMULAIRE CONTACT"],
    emergency: {
      title: "Cool Urgence Location | Chambres froides solaires",
      link: Routes.EmergencyRouteLink,
      image: emergency,
      text: "La location d'un stockage frigorifique est la solution idéale pour faire face aux imprévus (urgence, panne…), palier un manque de capacité temporaire, la rénovation ou la révision de votre propre stockage frigorifique. Sur votre site, nous sommes en mesure de déplacer des groupes électrogènes de réfrigération solaire, autonomes qui peuvent être joints à vos bâtiments ou toute infrastructure de stockage pour les louer sur une période fixe. En outre, nous disposons d’un conteneur frigorifique solaire de 20 pieds à température positive sur notre site à Djorogobité (Angré) susceptible d’accueillir votre marchandise à tout moment. ",
      subTitle: "",
      choose: {
        title: "Vous avez donc deux possibilités",
        case: [
          "Louer de l’espace de stockage à l'intérieur de nos conteneurs pour la conservation sur une période fixe de vos produits",
          "Faire déployer des groupes électrogènes de froid solaire sur votre site pour location sur une période donnée.",
        ],
      },
    },
    clim: {
      title: "Cool Clim | Chambres froides solaires",
      link: Routes.ClimRouteLink,
      image: clim,
      text: "Nous disposons de conteneurs réfrigérés alimentés à 100% par l'énergie solaire, par énergie régulière, ou encore hybrides (plusieurs sources d’alimentation croisée) avec des tailles différentes (10, 20 et 40 pieds pour une capacité de stockage moyenne de 6, 20 et 29 tonnes). Pour les produits de pêche, on parle de chambre froide négative (entre -18°C et -30°C) et pour l'agriculture et l’agroalimentaire, on parle de chambre froide positive (entre +2°C et +16°C). La conservation de vos produits est ainsi rallongée de 2 semaines à 1 an. Les conteneurs sont assemblés localement à partir de panneaux préfabriqués importés et ont la particularité d’être amovibles, rapidement déployables et peu gourmandes en espace.",
      subTitle:
        "Nous offrons des solutions flexibles de paiement telles que le paiement à tempérament et le pay-as-you-go.",
    },
    sheds: {
      title: "Cool Hangars | Hangars solaires ",
      link: Routes.ShedsRouteLink,
      image: sheds,
      text: "Quel que soit votre besoin (bâtiment de stockage, bâtiment d’élevage, parking…) et votre activité, un bâtiment photovoltaïque a de nombreux avantages.",
      subTitle:
        "Il vous permet de stocker votre marchandise et de produire aussi de l’énergie pour vos propres besoins et même de la revendre.",
    },
    buildings: {
      title: "Cool Bâtiments | Bâtiments agricoles écologiques ",
      link: Routes.BuildingsRouteLink,
      image: buildingsImage,
      text: "Solution bien indiquée pour l'élevage et l’agriculture: les productions vivrières sans besoin de réfrigération (riz, maïs, soja, igname etc) ont besoin de conservation ambiante et à l’abri des rongeurs nuisibles – nous avons réinventer pour vous le traditionnel grenier ou le hangar de fortune de collecte groupée.",
      subTitle:
        "Nous proposons la construction de bâtiments à ventilation naturelle, écologiques qui utilisent  notamment des matériaux locaux tels que la brique de terre compressée etc.Nos designs sont à coût modéré, visuellement plaisants et embellissent le cadre de vie rural en transformant vos bâtiments en des lieux de vie.",
    },
    agristock: {
      title: "Cool AgriStock : Solution numérique open source",
      link: Routes.AgriStockRouteLink,
      image: agriStockImage,
      text: "Cool AgriStock est une plateforme open source qui soutient les chaînes de valeur agricoles locales grâce à des infrastructures modulaires de stockage et de transformation. Conçue pour réduire les pertes post-récolte, elle permet aux coopératives et aux agriculteurs de conserver, sécher et transformer leurs produits de manière plus efficace.",
      subTitle: "Construite selon des principes de conception climato-intelligente et à partir de matériaux locaux comme les blocs de terre comprimée, AgriStock allie technologie, durabilité et accessibilité. Elle donne aux communautés rurales — en particulier aux femmes agricultrices — les moyens d’ajouter de la valeur et de renforcer la sécurité alimentaire à la base.",
    },
    support: {
      title: "Conseil & Accompagnement ",
      link: Routes.SupportRouteLink,
      image: meeting,
      text: "Vous avez un projet relatif au stockage et au stockage frigorifique ?      ",
      subTitle:
        "Nous vous accompagnons pour vos études, du conseil ou encore pour la réalisation bout-en-bout de votre projet.",
    },
  },
};

export default FrenchContent;
