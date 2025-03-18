import {Logos, ProjectPicture} from '../utils/LogoDatas'

export const ProjectsData = [
    {
        title: "NFT Marketplace",
        alt: "logo symfony",
        description: "FUTURE is a platform combining cryptocurrencies and NFTs that offers users the ability to discover, buy and track the value of NFTs. Features include creating a personalized gallery and tracking the performance of their Ethereum-related investment. The orchestration is divided into 2 applications, one in Symfony (API and administration) and the other in Angular (client). The web application is fully responsive and adapted for mobile use.",
        texts: [
            "CRUD de NFTs",
            "Intégration API Ethereum",
            "Suivi des investissements (graphe)",
            "Galerie personnalisée",
            "Tableau de bord interactif",
            "Expérience responsive"
        ],
        src: [
            ProjectPicture.Futur1,
            ProjectPicture.Futur2,
            ProjectPicture.Futur4,
            ProjectPicture.Futur5
        ],
        stack: [
            Logos.SymfonyLight,
            Logos.BootstrapLight,
            Logos.AngularLight,
            Logos.MysqlLight
        ],
        speed: 0.65
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
        src: [
            ProjectPicture.Futur1,
            ProjectPicture.Futur2,
            ProjectPicture.Ecom3
        ],
        stack: [
            Logos.SymfonyLight,
            Logos.BootstrapLight,
        ],
        speed: 0.8
    },
    {
        title: "Explore Calendar",
        alt: "Appointment calendar",
        description: "Explore is an application that allows for the sharing of appointment scheduling based on the employee's availability slots. The application is connected to the Google Calendar API to synchronize data. (Not available - Confidential project).",
        texts: [
            "Authentification with OAuth",
            "Google Calendar API integration",
            "Creation custom calendar without library",
            "Appointment scheduling using asynchronous requests",
            "Dynamic employee availability management",
        ],
        src: [
            ProjectPicture.calendar1,
            ProjectPicture.calendar2,
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
        src: [
            ProjectPicture.Futur1,
            ProjectPicture.Futur2,
            ProjectPicture.Ecom3
        ],
        stack: [
            Logos.SymfonyLight,
            Logos.BootstrapLight,
        ],
        speed: 0.5
    }
];
