const categories = [
  'Todos', 'Panquecas', 'Sandwiches', 'Snack y saludable', 'Acai bowl',
  'Michell parfait', 'Bowl', 'Ensaladas', 'Fresas con crema', 'Tizanas',
  'Jugos Básicos', 'Jugos duplicados', 'Limonadas', 'Smoothies', 'Especiales',
  'Cafés', 'Infusiones', 'Detox', 'Mojitos', 'Aromaticas', 'Frutas'
];

const categoryColors = {
  'Panquecas': '#f1bf73', 'Smoothies': '#e9abb7', 'Sandwiches': '#d9b783',
  'Snack y saludable': '#d4dd87', 'Acai bowl': '#c1a8d8', 'Michell parfait': '#efb2b1',
  'Bowl': '#e5d66c', 'Ensaladas': '#bdd989', 'Fresas con crema': '#efa4a6',
  'Tizanas': '#f2c662', 'Jugos Básicos': '#e9a86d', 'Jugos duplicados': '#eea3a7',
  'Limonadas': '#e9dc72', 'Especiales': '#b9d084', 'Cafés': '#c9a37e', 'Infusiones': '#c4a8cf',
  'Detox': '#a9d39e', 'Mojitos': '#f1bf73', 'Aromaticas': '#a9d39e', 'Frutas': '#d2df80'
};

