import type { ImageMetadata } from "astro";

import limpiezaFacialProfunda from "../assets/images/services/limpieza-facial-profunda.webp";
import pdrnSalmon from "../assets/images/services/pdrn-salmon.webp";
import pinkGlow from "../assets/images/services/pink-glow-mesoterapia-facial.webp";
import botox from "../assets/images/services/botox.jpg";
import acidoHialuronico from "../assets/images/services/acido-hialuronico.jpg";
import bolsasOjeras from "../assets/images/services/bolsas-ojeras.jpg";
import prp from "../assets/images/services/prp.jpg";
import masajeRelajante from "../assets/images/services/masaje-relajante.jpg";
import reductorMedidas from "../assets/images/services/reductor-medidas.jpg";
import hidrolipoclasia from "../assets/images/services/hidrolipoclasia.jpg";
import mesoterapiaPeptonas from "../assets/images/services/mesoterapia-peptonas.jpg";
import microbladingShading from "../assets/images/services/microblading-shading.jpg";
import laminadoCejas from "../assets/images/services/laminado-cejas.jpg";
import extensionesPestanas from "../assets/images/services/extensiones-pestanas.jpg";
import estilismoIntegral from "../assets/images/services/estilismo-integral.webp";

export type ServiceBadgeTone = "secondary" | "primary" | "tertiary";

export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: string;
  shortCategory: string;
  badgeTone: ServiceBadgeTone;
  skinType: string;
  summary: string;
  description: string;
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
}

export interface BookingOption {
  id: string;
  name: string;
  price?: string;
}

/**
 * Catálogo referencial de servicios de Magui Soto.
 * Los precios son orientativos, en soles peruanos (Lima, 2026), y están sujetos
 * a evaluación profesional. Los procedimientos invasivos se confirman después
 * de una valoración previa.
 */
