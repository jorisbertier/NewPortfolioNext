import {Logos, ProjectPicture} from '../utils/LogoDatas'

export const ProjectsData = [
    {
        title: "NFT Marketplace",
        alt: "logo symfony",
        description: "FUTURE is a platform combining cryptocurrencies and NFTs that offers users the ability to discover, buy and track the value of NFTs. Features include creating a personalized gallery and tracking the performance of their Ethereum-related investment. The orchestration is divided into 2 applications, one in Symfony (API and administration) and the other in Angular (client). The web application is fully responsive and adapted for mobile use.",
        texts: [
            "CRUD of NFTs",
            "Integration API Ethereum",
            "Investment tracking (graph)",
            "Custom gallery",
            "Interactive dashboard",
            "Responsive experience"
        ],
        descriptionShort :"NFT Marketplace & crypto platform",
        src: [
            ProjectPicture.Futur1,
            ProjectPicture.Futur5,
            ProjectPicture.Futur8,
            ProjectPicture.Futur2,
            ProjectPicture.Futur4,
            ProjectPicture.Futur6,
            ProjectPicture.Futur7,
        ],
        stack: [
            Logos.SymfonyLight,
            Logos.BootstrapLight,
            Logos.AngularLight,
            Logos.MysqlLight
        ],
        speed: 0.6
    },
    {
        title: "Nutri Track",
        alt: "logo expo",
        description: "Une plateforme e-commerce moderne avec gestion des produits et paiements.",
        texts: [
            "Gestion des commandes",
            "Paiement en ligne sécurisé",
            "Interface utilisateur dynamique",
            "Back-office d'administration",
            "Optimisation SEO",
            "Expérience mobile friendly"
        ],
        descriptionShort :"A daily mobile app for track your diet",
        src: [
            ProjectPicture.Futur1,
            ProjectPicture.Futur2,
            ProjectPicture.Ecom3
        ],
        stack: [
            Logos.SymfonyLight,
            Logos.BootstrapLight,
        ],
        speed: 0.6
    },
    {
        title: "Explore",
        alt: "Appointment calendar",
        description: "Explore is an application that allows for the sharing of appointment scheduling based on the employee's availability slots. The application is connected to the Google Calendar API to synchronize data. (Not available - Confidential project).",
        texts: [
            "Authentification with OAuth",
            "Google Calendar API integration",
            "Creation custom calendar without library",
            "Appointment scheduling using asynchronous requests",
            "Dynamic employee availability management",
        ],
        descriptionShort :"Explore: daily scheduling app",
        src: [
            ProjectPicture.calendar1,
            ProjectPicture.calendar2,
            ProjectPicture.calendar3,
            ProjectPicture.calendar4,
        ],
        stack: [
            Logos.SymfonyLight,
            Logos.JqueryLight,
            Logos.ApiLight,
            Logos.GoogleLight,
        ],
        speed: 0.5
    },
    {
        title: "Entract",
        alt: "logo beer",
        description: "Entracte is an online showcase site for a brewery and bar. The site aims to showcase the brewery and the craft beers offered by the retailer.",
        texts: [
            "Integration scss",
            "Parallax effect",
            "Responsive app",
            "Careful typography for visual identity",
            "Optimization SEO",
        ],
        descriptionShort :"Online Brewery for buy beers ",
        src: [
            ProjectPicture.Entracte1,
            ProjectPicture.Entracte4,
            ProjectPicture.Entracte2,
            ProjectPicture.Entracte3,
            ProjectPicture.Entracte5,
        ],
        stack: [
            Logos.JsLight,
            Logos.SassLight,
        ],
        speed: 0.5
    }
];