// Arreglo central de productos (Modificable directamente aquí)
let products = [
  {
    "id": 1794169320914,
    "name": "Jugo de Mora",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 4.5,
    "image": "image/Jmora.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169343332,
    "name": "Jugo de Piña",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "image/Jpiña.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169379331,
    "name": "Jugo de Parchita",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 4.5,
    "image": "image/Jparchita.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169410250,
    "name": "Jugo de Guanabana",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 4.5,
    "image": "image/Jguanabana.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169434754,
    "name": "Jugo de Mango",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3.5,
    "image": "image/Jmango.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169501753,
    "name": "Jugo de Papaya",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "image/Jpapaya.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169539536,
    "name": "Jugo de Melon",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "image/Jmelon.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169571720,
    "name": "Jugo de Patilla",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "image/Jpatilla.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169602801,
    "name": "Jugo de Guayaba",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 2.5,
    "image": "image/Jguayaba.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794169766631,
    "name": "Jugo de Naranja Liquido",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "image/Jnaranja.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": [],
    "sizes": [
      { "name": "250ml", "price": 0 },
      { "name": "330ml", "price": 1 },
      { "name": "500ml", "price": 3 }
    ]
  },
  {
    "id": 1794169929279,
    "name": "Jugo de Naranja Concentrado",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "image/Jnaranja.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": [],
    "sizes": [
      { "name": "250ml", "price": 0 },
      { "name": "330ml", "price": 2 },
      { "name": "500ml", "price": 3 }
    ]
  },
  {
    "id": 1794180429636,
    "name": "Jugo de Kiwi",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 6,
    "image": "image/Jkiwi.jpg",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
  "id": 1794422660475,
  "name": "Jugo de Melocoton",
  "category": "Jugos Básicos",
  "desc": "",
  "price": 4.5,
  "image": "image/Jmelocoton.jpg",
  "isWeight": false,
  "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
  "removals": [
    "Sin azucar"
  ],
  "sizes": []
  },
  {
  "id": 1794422733058,
  "name": "Jugo de Fresa",
  "category": "Jugos Básicos",
  "desc": "",
  "price": 4.5,
  "image": "image/Jfresa.jpg",
  "isWeight": false,
 "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
  "removals": [
    "Sin azucar"
  ],
  "sizes": []
  },
  {
    "id": 1794180586544,
    "name": "Duplicado Fresa Parchita",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 4,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794180633243,
    "name": "Duplicado Fresa Mora",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 4.5,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794180765955,
    "name": "Duplicado Parchita Mora",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 4.5,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794180797592,
    "name": "Duplicado Papaya Naranja",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794180832058,
    "name": "Duplicado Papaya Limon",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794180881478,
    "name": "Duplicado Papaya Parchita",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794180923906,
    "name": "Duplicado Mango Parchita",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794180992669,
    "name": "Duplicado Piña Parchita",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      { "name": "Leche", "price": 1 },
      { "name": "Yogurt", "price": 1.5 },
      { "name": "Vainilla", "price": 0.2 }
    ],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181032861,
    "name": "Don verde",
    "category": "Detox",
    "desc": "",
    "price": 3,
    "image": "image/Dverde.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181138153,
    "name": "Ni Tan Verde",
    "category": "Detox",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181240457,
    "name": "Tio Tomate",
    "category": "Detox",
    "desc": "",
    "price": 3.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181269845,
    "name": "Media Naranja",
    "category": "Detox",
    "desc": "",
    "price": 4,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181310320,
    "name": "3 en 1 Licuado",
    "category": "Detox",
    "desc": "",
    "price": 3.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181349122,
    "name": "3 en 1 Extractor",
    "category": "Detox",
    "desc": "",
    "price": 5.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181377047,
    "name": "Anana",
    "category": "Detox",
    "desc": "",
    "price": 4,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181417022,
    "name": "Vida Verde",
    "category": "Detox",
    "desc": "",
    "price": 5.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181793463,
    "name": "Naranja Fresh",
    "category": "Detox",
    "desc": "",
    "price": 5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181832259,
    "name": "Ginger Shot",
    "category": "Detox",
    "desc": "",
    "price": 4,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794181863146,
    "name": "Zanahoria 5x5",
    "category": "Detox",
    "desc": "",
    "price": 5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794184930933,
    "name": "Frutos Rojos",
    "category": "Smoothies",
    "desc": "",
    "price": 6,
    "image": "image/Frutosr.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794184961956,
    "name": "Dejavu",
    "category": "Smoothies",
    "desc": "",
    "price": 6,
    "image": "image/Dejavu.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185015126,
    "name": "Caribeño",
    "category": "Smoothies",
    "desc": "",
    "price": 6,
    "image": "image/Caribeño.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185104510,
    "name": "Crema real",
    "category": "Smoothies",
    "desc": "",
    "price": 6,
    "image": "image/Cremar.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185216124,
    "name": "Mr. Banana",
    "category": "Especiales",
    "desc": "",
    "price": 5.5,
    "image": "image/Mrbanana.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185275160,
    "name": "Avena Mix",
    "category": "Especiales",
    "desc": "",
    "price": 6.5,
    "image": "image/Avenamix.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185315607,
    "name": "Choco Ice",
    "category": "Especiales",
    "desc": "",
    "price": 6,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185372597,
    "name": "Coquitos",
    "category": "Especiales",
    "desc": "",
    "price": 7,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185531984,
    "name": "Limonadas Tradicional",
    "category": "Limonadas",
    "desc": "",
    "price": 2.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185563205,
    "name": "Limonada de Hierbabuena",
    "category": "Limonadas",
    "desc": "",
    "price": 2.5,
    "image": "image/Limonadah.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185613438,
    "name": "Limonada de Parchita",
    "category": "Limonadas",
    "desc": "",
    "price": 4,
    "image": "image/Limonadap.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185652710,
    "name": "Limonada Especial",
    "category": "Limonadas",
    "desc": "",
    "price": 4.5,
    "image": "image/Limonadas.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185943120,
    "name": "LImonada Kiwi Limon",
    "category": "Limonadas",
    "desc": "",
    "price": 7,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794185978215,
    "name": "Limonada de Coco",
    "category": "Limonadas",
    "desc": "",
    "price": 4.5,
    "image": "image/Limonadac.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794186059071,
    "name": "Infusion Dorada",
    "category": "Infusiones",
    "desc": "",
    "price": 3,
    "image": "image/Infusiond.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": [
      { "name": "Caliente", "price": 0 },
      { "name": "Fria", "price": 0 }
    ]
  },
  {
    "id": 1794186146029,
    "name": "Infusion Oriental",
    "category": "Infusiones",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": [
      { "name": "Caliente", "price": 0 },
      { "name": "Fria", "price": 0 }
    ]
  },
  {
    "id": 1794186200176,
    "name": "Infusion Mia",
    "category": "Infusiones",
    "desc": "",
    "price": 3,
    "image": "image/Infusionm.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": [
      { "name": "Caliente", "price": 0 },
      { "name": "Fria", "price": 1.5 }
    ]
  },
  {
    "id": 1794187964115,
    "name": "Mojito Especial",
    "category": "Mojitos",
    "desc": "",
    "price": 4,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794188065184,
    "name": "Mojito Tradicional",
    "category": "Mojitos",
    "desc": "",
    "price": 4,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794188238641,
    "name": "Mojito de Parchita",
    "category": "Mojitos",
    "desc": "",
    "price": 4,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794332259408,
    "name": "Michell Parfait",
    "category": "Michell parfait",
    "desc": "",
    "price": 10,
    "image": "image/Parfait.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": [
      { "name": "10oz", "price": 0 },
      { "name": "14oz", "price": 2 }
    ]
  },
  {
    "id": 1794332304946,
    "name": "Tizana",
    "category": "Tizanas",
    "desc": "",
    "price": 6.5,
    "image": "image/Tizana.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": [
      { "name": "10oz", "price": 0 },
      { "name": "14oz", "price": 0.5 }
    ]
  },
  {
    "id": 1794332347609,
    "name": "Fresas con Crema Ferrero y Nutella",
    "category": "Fresas con crema",
    "desc": "",
    "price": 10,
    "image": "image/Fresasn.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "10oz", "price": 0 },
      { "name": "14oz", "price": 2 }
    ]
  },
  {
    "id": 1794332384146,
    "name": "Fresas con Crema Kiwi limon",
    "category": "Fresas con crema",
    "desc": "",
    "price": 8,
    "image": "image/Fresask.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "10oz", "price": 0 },
      { "name": "14oz", "price": 2 }
    ]
  },
  {
    "id": 1794332425268,
    "name": "Fresas con Crema",
    "category": "Fresas con crema",
    "desc": "",
    "price": 7,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "10oz", "price": 0 },
      { "name": "14oz", "price": 1 }
    ]
  },
  {
    "id": 1794332475696,
    "name": "Tabla de Frutas Basica",
    "category": "Ensaladas",
    "desc": "",
    "price": 12,
    "image": "image/Tablab.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "Miel", "price": 0 },
      { "name": "Nutella", "price": 1 }
    ]
  },
  {
    "id": 1794332501080,
    "name": "Tabla de Frutas Premium",
    "category": "Ensaladas",
    "desc": "",
    "price": 14,
    "image": "image/Tablap.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "Miel", "price": 0 },
      { "name": "Nutella", "price": 4 }
    ]
  },
  {
    "id": 1794332527993,
    "name": "Cafe Espresso",
    "category": "Cafés",
    "desc": "",
    "price": 1.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794332540680,
    "name": "Cafe Americano",
    "category": "Cafés",
    "desc": "",
    "price": 1.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794332554977,
    "name": "Cafe Guayoyo",
    "category": "Cafés",
    "desc": "",
    "price": 1.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794332585331,
    "name": "Cafe Capucciono",
    "category": "Cafés",
    "desc": "",
    "price": 3,
    "image": "image/Capucciono.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794332598009,
    "name": "Cafe Latte",
    "category": "Cafés",
    "desc": "",
    "price": 2.99,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794332615344,
    "name": "Cafe Latte Vainilla",
    "category": "Cafés",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794332639696,
    "name": "Cafe Macchiato",
    "category": "Cafés",
    "desc": "",
    "price": 2.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794332660896,
    "name": "Chocolate Caliente",
    "category": "Cafés",
    "desc": "",
    "price": 3.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794332704987,
    "name": "Ice Coffe Latte",
    "category": "Cafés",
    "desc": "",
    "price": 6,
    "image": "image/Icelatte.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794332737526,
    "name": "Ensalada de Frutas",
    "category": "Ensaladas",
    "desc": "",
    "price": 10,
    "image": "image/Ensalada.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "Pequeña", "price": 0 },
      { "name": "Grande", "price": 2 }
    ]
  },
  {
    "id": 1794332776408,
    "name": "Ensalada Domo",
    "category": "Ensaladas",
    "desc": "",
    "price": 5,
    "image": "image/Ensaladad.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "10oz", "price": 0 },
      { "name": "14oz", "price": 2 }
    ]
  },
  {
    "id": 1794332800575,
    "name": "Cafe Latte Cinnamon",
    "category": "Cafés",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794332819375,
    "name": "Ice Coffe Caramel",
    "category": "Cafés",
    "desc": "",
    "price": 6,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794332899646,
    "name": "Ice Coffe Chocolate",
    "category": "Cafés",
    "desc": "",
    "price": 6,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794332942061,
    "name": "Frapucciono Chocolate",
    "category": "Cafés",
    "desc": "",
    "price": 8,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794333083794,
    "name": "Frapucciono Caramelo",
    "category": "Cafés",
    "desc": "",
    "price": 8,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794333115357,
    "name": "Panquecas Basicas",
    "category": "Panquecas",
    "desc": "",
    "price": 7,
    "image": "image/Panquecasb.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794333143740,
    "name": "Panquecas de la Casa",
    "category": "Panquecas",
    "desc": "",
    "price": 10,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794333157220,
    "name": "Panquecas Americanas",
    "category": "Panquecas",
    "desc": "",
    "price": 8,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794333178109,
    "name": "Panquecas Basicas Fit",
    "category": "Panquecas",
    "desc": "",
    "price": 6,
    "image": "image/Panquecasb.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794333285285,
    "name": "Panquecas de la Casa Fit",
    "category": "Panquecas",
    "desc": "",
    "price": 7,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794333305915,
    "name": "Panquecas Americanas Fit",
    "category": "Panquecas",
    "desc": "",
    "price": 6,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794334231750,
    "name": "Omelette",
    "category": "Sandwiches",
    "desc": "",
    "price": 7,
    "image": "image/Omelette.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "Pan Blanco", "price": 0 },
      { "name": "Pan Integral", "price": 0 }
    ]
  },
  {
    "id": 1794334284174,
    "name": "Bowl de Yogurt",
    "category": "Bowl",
    "desc": "",
    "price": 12,
    "image": "image/Bowl.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "Reduccion de Parchita", "price": 0 },
      { "name": "Mermelada de Piña", "price": 0 }
    ]
  },
  {
    "id": 1794334305729,
    "name": "Acai Amazonas",
    "category": "Acai bowl",
    "desc": "",
    "price": 14,
    "image": "image/Amazonas.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin Azucar"],
    "sizes": []
  },
  {
    "id": 1794334330005,
    "name": "Acai Praia",
    "category": "Acai bowl",
    "desc": "",
    "price": 14,
    "image": "image/Praia.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794334360994,
    "name": "Acai Aracaju",
    "category": "Acai bowl",
    "desc": "",
    "price": 14,
    "image": "image/Aracaju.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794334378637,
    "name": "Acai Roraima",
    "category": "Acai bowl",
    "desc": "",
    "price": 15,
    "image": "image/Roraima.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794334389638,
    "name": "Acai Para",
    "category": "Acai bowl",
    "desc": "",
    "price": 14,
    "image": "image/Para.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794334439652,
    "name": "Sandwich Doble",
    "category": "Sandwiches",
    "desc": "",
    "price": 7,
    "image": "image/Sandwich.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "Pan Blanco", "price": 0 },
      { "name": "Pan Intengral", "price": 0 }
    ]
  },
  {
    "id": 1794334464468,
    "name": "Sandwich iberico",
    "category": "Sandwiches",
    "desc": "",
    "price": 13,
    "image": "image/Iberico.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794334522177,
    "name": "Desayuno Americano",
    "category": "Sandwiches",
    "desc": "",
    "price": 6,
    "image": "image/Damericano.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      { "name": "Pan Blanco", "price": 0 },
      { "name": "Pan Integral", "price": 0 }
    ]
  },
  {
    "id": 1794334549861,
    "name": "Coco Bambo",
    "category": "Especiales",
    "desc": "",
    "price": 7,
    "image": "image/Coquitos.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794334580597,
    "name": "Cafe Mocca",
    "category": "Cafés",
    "desc": "",
    "price": 4,
    "image": "image/Mocca.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794334615605,
    "name": "Duplicado Piña Patilla",
    "category": "Jugos duplicados",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794334650579,
    "name": "Croissant (Jamon y Queso)",
    "category": "Sandwiches",
    "desc": "",
    "price": 7,
    "image": "image/Croissant.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794334674331,
    "name": "Croissant (Chorizo Español y Queso)",
    "category": "Sandwiches",
    "desc": "",
    "price": 7,
    "image": "image/Croissant.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794334697827,
    "name": "Cafe Latte Caramelo",
    "category": "Cafés",
    "desc": "",
    "price": 4.5,
    "image": "image/Lattec.jpg",
    "isWeight": false,
    "addons": [],
    "removals": ["Sin azucar"],
    "sizes": []
  },
  {
    "id": 1794334735559,
    "name": "Desayuno Criollo",
    "category": "Sandwiches",
    "desc": "",
    "price": 7,
    "image": "image/Criollo.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  }
];

