import {
  BookText,
  Briefcase,
  Code2,
  CodeSquare,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const dataAboutMe = [
  {
    id: 1,
    name: "Experiencia",
    icon: <Briefcase />,
    description: "+1 año de experiencia",
  },
  {
    id: 2,
    name: "Clientes",
    icon: <UsersRound />,
    description: "0 clientes satisfechos",
  },
  {
    id: 3,
    name: "Proyectos",
    icon: <Wrench />,
    description: "+10 completados",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={20} />,
    link: "#about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={20} />,
    link: "#portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

export const dataSlider = [
  {
    id: 1,
    url: "/slider-1.jpg",
  },
  {
    id: 2,
    url: "/portfolio.png",
  },
  // {
  //   id: 3,
  //   url: "/slider-1.jpg",
  // },
  // {
  //   id: 4,
  //   url: "/slider-1.jpg",
  // },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Password Manager",
    image: "/slider-1.jpg",
    urlGithub: "https://github.com/Boloxxx/password-manager",
    urlDemo: "https://password-manager-umber.vercel.app/",
  },
  {
    id: 2,
    title: "Web Pacientes Veterinaria",
    image: "/portfolio.png",
    urlGithub: "https://github.com/Boloxxx/citas-react/",
    urlDemo: "https://citas-react-rd.netlify.app/",
  },
  {
      id: 3,
      title: "Administrador de Gastos y Presupuestos",
      image: "/admin-budget.png",
      urlGithub: "https://github.com/Boloxxx/control-gastos-contextapi",
      urlDemo: "https://admin-presupuestord.netlify.app/",
  },
  {
      id: 4,
      title: "Clima App",
      image: "/image-4.png",
      urlGithub: "https://github.com/Boloxxx/app-clima",
      urlDemo: "https://weatherrd.netlify.app/",
  },
  // {
  //     id: 5,
  //     title: "Sitios Web Impactantes",
  //     image: "/image-5.jpg",
  //     urlGithub: "#!",
  //     urlDemo: "#!",
  // },
  // {
  //     id: 6,
  //     title: "Proyectos Web Dinámicos",
  //     image: "/image-6.jpg",
  //     urlGithub: "#!",
  //     urlDemo: "#!",
  // },
];

export const dataExperience = [
  {
    id: 1,
    title: "Frontend Development  💄",
    experience: [
      {
        name: "HTML",
        subtitle: "Experimentado",
        value: 80,
      },
      {
        name: "CSS",
        subtitle: "Intermedio",
        value: 75,
      },
      {
        name: "JavaScript",
        subtitle: "Intermedio",
        value: 60,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Intermedio",
        value: 50,
      },
      {
        name: "React",
        subtitle: "Basic",
        value: 40,
      },
      {
        name: "Bootstrap",
        subtitle: "Basic",
        value: 50,
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development  🥷",
    experience: [
      {
        name: "Python",
        subtitle: "Basic",
        value: 30,
      },
      {
        name: "MySQL",
        subtitle: "Intermedio",
        value: 40,
      },
      {
        name: "PHP",
        subtitle: "Basic",
        value: 30,
      },
    ],
  },
];

export const dataServices = [
  {
    id: 1,
    title: "Desarrollo Web",
    icon: <PanelsTopLeft />,
    features: [
      {
        name: "Desarrollo de sitios web personalizados",
      },
      {
        name: "Diseño y desarrollo responsive",
      },
      {
        name: "Optimización SEO",
      },
      {
        name: "Desarrollo de aplicaciones web",
      },
      {
        name: "Gestión de contenido",
      },
      {
        name: "E-commerce",
      },
      {
        name: "Mantenimiento y soporte continuo",
      },
    ],
  },
  // {
  //     id: 2,
  //     title: "Creación de contenido",
  //     icon: <BellPlus />,
  //     features: [
  //         {
  //             name: "Redacción de contenido original y de calidad",
  //         },
  //         {
  //             name: "Creación de vídeos atractivos y dinámicos",
  //         },
  //         {
  //             name: "Diseño gráfico para una imagen impactante",
  //         },
  //         {
  //             name: "Edición profesional de textos y materiales visuales",
  //         },
  //         {
  //             name: "Estrategias de marketing de contenidos efectivas",
  //         },
  //         {
  //             name: "Producción de podcasts informativos y entretenidos",
  //         },
  //         {
  //             name: "Generación de infografías claras y visualmente atractivas",
  //         },
  //         {
  //             name: "Fotografía profesional para capturar momentos excepcionales",
  //         },
  //     ],
  // },
  // {
  //     id: 3,
  //     title: "UI/UX Design",
  //     icon: <Brush />,
  //     features: [
  //         {
  //             name: "Diseño intuitivo para una experiencia de usuario fluida",
  //         },
  //         {
  //             name: "Prototipado interactivo para visualizar la interfaz",
  //         },
  //         {
  //             name: "Investigación de usuarios para comprender necesidades y expectativas",
  //         },
  //         {
  //             name: "Optimización de la usabilidad para mejorar la accesibilidad",
  //         },
  //         {
  //             name: "Pruebas de usabilidad para evaluar la experiencia",
  //         },
  //         {
  //             name: "Diseño responsive para adaptarse a diferentes dispositivos",
  //         },
  //     ],
  // },
];

export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+1 829 647 0829",
    link: "tel:+18296470829",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/boloxxx",
    link: "https://github.com/Boloxxx/",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "bryanrodriguezalmonte@gmail.com",
    link: "mailto:bryanrodriguezalmonte@gmail.com",
    icon: <Inbox />,
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile-1.jpeg",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile-3.jpeg",
  },
];
