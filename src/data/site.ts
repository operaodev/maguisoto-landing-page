export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface Hour {
  label: string;
  value: string;
}

export const site = {
  name: "Magui Soto",
  url: "https://maguisoto.website",
  firstName: "Magui",
  role: "Cosmiatría & Estilista",
  credential: "Cosmiatra & Estilista Profesional",
  tagline: "Cosmiatría Facial & Estilismo en Lima",
  description:
    "Cuidado de la piel y mejoramiento del cutis con tratamientos personalizados, productos biocompatibles y atención uno a uno. Una mirada integral para realzar la luminosidad, la textura y la salud de tu piel, también a domicilio.",
  experienceYears: 5,
  location: {
    city: "Lima",
    area: "Sur",
    country: "Perú",
    reference: "Lima, Perú",
    description:
      "Atención personalizada a domicilio en Lima, con cita previa. Coordinamos cada servicio en la comodidad de tu hogar y cuidamos cada detalle para tu bienestar.",
  },
  phoneDisplay: "+51 916 752 614",
  whatsapp: "51916752614",
  payments: "Yape, Plin, efectivo y transferencia",
  hours: [
    { label: "Lunes a Viernes", value: "09:00 - 19:30 hrs" },
    { label: "Sábados", value: "10:00 - 14:00 hrs (Cupos limitados)" },
  ] satisfies Hour[],
} as const;

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio", icon: "spa" },
  { label: "Sobre mí", href: "#sobre-mi", icon: "person" },
  { label: "Servicios", href: "#servicios", icon: "clean_hands" },
  { label: "Resultados", href: "#casos", icon: "health_and_beauty" },
  { label: "Testimonios", href: "#testimonios", icon: "reviews" },
  { label: "Contacto", href: "#contacto", icon: "calendar_today" },
];

export const mobileNavLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio", icon: "spa" },
  { label: "Sobre mí", href: "#sobre-mi", icon: "person" },
  { label: "Rituales", href: "#servicios", icon: "clean_hands" },
  { label: "Casos", href: "#casos", icon: "health_and_beauty" },
  { label: "Contacto", href: "#contacto", icon: "calendar_today" },
];

export const whatsappUrl = (message = `Hola ${site.firstName}, quisiera consultar por una evaluación personalizada.`) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