// Variables de estado del menú
let activeCategory = 'Todos';
let searchText = '';
let cart = [];
let currentDraft = null;
let delivery = 'pickup';
let paymentMethod = '';

const $ = (id) => document.getElementById(id);

function money(val) {
  return `$${Number(val || 0).toFixed(2)}`;
}

function escapeHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function initials(name) {
  return name ? name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : 'KL';
}

function showToast(msg) {
  let toast = $('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:#333; color:#fff; padding:10px 20px; border-radius:8px; z-index:9999; font-size:14px;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}

function productTotal(item) {
  let base = item.price;
  if (item.selectedSize) base += (item.selectedSize.price || 0);
  if (item.selectedAddons) {
    item.selectedAddons.forEach(a => base += (a.price || 0));
  }
  if (item.isWeight) {
    base *= (item.chosenWeight || 1);
  }
  return base;
}

function filteredProducts() {
  return products.filter((p) => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function renderCategories() {
  const container = $('categories-container') || document.querySelector('.categories') || $('categories') || $('category-rail');
  if (!container) return;
  container.innerHTML = categories.map((cat) => `
    <button type="button" class="category-chip ${activeCategory === cat ? 'active' : ''}" data-cat="${escapeHtml(cat)}">
      ${escapeHtml(cat)}
    </button>
  `).join('');

  container.querySelectorAll('[data-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderCategories();
      renderMenu();
    });
  });
}

function productCard(product, index) {
  return `
    <div class="product-card">
      <div class="product-art">
        ${product.image ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" onerror="this.style.display='none'">` : ''}
      </div>
      <div class="product-body">
        <h4 class="product-title">${escapeHtml(product.name)}</h4>
        <p class="product-desc">${escapeHtml(product.desc || '')}</p>
        <div class="product-foot">
          <span class="price">${money(product.price)}</span>
          <button class="add-button" type="button" data-add-product="${product.id}">Agregar</button>
        </div>
      </div>
    </div>
  `;
}

function renderMenu() {
  const container = $('menu-container');
  if (!container) return;

  const visible = filteredProducts();
  const groups = categories.slice(1).map((category) => ({
    category,
    items: visible.filter((product) => product.category === category)
  })).filter((group) => group.items.length);

  if (!groups.length) {
    container.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🔍</div><h3>No encontramos eso</h3><p>Prueba con otro nombre o vuelve a ver todo el menú.</p></div>';
    return;
  }

  container.innerHTML = groups.map((group) => `
    <section class="menu-section" id="cat-${escapeHtml(group.category)}">
      <div class="section-heading"><h3>${escapeHtml(group.category)}</h3><span>${group.items.length} opciones</span></div>
      <div class="product-grid">${group.items.map((product, index) => productCard(product, index)).join('')}</div>
    </section>
  `).join('');

  container.querySelectorAll('[data-add-product]').forEach((button) => {
    button.addEventListener('click', () => openCustomization(Number(button.dataset.addProduct)));
  });
}

function openCustomization(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  currentDraft = {
    product,
    size: product.sizes?.[0] || null,
    addons: [],
    removals: [],
    weight: '1.000',
    comment: ''
  };
  renderCustomization();
  openLayer('customization-modal');
}

function renderCustomization() {
  const draft = currentDraft;
  if (!draft) return;
  const product = draft.product;
  $('custom-title').textContent = product.name;
  $('custom-description').textContent = product.desc;
  const sections = [];

  if (product.isWeight) {
    sections.push(`<div class="option-group"><label class="option-label" for="draft-weight">Peso en kilogramos</label><input class="field" id="draft-weight" type="number" min=".001" step=".001" value="${draft.weight}"><p class="weight-help">El precio se calcula según el peso indicado.</p></div>`);
  }
  if (product.sizes?.length) {
    sections.push(`<div class="option-group"><span class="option-label">Elige el tamaño</span><div class="option-list">${product.sizes.map((size) => `
      <label class="option-label-card"><span><input type="radio" name="draft-size" value="${escapeHtml(size.name)}" ${draft.size?.name === size.name ? 'checked' : ''}>${escapeHtml(size.name)}</span><span class="option-price">${size.price ? `+${money(size.price)}` : 'incluido'}</span></label>
    `).join('')}</div></div>`);
  }
  if (product.addons?.length) {
    sections.push(`<div class="option-group"><span class="option-label">¿Algo más?</span><div class="option-list">${product.addons.map((addon) => `
      <label class="option-label-card"><span><input type="checkbox" data-draft-addon="${escapeHtml(addon.name)}" ${draft.addons.some((item) => item.name === addon.name) ? 'checked' : ''}>${escapeHtml(addon.name)}</span><span class="option-price">${addon.price ? `+${money(addon.price)}` : 'incluido'}</span></label>
    `).join('')}</div></div>`);
  }
  
  sections.push(`
    <div class="option-group">
      <label class="option-label" for="draft-comment">Notas especiales o detalles para la barra</label>
      <textarea class="textarea-field" id="draft-comment" placeholder="Ej: Poca azúcar, servido bien frío..." style="min-height: 60px;">${escapeHtml(draft.comment || '')}</textarea>
    </div>
  `);

  if (product.removals?.length) {
    sections.push(`<div class="option-group"><span class="option-label">Sin esto, por favor</span><div class="option-list">${product.removals.map((removal) => `
      <label class="option-label-card"><span><input type="checkbox" data-draft-removal="${escapeHtml(removal)}" ${draft.removals.includes(removal) ? 'checked' : ''}>${escapeHtml(removal)}</span></label>
    `).join('')}</div></div>`);
  }
  sections.push(`<div class="checkout-total"><span>Precio estimado</span><strong>${money(productTotal({ ...product, selectedSize: draft.size, selectedAddons: draft.addons, chosenWeight: Number(draft.weight) || 1 }))}</strong></div>`);
  $('customization-content').innerHTML = sections.join('');

  $('customization-content').querySelectorAll('input[name="draft-size"]').forEach((input) => input.addEventListener('change', () => {
    draft.size = product.sizes.find((size) => size.name === input.value) || null;
    renderCustomization();
  }));
  $('customization-content').querySelectorAll('[data-draft-addon]').forEach((input) => input.addEventListener('change', () => {
    const addon = product.addons.find((item) => item.name === input.dataset.draftAddon);
    draft.addons = input.checked ? [...draft.addons, addon] : draft.addons.filter((item) => item.name !== addon.name);
    renderCustomization();
  }));
  $('customization-content').querySelectorAll('[data-draft-removal]').forEach((input) => input.addEventListener('change', () => {
    draft.removals = input.checked ? [...draft.removals, input.dataset.draftRemoval] : draft.removals.filter((item) => item !== input.dataset.draftRemoval);
    renderCustomization();
  }));
  $('draft-weight')?.addEventListener('input', (event) => {
    draft.weight = event.target.value;
    renderCustomization();
  });
  $('draft-comment')?.addEventListener('input', (event) => {
    draft.comment = event.target.value;
  });
}

function confirmCustomization() {
  if (!currentDraft) return;
  if (currentDraft.product.sizes?.length && !currentDraft.size) {
    showToast('Elige un tamaño para continuar.');
    return;
  }
  if (currentDraft.product.isWeight && Number(currentDraft.weight) < .001) {
    showToast('Indica un peso válido en kilogramos.');
    return;
  }
  cart.push({
    ...currentDraft.product,
    cartId: `${currentDraft.product.id}-${Date.now()}`,
    selectedSize: currentDraft.size,
    selectedAddons: currentDraft.addons,
    selectedRemovals: currentDraft.removals,
    chosenWeight: Number(currentDraft.weight) || 1,
    comment: (currentDraft.comment || '').trim()
  });
  closeLayer('customization-modal');
  updateCart();
  showToast(`${currentDraft.product.name} está en tu pedido.`);
  currentDraft = null;
}

function updateCart() {
  const total = cart.reduce((sum, item) => sum + productTotal(item), 0);
  if ($('cart-count')) $('cart-count').textContent = cart.length;
  if ($('dock-count')) $('dock-count').textContent = cart.length;
  if ($('dock-total')) $('dock-total').textContent = money(total);
  if ($('checkout-total')) $('checkout-total').textContent = money(total);
  
  const cartDock = $('cart-dock');
  const checkoutPanel = $('checkout-panel');
  if (cartDock) cartDock.classList.toggle('hidden', !cart.length);
  if (checkoutPanel) checkoutPanel.classList.toggle('hidden', !cart.length);

  const cartItemsContainer = $('cart-items');
  if (!cartItemsContainer) return;

  if (!cart.length) {
    cartItemsContainer.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🛒</div><h3>Aquí empieza lo bueno</h3><p>Agrega un bowl, un jugo o ese antojo que te está llamando.</p></div>';
    return;
  }
  cartItemsContainer.innerHTML = cart.map((item) => {
    const details = [
      item.selectedSize?.name,
      item.selectedAddons?.length ? `Extra: ${item.selectedAddons.map((addon) => addon.name).join(', ')}` : '',
      item.selectedRemovals?.length ? item.selectedRemovals.join(', ') : '',
      item.isWeight ? `${Number(item.chosenWeight).toFixed(3)} kg` : '',
      item.comment ? `Nota: "${item.comment}"` : ''
    ].filter(Boolean).join(' · ') || 'Preparado tal como viene';
    return `<div class="cart-line">
      <div class="line-top"><span class="line-name">${escapeHtml(item.name)}</span><span class="line-price">${money(productTotal(item))}</span></div>
      <div class="line-detail">${escapeHtml(details)}</div>
      <div class="line-actions"><div class="qty-control"><button type="button" data-remove-cart="${item.cartId}">−</button><span>1</span><button type="button" data-duplicate-cart="${item.cartId}">+</button></div><button class="remove-button" type="button" data-remove-cart="${item.cartId}">Quitar</button></div>
    </div>`;
  }).join('');

  cartItemsContainer.querySelectorAll('[data-remove-cart]').forEach((button) => button.addEventListener('click', () => {
    cart = cart.filter((item) => item.cartId !== button.dataset.removeCart);
    updateCart();
  }));
  cartItemsContainer.querySelectorAll('[data-duplicate-cart]').forEach((button) => button.addEventListener('click', () => {
    const item = cart.find((entry) => entry.cartId === button.dataset.duplicateCart);
    if (item) cart.push({ ...item, cartId: `${item.cartId}-${Date.now()}` });
    updateCart();
  }));
}

function selectDelivery(type) {
  delivery = type;
  $('pickup-option')?.classList.toggle('selected', type === 'pickup');
  $('delivery-option')?.classList.toggle('selected', type === 'delivery');
  $('customer-address')?.classList.toggle('hidden', type !== 'delivery');
}

function sendOrder() {
  if (!cart.length) return;
  const name = $('customer-name')?.value.trim() || '';
  const cedula = $('customer-cedula')?.value.trim() || '';
  const phone = $('customer-phone')?.value.trim() || '';
  const address = $('customer-address')?.value.trim() || '';

  if (!name || !cedula || !phone || !paymentMethod || (delivery === 'delivery' && !address)) {
    showToast('Completa todos tus datos y el método de pago.');
    return;
  }
  const lines = cart.map((item, index) => {
    const details = [
      item.selectedSize?.name,
      item.selectedAddons?.length ? `extras: ${item.selectedAddons.map((addon) => addon.name).join(', ')}` : '',
      item.selectedRemovals?.length ? item.selectedRemovals.join(', ') : '',
      item.isWeight ? `${Number(item.chosenWeight).toFixed(3)} kg` : '',
      item.comment ? `nota: ${item.comment}` : ''
    ].filter(Boolean).join(' · ');
    return `${index + 1}. ${item.name}${details ? ` (${details})` : ''} — ${money(productTotal(item))}`;
  }).join('\n');
  const total = cart.reduce((sum, item) => sum + productTotal(item), 0);
  const message = `Hola Kiwi Limón, quiero hacer este pedido:\n\n${lines}\n\nTotal: ${money(total)}\nEntrega: ${delivery === 'pickup' ? 'Pick up' : 'Delivery'}\nPago: ${paymentMethod}\nNombre: ${name}\nCédula: ${cedula}\nTeléfono: ${phone}${delivery === 'delivery' ? `\nDirección: ${address}` : ''}`;
  window.open(`https://wa.me/584128731016?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  showToast('Pedido listo para enviar por WhatsApp.');
}