export const services: Service[] = [
  {
    id: "limpieza-facial-profunda",
    name: "Limpieza Facial Profunda",
    price: "Desde S/ 100",
    duration: "75 minutos",
    category: "Higiene & Glow",
    shortCategory: "Limpieza & Glow",
    badgeTone: "secondary",
    skinType: "Todo tipo de piel",
    summary:
      "Higiene profunda con extracción cuidadosa, vapor, alta frecuencia e hidratación final para devolver luminosidad y equilibrio.",
    description:
      "Protocolo personalizado para descongestionar poros, retirar impurezas y renovar la superficie cutánea. Incluye doble limpieza, extracción, alta frecuencia, mascarilla calmante y protección solar.",
    tags: ["Limpieza profunda", "Poros", "Hidratación"],
    image: limpiezaFacialProfunda,
    imageAlt: "Aplicación de mascarilla facial durante una limpieza profunda",
  },
  {
    id: "prdn-salmon",
    name: "PRDN de Salmón",
    price: "Desde S/ 130",
    duration: "60 minutos",
    category: "Bioestimulación & Reparación",
    shortCategory: "PRDN Salmón",
    badgeTone: "primary",
    skinType: "Piel apagada, deshidratada o con signos de edad",
    summary:
      "Bioestimulación con polinucleótidos de ADN de salmón para favorecer la reparación celular, la elasticidad y la luminosidad.",
    description:
      "Aplicación de polinucleótidos que ayudan a mejorar la hidratación profunda, la textura y la firmeza de la piel. Se adapta a rostro, cuello y contorno de ojos según valoración profesional.",
    tags: ["PRDN", "Regeneración", "Elasticidad"],
    image: pdrnSalmon,
    imageAlt: "Aplicación de PRDN de salmón con microagujas en el rostro",
  },
  {
    id: "pink-glow",
    name: "Pink Glow & Masoterapia Facial",
    price: "Desde S/ 180",
    duration: "60 minutos",
    category: "Hidratación & Glow",
    shortCategory: "Pink Glow",
    badgeTone: "tertiary",
    skinType: "Piel deshidratada o sin luminosidad",
    summary:
      "Masoterapia facial con activos hidratantes y antioxidantes para activar la circulación y lograr un efecto glow inmediato.",
    description:
      "Protocolo sensorial que combina masaje facial, vitaminas y activos hidratantes para mejorar la textura, oxigenar los tejidos y devolver un aspecto fresco y descansado.",
    tags: ["Glow", "Vitamina C", "Masoterapia"],
    image: pinkGlow,
    imageAlt: "Tratamiento facial Pink Glow con aplicación de activos",
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica (Botox)",
    price: "Desde S/ 500",
    duration: "40 minutos",
    category: "Expresión & Firmeza",
    shortCategory: "Botox",
    badgeTone: "primary",
    skinType: "Líneas de expresión y gestos marcados",
    summary:
      "Relajación selectiva de la musculatura para suavizar líneas de expresión y mantener una mirada descansada y natural.",
    description:
      "Aplicación personalizada según la anatomía y los objetivos de cada paciente. Los resultados son temporales y suelen mantenerse entre 3 y 6 meses; requiere valoración profesional previa.",
    tags: ["Líneas finas", "Mirada", "Previa evaluación"],
    image: botox,
    imageAlt: "Profesional con guantes sosteniendo una jeringa para un tratamiento facial",
  },
  {
    id: "acido-hialuronico",
    name: "Relleno de Ácido Hialurónico",
    price: "Desde S/ 850",
    duration: "45 minutos",
    category: "Volumen & Hidratación",
    shortCategory: "Ácido Hialurónico",
    badgeTone: "tertiary",
    skinType: "Surcos, labios o pérdida de volumen",
    summary:
      "Hidratación y definición del contorno facial con ácido hialurónico para un resultado natural y armonioso.",
    description:
      "Relleno dérmico que ayuda a restaurar volumen, hidratar zonas específicas y suavizar surcos. La zona, la técnica y la cantidad se definen en una evaluación previa.",
    tags: ["Volumen", "Labios", "Previa evaluación"],
    image: acidoHialuronico,
    imageAlt: "Detalle de labios durante un tratamiento estético de ácido hialurónico",
  },
  {
    id: "bolsas-ojeras",
    name: "Tratamiento de Bolsas & Ojeras",
    price: "Desde S/ 100",
    duration: "45 minutos",
    category: "Mirada Descansada",
    shortCategory: "Bolsas & Ojeras",
    badgeTone: "secondary",
    skinType: "Ojeras, bolsas y mirada cansada",
    summary:
      "Protocolo descongestivo y bioestimulador para mejorar la apariencia de bolsas, ojeras y fatiga en la mirada.",
    description:
      "Combina descongestión, hidratación y estímulo de colágeno en el contorno de ojos. No sustituye una valoración médica cuando existe una causa estructural o de salud.",
    tags: ["Ojeras", "Descongestión", "Contorno de ojos"],
    image: bolsasOjeras,
    imageAlt: "Mujer con parches bajo los ojos durante un tratamiento de bolsas y ojeras",
  },
  {
    id: "plasma-rico-plaquetas",
    name: "Plasma Rico en Plaquetas (PRP)",
    price: "Desde S/ 120",
    duration: "60 minutos",
    category: "Regeneración Natural",
    shortCategory: "PRP",
    badgeTone: "primary",
    skinType: "Piel sin firmeza, cicatrices u ojeras",
    summary:
      "Bioestimulación con factores de crecimiento de tu propia sangre para mejorar textura, firmeza y luminosidad.",
    description:
      "Se obtiene una muestra de sangre, se procesa para concentrar las plaquetas y se aplica en la piel mediante microinyecciones. Los resultados son progresivos y requieren un plan de sesiones.",
    tags: ["PRP", "Colágeno", "Firmeza"],
    image: prp,
    imageAlt: "Tubo de muestra y guantes para un tratamiento de plasma rico en plaquetas",
  },
  {
    id: "masaje-relajante",
    name: "Masaje Relajante",
    price: "Desde S/ 70",
    duration: "60 minutos",
    category: "Bienestar & Descanso",
    shortCategory: "Masaje",
    badgeTone: "secondary",
    skinType: "Estrés, tensión o contracturas",
    summary:
      "Masaje manual de ritmo pausado para liberar tensión, mejorar la circulación y regalarte un momento de calma.",
    description:
      "Técnica relajante adaptada a tu nivel de tensión y zonas de mayor molestia. Favorece el drenaje, la oxigenación de los tejidos y el descanso profundo.",
    tags: ["Relajación", "Drenaje", "Estrés"],
    image: masajeRelajante,
    imageAlt: "Masaje relajante en la espalda en un ambiente de spa",
  },
  {
    id: "reductor-medidas",
    name: "Tratamiento Reductor de Medidas",
    price: "Desde S/ 60",
    duration: "75 minutos",
    category: "Moldeado Corporal",
    shortCategory: "Reductor",
    badgeTone: "tertiary",
    skinType: "Adiposidad localizada y celulitis",
    summary:
      "Protocolo corporal personalizado con masaje, drenaje y aparatología para favorecer la reducción de medidas y el contorno.",
    description:
      "Combina maniobras manuales y activos que ayudan a movilizar grasa localizada, mejorar la circulación y reducir la retención de líquidos. Se recomienda un plan de sesiones y hábitos saludables.",
    tags: ["Reductor", "Contorno", "Drenaje"],
    image: reductorMedidas,
    imageAlt: "Masaje corporal profesional para un tratamiento reductor de medidas",
  },
  {
    id: "hidrolipoclasia",
    name: "Hidrolipoclasia",
    price: "Desde S/ 170",
    duration: "60 minutos",
    category: "Grasa Localizada",
    shortCategory: "Hidrolipoclasia",
    badgeTone: "primary",
    skinType: "Abdomen, flancos o muslos",
    summary:
      "Procedimiento mínimamente invasivo que combina solución fisiológica y ultrasonido para favorecer la lipólisis localizada.",
    description:
      "Se infiltra una solución fisiológica con activos y se aplica ultrasonido para ayudar a romper las células grasas, que luego se eliminan por el sistema linfático. Requiere valoración previa y varias sesiones.",
    tags: ["Lipólisis", "Abdomen", "Previa evaluación"],
    image: hidrolipoclasia,
    imageAlt: "Masaje corporal en camilla durante un tratamiento de contorno corporal",
  },
  {
    id: "mesoterapia-peptonas",
    name: "Mesoterapia & Peptonas en Glúteos",
    price: "Desde S/ 220",
    duration: "45 minutos",
    category: "Celulitis & Volumen",
    shortCategory: "Mesoterapia",
    badgeTone: "secondary",
    skinType: "Celulitis, flacidez o glúteos",
    summary:
      "Microinyecciones de activos para mejorar celulitis, contorno y firmeza, con protocolo específico para glúteos.",
    description:
      "La mesoterapia aplica cócteles personalizados de vitaminas, enzimas y activos lipolíticos. El protocolo de peptonas en glúteos busca tonificar y mejorar la apariencia de la zona.",
    tags: ["Mesoterapia", "Peptonas", "Glúteos"],
    image: mesoterapiaPeptonas,
    imageAlt: "Profesional con guantes sosteniendo instrumental estéril para un tratamiento corporal",
  },
  {
    id: "microblading-shading",
    name: "Microblading & Shading",
    price: "Desde S/ 500",
    duration: "120 minutos",
    category: "Cejas de Autor",
    shortCategory: "Microblading",
    badgeTone: "primary",
    skinType: "Cejas con poco vello o asimetría",
    summary:
      "Micropigmentación pelo a pelo o sombreado para definir, rellenar y armonizar tus cejas con un resultado natural.",
    description:
      "Incluye diseño previo según las proporciones del rostro, aplicación de pigmento y recomendaciones de cuidado. Se recomienda un retoque y el resultado suele durar entre 12 y 18 meses.",
    tags: ["Microblading", "Shading", "Cejas"],
    image: microbladingShading,
    imageAlt: "Detalle de cejas durante un tratamiento de microblading y shading",
  },
  {
    id: "laminado-cejas",
    name: "Laminado de Cejas & Pigmentación",
    price: "Desde S/ 120",
    duration: "60 minutos",
    category: "Diseño & Fijación",
    shortCategory: "Laminado",
    badgeTone: "tertiary",
    skinType: "Cejas desordenadas o despobladas",
    summary:
      "Laminado y pigmentación para peinar el vello, rellenar zonas despobladas y fijar una forma que realce tu mirada.",
    description:
      "El laminado alinea y fija el vello en la dirección deseada, mientras la pigmentación aporta definición y densidad visual. El efecto suele mantenerse entre 4 y 6 semanas.",
    tags: ["Laminado", "Pigmentación", "Visagismo"],
    image: laminadoCejas,
    imageAlt: "Cepillado y diseño de cejas durante un laminado",
  },
  {
    id: "extensiones-pestanas",
    name: "Extensiones de Pestañas",
    price: "Desde S/ 60",
    duration: "120 minutos",
    category: "Mirada de Impacto",
    shortCategory: "Pestañas",
    badgeTone: "secondary",
    skinType: "Pestañas cortas o mirada sin definición",
    summary:
      "Diseños clásicos, volumen egipcio, hawaiano o efecto wispy para una mirada más definida y expresiva.",
    description:
      "Se seleccionan las fibras y el efecto según la forma de tus ojos y el estilo que buscas. Incluye recomendaciones de cuidado y retoques periódicos para mantener el resultado.",
    tags: ["Clásicas", "Volumen", "Wispy"],
    image: extensionesPestanas,
    imageAlt: "Aplicación de máscara y cuidado de pestañas",
  },
  {
    id: "estilismo-integral",
    name: "Estilismo Integral: Corte, Peinado & Maquillaje",
    price: "Desde S/ 80",
    duration: "60 minutos",
    category: "Estilo Integral",
    shortCategory: "Estilismo",
    badgeTone: "primary",
    skinType: "Cortes, peinados, maquillaje y uñas",
    summary:
      "Asesoría de imagen y estilismo para tu día a día o eventos: corte, peinado, maquillaje social, manicure y pedicure.",
    description:
      "Un servicio integral para complementar tu look con cortes, peinados, maquillaje social o profesional, manicure y pedicure. Se coordina según el evento, el tiempo y el estilo que buscas.",
    tags: ["Cortes", "Maquillaje", "Manicure"],
    image: estilismoIntegral,
    imageAlt: "Maquillaje profesional aplicado por una estilista",
  },
];

export const evaluationOption: BookingOption = {
  id: "evaluacion-integral",
  name: "Evaluación Integral (Cosmiatría & Estilismo)",
};

export const bookingOptions: BookingOption[] = [
  evaluationOption,
  ...services.map(({ id, name, price }) => ({ id, name, price })),
];
