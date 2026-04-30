import type { Product, Shop, Review } from '@/types'

export const PRODUCTS: Product[] = [
  { id: 1, name: "Tabouret industriel", price: 75, category: "Mobilier", artisan: "Atelier KUMO", desc: "Tabouret en métal et bois recyclé, finition mate.", colorBg: "#3a3530" },
  { id: 2, name: "Étagère murale", price: 45, category: "Mobilier", artisan: "Atelier F2", desc: "Étagère en chêne, finitions huilées.", colorBg: "#c8b89a" },
  { id: 3, name: "Canapé 2 places", price: 650, category: "Mobilier", artisan: "Art Du Feu", desc: "Canapé tissu lin, structure bois massif.", colorBg: "#d4c4a8" },
  { id: 4, name: "Vase en céramique", price: 42, category: "Décoration", artisan: "Azimu", desc: "Vase fait main, émail bleu profond.", colorBg: "#3d5a7a" },
  { id: 5, name: "Lampe de chevet", price: 89, category: "Luminaire", artisan: "Kapkréa", desc: "Pied en bois tourné, abat-jour lin.", colorBg: "#e8dcc4" },
  { id: 6, name: "Table basse marbre", price: 320, category: "Mobilier", artisan: "Atelier F2", desc: "Plateau marbre, piétement métal noir.", colorBg: "#bfb5a8" },
  { id: 7, name: "Bibliothèque modulable", price: 480, category: "Mobilier", artisan: "La Boutique", desc: "Modulable, chêne massif.", colorBg: "#9c8b73" },
  { id: 8, name: "Bureau scandinave", price: 295, category: "Mobilier", artisan: "Atelier KUMO", desc: "Lignes pures, tiroir intégré.", colorBg: "#d8c9b0" },
  { id: 9, name: "Plaid en laine", price: 65, category: "Textile", artisan: "Kapkréa", desc: "Laine mérinos, motifs ethniques.", colorBg: "#c19a6b" },
  { id: 10, name: "Miroir rond", price: 120, category: "Décoration", artisan: "Azimu", desc: "Cadre en rotin tressé.", colorBg: "#b89968" },
  { id: 11, name: "Suspension osier", price: 145, category: "Luminaire", artisan: "Atelier KUMO", desc: "Suspension tressée artisanalement.", colorBg: "#a68856" },
  { id: 12, name: "Coussin lin", price: 28, category: "Textile", artisan: "Art Du Feu", desc: "Lin lavé naturel, finitions soignées.", colorBg: "#dcd0bc" },
]

export const SHOPS: Shop[] = [
  {
    id: "kumo",
    name: "Atelier KUMO",
    tag: "Papier & poésie",
    city: "Lille",
    desc: "Objets décoratifs en papier, mobiles poétiques et créations douces au style japonais. Un univers délicat qui invite à la contemplation.",
    longDesc: "Fondé en 2019, l'Atelier KUMO explore la beauté du papier washi et des matériaux nobles. Chaque pièce est pliée, tressée, façonnée à la main dans un esprit d'épure et de calme. Les créations habillent les intérieurs comme des nuages — légers, présents, apaisants.",
    productCount: 24,
    founded: 2019,
    colorAccent: "#d4a574",
  },
  {
    id: "artdufeu",
    name: "Art Du Feu",
    tag: "Cheminées & poêles",
    city: "Bordeaux",
    desc: "Cheminées et poêles contemporains sur mesure, pensés comme de véritables pièces réalisées par des artisans et designers passionnés.",
    longDesc: "Art Du Feu réinvente le foyer domestique. L'atelier conçoit des poêles en acier patiné et fonte recyclée, alliant performance thermique et présence sculpturale dans l'espace.",
    productCount: 18,
    founded: 2012,
    colorAccent: "#b8543a",
  },
  {
    id: "kapkrea",
    name: "Kapkréa",
    tag: "Maroquinerie",
    city: "Lille",
    desc: "Sacs et accessoires en cuir faits main à Lille, aux couleurs vibrantes et lignes modernes. Une maroquinerie locale et engagée.",
    longDesc: "Kapkréa travaille des cuirs tannés végétaux dans son atelier de la Vieille Ville. Couleurs vives, coutures sellier, ergonomie repensée — les sacs vieillissent avec leur propriétaire.",
    productCount: 32,
    founded: 2017,
    colorAccent: "#c1503a",
  },
  {
    id: "laboutique",
    name: "La Boutique",
    tag: "Concept store",
    city: "Lille",
    desc: "Une vitrine de créateurs lillois où chaque objet est unique : déco, accessoires, illustrations. L'artisanat local dans toute sa diversité.",
    longDesc: "La Boutique réunit plus de 40 créateurs régionaux dans un espace lumineux. Curation pointue, rotation saisonnière des pièces, et un café au fond pour prendre le temps.",
    productCount: 156,
    founded: 2015,
    colorAccent: "#3a6b7a",
  },
  {
    id: "azimu",
    name: "Azimu",
    tag: "Céramique",
    city: "Lille",
    desc: "Atelier lillois de céramiques originales et colorées. Des pièces uniques réalisées artisanalement qui apportent une touche d'authenticité.",
    longDesc: "Émaux développés en interne, formes inspirées des poteries minoennes revisitées. Chaque vase, bol, théière passe par les mains du même duo de céramistes.",
    productCount: 48,
    founded: 2020,
    colorAccent: "#5a7a8c",
  },
  {
    id: "atelierf2",
    name: "Atelier F2",
    tag: "Mobilier sur mesure",
    city: "Roubaix",
    desc: "Création de mobilier sur mesure en bois massif. Design épuré, finitions soignées — des meubles qui racontent une histoire.",
    longDesc: "Atelier F2 sélectionne des bois français issus de forêts gérées durablement. Le bureau dessine, l'atelier façonne. Chaque pièce porte la signature de la main qui l'a faite.",
    productCount: 28,
    founded: 2014,
    colorAccent: "#7a6248",
  },
]

export const CATEGORIES = ["Tous", "Mobilier", "Décoration", "Luminaire", "Textile"]

export const REVIEWS: Review[] = [
  { name: "Jean-Michel Lemoine", rating: 5, text: "Très bon site, tout est bien pensé. Livraison rapide et les objets artisanaux sont uniques." },
  { name: "Sophie Bernard", rating: 5, text: "Ravie de mes achats. L'artisan local m'a même appelée pour confirmer l'horaire de livraison." },
  { name: "Karim Aissaoui", rating: 5, text: "Une vraie alternative au mobilier industriel. Les pièces ont une âme." },
  { name: "Léa Marchand", rating: 4, text: "Beau catalogue, livraison soignée par des transporteurs sympas. Je recommande." },
]