function openLayer(id) {
  $('backdrop')?.classList.remove('hidden');
  $(id)?.classList.remove('hidden');
}
function closeLayer(id) {
  $(id)?.classList.add('hidden');
  const anyOpen = ['cart-drawer', 'customization-modal', 'login-modal', 'product-modal', 'code-modal'].some((layer) => !$(layer)?.classList.contains('hidden'));
  if (!anyOpen) $('backdrop')?.classList.add('hidden');
}
function closeAllLayers() {
  ['cart-drawer', 'customization-modal', 'login-modal', 'product-modal', 'code-modal'].forEach((id) => $(id)?.classList.add('hidden'));
  $('backdrop')?.classList.add('hidden');
}

let isAdminSessionActive = false;

function showAdmin() {
  $('customer-view')?.classList.add('hidden');
  $('cart-dock')?.classList.add('hidden');
  $('admin-view')?.classList.remove('hidden');
  renderAdminTable();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showMenu() {
  $('admin-view')?.classList.add('hidden');
  $('customer-view')?.classList.remove('hidden');
  updateCart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderAdminTable() {
  if ($('admin-product-count')) $('admin-product-count').textContent = products.length;
  const tbody = $('admin-table-body');
  if (!tbody) return;
  tbody.innerHTML = products.map((product) => `
    <tr>
      <td><div class="table-product"><span class="table-thumb">${escapeHtml(initials(product.name))}</span><div><strong>${escapeHtml(product.name)}</strong><small>${product.isWeight ? 'Venta por kg' : 'Precio fijo'}</small></div></div></td>
      <td>${escapeHtml(product.category)}</td>
      <td>${money(product.price)}</td>
      <td><div class="table-actions"><button class="small-action" data-edit-product="${product.id}" type="button">✎</button></div></td>
    </tr>
  `).join('');
  tbody.querySelectorAll('[data-edit-product]').forEach((button) => button.addEventListener('click', () => openProductForm(Number(button.dataset.editProduct))));
}

function populateProductCategories() {
  const prodCatSelect = $('product-category');
  if (prodCatSelect) {
    prodCatSelect.innerHTML = categories.slice(1).map((category) => `<option>${escapeHtml(category)}</option>`).join('');
  }
}

function openProductForm(productId = 0) {
  const product = products.find((item) => item.id === productId);
  if ($('product-title')) $('product-title').textContent = product ? 'Editar producto' : 'Nuevo producto';
  if ($('product-id')) $('product-id').value = product?.id || '';
  if ($('product-name')) $('product-name').value = product?.name || '';
  if ($('product-category')) $('product-category').value = product?.category || 'Especiales';
  if ($('product-price')) $('product-price').value = product?.price ?? '';
  if ($('product-image')) $('product-image').value = product?.image || '';
  if ($('product-description')) $('product-description').value = product?.desc || '';
  if ($('product-weight')) $('product-weight').checked = Boolean(product?.isWeight);
  if ($('product-sizes')) $('product-sizes').value = (product?.sizes || []).map((s) => `${s.name}: ${s.price}`).join(', ');
  if ($('product-addons')) $('product-addons').value = (product?.addons || []).map((a) => `${a.name}: ${a.price}`).join(', ');
  if ($('product-removals')) $('product-removals').value = (product?.removals || []).join(', ');
  
  openLayer('product-modal');
}

function bindEvents() {
  $('search-input')?.addEventListener('input', (event) => { searchText = event.target.value; renderMenu(); });
  $('brand-home')?.addEventListener('click', () => { activeCategory = 'Todos'; searchText = ''; if ($('search-input')) $('search-input').value = ''; renderCategories(); renderMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  $('cart-button')?.addEventListener('click', () => openLayer('cart-drawer'));
  $('dock-button')?.addEventListener('click', () => openLayer('cart-drawer'));
  $('close-cart')?.addEventListener('click', () => closeLayer('cart-drawer'));
  $('backdrop')?.addEventListener('click', closeAllLayers);
  $('close-customization')?.addEventListener('click', () => closeLayer('customization-modal'));
  $('cancel-customization')?.addEventListener('click', () => closeLayer('customization-modal'));
  $('confirm-customization')?.addEventListener('click', confirmCustomization);
  $('pickup-option')?.addEventListener('click', () => selectDelivery('pickup'));
  $('delivery-option')?.addEventListener('click', () => selectDelivery('delivery'));
  
  const paymentButtons = document.querySelectorAll('#payment-options .payment-card');
  paymentButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      paymentButtons.forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      paymentMethod = btn.dataset.payment;
    });
  });

  $('send-order')?.addEventListener('click', sendOrder);
  $('admin-button')?.addEventListener('click', () => {
    if (isAdminSessionActive) showAdmin();
    else openLayer('login-modal');
  });
  $('close-login')?.addEventListener('click', () => closeLayer('login-modal'));
  $('cancel-login')?.addEventListener('click', () => closeLayer('login-modal'));
  
  $('login-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = ($('login-user')?.value || '').trim().toUpperCase();
    const passInput = ($('login-password')?.value || '').trim();

    const fallbackOk = (userInput === 'RP' || userInput === 'ADMIN') && passInput === '3008';

    if (fallbackOk) {
      isAdminSessionActive = true;
      $('login-error')?.classList.add('hidden');
      if ($('login-user')) $('login-user').value = '';
      if ($('login-password')) $('login-password').value = '';
      closeLayer('login-modal');
      showAdmin();
    } else {
      $('login-error')?.classList.remove('hidden');
    }
  });

  ['back-to-menu', 'return-menu', 'admin-brand-home'].forEach((id) => $(id)?.addEventListener('click', showMenu));
  $('logout-button')?.addEventListener('click', () => { isAdminSessionActive = false; showMenu(); });
  $('new-product')?.addEventListener('click', () => openProductForm());
  $('close-product')?.addEventListener('click', () => closeLayer('product-modal'));
  $('cancel-product')?.addEventListener('click', () => closeLayer('product-modal'));

  $('product-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = Number($('product-id').value);
    
    const sizesRaw = $('product-sizes').value.trim();
    let parsedSizes = sizesRaw ? sizesRaw.split(',').map((part) => {
      const [name, priceStr] = part.split(':').map((str) => str.trim());
      return name ? { name, price: Number(priceStr) || 0 } : null;
    }).filter(Boolean) : [];

    const addonsRaw = $('product-addons').value.trim();
    let parsedAddons = addonsRaw ? addonsRaw.split(',').map((part) => {
      const [name, priceStr] = part.split(':').map((str) => str.trim());
      return name ? { name, price: Number(priceStr) || 0 } : null;
    }).filter(Boolean) : [];

    const removalsRaw = $('product-removals').value.trim();
    let parsedRemovals = removalsRaw ? removalsRaw.split(',').map((str) => str.trim()).filter(Boolean) : [];

    const next = {
      id: id || Date.now(),
      name: $('product-name').value.trim(),
      category: $('product-category').value,
      desc: $('product-description').value.trim(),
      price: Number($('product-price').value),
      image: $('product-image').value.trim(),
      isWeight: $('product-weight').checked,
      addons: parsedAddons,
      removals: parsedRemovals,
      sizes: parsedSizes
    };

    if (!next.name || !Number.isFinite(next.price) || next.price < 0) {
      showToast('Agrega un nombre y precio válidos.');
      return;
    }

    // Generar el código JSON exacto para copiar y pegar en el script
    const jsonCode = JSON.stringify(next, null, 2);
    
    // Mostrar cajón de código generado
    let codeBox = $('code-box-output');
    if (!codeBox) {
      const modalBody = document.querySelector('#product-modal .modal-content') || document.querySelector('#product-modal');
      const boxContainer = document.createElement('div');
      boxContainer.style.cssText = 'margin-top: 15px; padding: 12px; background: #f4efdd; border-radius: 12px; border: 1px solid #d2d79f;';
      boxContainer.innerHTML = `
        <label class="option-label" style="margin-bottom:6px;">Copia este código y pégalo en tu <code>script.js</code>:</label>
        <textarea id="code-box-output" class="textarea-field" readonly style="font-family:monospace; font-size:11px; height:110px; background:#fff;"></textarea>
        <button type="button" id="copy-code-btn" class="secondary-button" style="width:100%; margin-top:8px;">Copiar código al portapapeles</button>
      `;
      modalBody.appendChild(boxContainer);
      
      $('copy-code-btn').addEventListener('click', () => {
        const ta = $('code-box-output');
        ta.select();
        document.execCommand('copy');
        showToast('¡Código copiado al portapapeles!');
      });
      codeBox = $('code-box-output');
    }
    codeBox.value = jsonCode;
    showToast('¡Objeto generado con éxito en el cajón inferior!');
  });
}

function init() {
  populateProductCategories();
  renderCategories();
  renderMenu();
  updateCart();
  bindEvents();
}

init();
