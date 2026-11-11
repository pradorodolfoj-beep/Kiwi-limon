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

const defaultProducts = [
  {
    "id": 1794169320914,
    "name": "Jugo de Mora",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 4.5,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169343332,
    "name": "Jugo de Piña",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169379331,
    "name": "Jugo de Parchita",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 4.5,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169410250,
    "name": "Jugo de Guanabana",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 4.5,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169434754,
    "name": "Jugo de Mango",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3.5,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169539536,
    "name": "Jugo de Melon",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169571720,
    "name": "Jugo de Patilla",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169602801,
    "name": "Jugo de Guayaba",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 2.5,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794169766631,
    "name": "Jugo de Naranja Liquido",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [],
    "sizes": [
      {
        "name": "250ml",
        "price": 0
      },
      {
        "name": "330ml",
        "price": 1
      },
      {
        "name": "500ml",
        "price": 3
      }
    ]
  },
  {
    "id": 1794169929279,
    "name": "Jugo de Naranja Concentrado",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 3,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [],
    "sizes": [
      {
        "name": "250ml",
        "price": 0
      },
      {
        "name": "330ml",
        "price": 2
      },
      {
        "name": "500ml",
        "price": 3
      }
    ]
  },
  {
    "id": 1794180429636,
    "name": "Jugo de Kiwi",
    "category": "Jugos Básicos",
    "desc": "",
    "price": 6,
    "image": "",
    "isWeight": false,
    "addons": [
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Leche",
        "price": 1
      },
      {
        "name": "Yogurt",
        "price": 1.5
      },
      {
        "name": "Vainilla",
        "price": 0.2
      }
    ],
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794185531984,
    "name": "Limonadas Tradicional",
    "category": "Limonadas",
    "desc": "image/.jpg",
    "price": 2.5,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794185563205,
    "name": "Limonada de Hierbabuena",
    "category": "Especiales",
    "desc": "",
    "price": 2.5,
    "image": "image/limonadah.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794185613438,
    "name": "Limonada de Parchita",
    "category": "Limonadas",
    "desc": "",
    "price": 4,
    "image": "image/Limonadasp.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794185943120,
    "name": "LImonada Kiwi Limon",
    "category": "Limonadas",
    "desc": "",
    "price": 7,
    "image": "image/.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": [
      {
        "name": "Caliente",
        "price": 0
      },
      {
        "name": "Fria",
        "price": 0
      }
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": [
      {
        "name": "Caliente",
        "price": 0
      },
      {
        "name": "Fria",
        "price": 0
      }
    ]
  },
  {
    "id": 1794186200176,
    "name": "Infusion Mia",
    "category": "Infusiones",
    "desc": "",
    "price": 3,
    "image": "image/infusion.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [
      "Sin azucar"
    ],
    "sizes": [
      {
        "name": "Caliente",
        "price": 0
      },
      {
        "name": "Fria",
        "price": 1.5
      }
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": [
      {
        "name": "10oz",
        "price": 0
      },
      {
        "name": "14oz",
        "price": 2
      }
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": [
      {
        "name": "10oz",
        "price": 0
      },
      {
        "name": "14oz",
        "price": 0.5
      }
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
      {
        "name": "10oz",
        "price": 0
      },
      {
        "name": "14oz",
        "price": 2
      }
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
      {
        "name": "10oz",
        "price": 0
      },
      {
        "name": "14oz",
        "price": 2
      }
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
      {
        "name": "10oz",
        "price": 0
      },
      {
        "name": "14oz",
        "price": 1
      }
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
      {
        "name": "Miel",
        "price": 0
      },
      {
        "name": "Nutella",
        "price": 1
      }
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
      {
        "name": "Miel",
        "price": 0
      },
      {
        "name": "Nutella",
        "price": 4
      }
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794332598009,
    "name": "Cafe Latte",
    "category": "Cafés",
    "desc": "image/.jpg",
    "price": 2.99,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794332660896,
    "name": "Chocolate Caliente",
    "category": "Cafés",
    "desc": "",
    "price": 3.5,
    "image": "image/.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [
      "Sin azucar"
    ],
    "sizes": []
  },
  {
    "id": 1794332704987,
    "name": "Ice Coffe Latte",
    "category": "Cafés",
    "desc": "image/Icelatte.jpg",
    "price": 6,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794332737526,
    "name": "Ensalada de Frutas",
    "category": "Ensaladas",
    "desc": "image/Ensalada.jpg",
    "price": 10,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      {
        "name": "Pequeña",
        "price": 0
      },
      {
        "name": "Grande",
        "price": 2
      }
    ]
  },
  {
    "id": 1794332776408,
    "name": "Ensalada Domo",
    "category": "Ensaladas",
    "desc": "",
    "price": 5,
    "image": "image/Ensaldad.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      {
        "name": "10oz",
        "price": 0
      },
      {
        "name": "14oz",
        "price": 2
      }
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
    "removals": [
      "Sin azucar"
    ],
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
    "image": "image/.jpg",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": []
  },
  {
    "id": 1794334231750,
    "name": "Omelette",
    "category": "Sandwiches",
    "desc": "image/Omelette.jpg",
    "price": 7,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      {
        "name": "Pan Blanco",
        "price": 0
      },
      {
        "name": "Pan Integral",
        "price": 0
      }
    ]
  },
  {
    "id": 1794334284174,
    "name": "Bowl de Yogurt",
    "category": "Bowl",
    "desc": "image/Bowl.jpg",
    "price": 12,
    "image": "",
    "isWeight": false,
    "addons": [],
    "removals": [],
    "sizes": [
      {
        "name": "Reduccion de Parchita",
        "price": 0
      },
      {
        "name": "Mermelada de Piña",
        "price": 0
      }
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
    "removals": [
      "Sin Azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
      {
        "name": "Pan Blanco",
        "price": 0
      },
      {
        "name": "Pan Intengral",
        "price": 0
      }
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
      {
        "name": "Pan Blanco",
        "price": 0
      },
      {
        "name": "Pan Integral",
        "price": 0
      }
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
    "removals": [
      "Sin azucar"
    ],
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
const $ = (id) => document.getElementById(id);
const money = (value) => `$${Number(value || 0).toFixed(2)}`;
const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
const initials = (name) => name.split(' ').slice(0, 2).map((word) => word[0]).join('').toUpperCase();

const productTotal = (item) => {
  const weightTotal = item.isWeight ? Number(item.chosenWeight || 1) : 1;
  const sizeTotal = item.selectedSize ? Number(item.selectedSize.price || 0) : 0;
  const addonTotal = (item.selectedAddons || []).reduce((total, addon) => total + Number(addon.price || 0), 0);
  return Number(item.price || 0) * weightTotal + sizeTotal + addonTotal;
};

let products = structuredClone(defaultProducts);
let cart = [];
let activeCategory = 'Todos';
let searchText = '';
let currentDraft = null;
let delivery = 'pickup';
let paymentMethod = 'Pago Móvil';
let toastTimer;

function showToast(message) {
  $('toast').textContent = message;
  $('toast').classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.add('hidden'), 2800);
}

function renderCategories() {
  $('category-rail').innerHTML = categories.map((category) => `
    <button class="category-chip ${activeCategory === category ? 'active' : ''}" data-category="${escapeHtml(category)}" type="button">${escapeHtml(category)}</button>
  `).join('');
  $('category-rail').querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderMenu();
      renderCategories();
    });
  });
}

function filteredProducts() {
  const query = searchText.toLowerCase().trim();
  return products.filter((product) => {
    const categoryMatch = activeCategory === 'Todos' || product.category === activeCategory;
    const text = `${product.name} ${product.desc} ${product.category}`.toLowerCase();
    return categoryMatch && text.includes(query);
  });
}

function productCard(product, index) {
  const color = categoryColors[product.category] || '#dbe6a0';
  const tag = product.isWeight ? 'POR PESO' : product.name === 'Acai Amazonas' ? 'FAVORITO' : '';
  return `
    <article class="product-card" style="animation-delay:${Math.min(index * 45, 240)}ms">
      <div class="product-art" style="background:${color}">
        <span class="art-fallback">${escapeHtml(initials(product.name))}</span>
        ${product.image ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" onerror="this.remove()">` : ''}
        ${tag ? `<span class="product-tag">${tag}</span>` : ''}
      </div>
      <div class="product-body">
        <h4 class="product-title">${escapeHtml(product.name)}</h4>
        <p class="product-desc">${escapeHtml(product.desc)}</p>
        <div class="product-foot">
          <span class="price">${money(product.price)}${product.isWeight ? '<small> / kg</small>' : ''}</span>
          <button class="add-button" data-add-product="${product.id}" type="button">+ Agregar</button>
        </div>
      </div>
    </article>
  `;
}

function renderMenu() {
  const visible = filteredProducts();
  const groups = categories.slice(1).map((category) => ({
    category,
    items: visible.filter((product) => product.category === category)
  })).filter((group) => group.items.length);

  if (!groups.length) {
    $('menu-container').innerHTML = '<div class="empty-cart"><div class="empty-cart-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><h3>No encontramos eso</h3><p>Prueba con otro nombre o vuelve a ver todo el menú.</p></div>';
    return;
  }

  $('menu-container').innerHTML = groups.map((group) => `
    <section class="menu-section" id="cat-${escapeHtml(group.category)}">
      <div class="section-heading"><h3>${escapeHtml(group.category)}</h3><span>${group.items.length} opciones</span></div>
      <div class="product-grid">${group.items.map((product, index) => productCard(product, index)).join('')}</div>
    </section>
  `).join('');

  $('menu-container').querySelectorAll('[data-add-product]').forEach((button) => {
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
      <textarea class="textarea-field" id="draft-comment" placeholder="Ej: Poca azúcar, servido bien frío, cambiar una fruta..." style="min-height: 60px;">${escapeHtml(draft.comment || '')}</textarea>
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
    const weightInput = $('draft-weight');
    weightInput?.focus();
    weightInput?.setSelectionRange(weightInput.value.length, weightInput.value.length);
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
  $('cart-count').textContent = cart.length;
  $('dock-count').textContent = cart.length;
  $('dock-total').textContent = money(total);
  $('checkout-total').textContent = money(total);
  $('cart-dock').classList.toggle('hidden', !cart.length);
  $('checkout-panel').classList.toggle('hidden', !cart.length);

  if (!cart.length) {
    $('cart-items').innerHTML = '<div class="empty-cart"><div class="empty-cart-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div><h3>Aquí empieza lo bueno</h3><p>Agrega un bowl, un jugo o ese antojo que te está llamando.</p></div>';
    return;
  }
  $('cart-items').innerHTML = cart.map((item) => {
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

  $('cart-items').querySelectorAll('[data-remove-cart]').forEach((button) => button.addEventListener('click', () => {
    cart = cart.filter((item) => item.cartId !== button.dataset.removeCart);
    updateCart();
  }));
  $('cart-items').querySelectorAll('[data-duplicate-cart]').forEach((button) => button.addEventListener('click', () => {
    const item = cart.find((entry) => entry.cartId === button.dataset.duplicateCart);
    if (item) cart.push({ ...item, cartId: `${item.cartId}-${Date.now()}` });
    updateCart();
  }));
}

function selectDelivery(type) {
  delivery = type;
  $('pickup-option').classList.toggle('selected', type === 'pickup');
  $('delivery-option').classList.toggle('selected', type === 'delivery');
  $('customer-address').classList.toggle('hidden', type !== 'delivery');
}

function sendOrder() {
  if (!cart.length) return;
  const name = $('customer-name').value.trim();
  const cedula = $('customer-cedula').value.trim();
  const phone = $('customer-phone').value.trim();
  const address = $('customer-address').value.trim();

  if (!name || !cedula || !phone || !paymentMethod || (delivery === 'delivery' && !address)) {
    showToast('Completa todos tus datos y el método de pago.');
    return;
  }
  if (!/^\d{11}$/.test(phone)) {
    showToast('El teléfono debe contener exactamente 11 dígitos.');
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
  $('backdrop').classList.remove('hidden');
  $(id).classList.remove('hidden');
}
function closeLayer(id) {
  $(id).classList.add('hidden');
  const anyOpen = ['cart-drawer', 'customization-modal', 'login-modal', 'product-modal', 'code-modal'].some((layer) => !$(layer).classList.contains('hidden'));
  if (!anyOpen) $('backdrop').classList.add('hidden');
}
function closeAllLayers() {
  ['cart-drawer', 'customization-modal', 'login-modal', 'product-modal', 'code-modal'].forEach((id) => $(id).classList.add('hidden'));
  $('backdrop').classList.add('hidden');
}

let isAdminSessionActive = false;

function showAdmin() {
  $('customer-view').classList.add('hidden');
  $('cart-dock').classList.add('hidden');
  $('admin-view').classList.remove('hidden');
  renderAdminTable();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showMenu() {
  $('admin-view').classList.add('hidden');
  $('customer-view').classList.remove('hidden');
  updateCart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderAdminTable() {
  $('admin-product-count').textContent = products.length;
  $('admin-table-body').innerHTML = products.map((product) => `
    <tr>
      <td><div class="table-product"><span class="table-thumb">${escapeHtml(initials(product.name))}</span><div><strong>${escapeHtml(product.name)}</strong><small>${product.isWeight ? 'Venta por kg' : 'Precio fijo'}</small></div></div></td>
      <td>${escapeHtml(product.category)}</td>
      <td>${money(product.price)}</td>
      <td><div class="table-actions"><button class="small-action" data-edit-product="${product.id}" type="button" aria-label="Editar">✎</button><button class="small-action danger" data-delete-product="${product.id}" type="button" aria-label="Eliminar">×</button></div></td>
    </tr>
  `).join('');
  $('admin-table-body').querySelectorAll('[data-edit-product]').forEach((button) => button.addEventListener('click', () => openProductForm(Number(button.dataset.editProduct))));
  $('admin-table-body').querySelectorAll('[data-delete-product]').forEach((button) => button.addEventListener('click', () => {
    const product = products.find((item) => item.id === Number(button.dataset.deleteProduct));
    if (product && window.confirm(`¿Eliminar ${product.name}?`)) {
      products = products.filter((item) => item.id !== product.id);
      renderAdminTable();
      renderMenu();
      showToast('Producto eliminado.');
    }
  }));
}

function populateProductCategories() {
  $('product-category').innerHTML = categories.slice(1).map((category) => `<option>${escapeHtml(category)}</option>`).join('');
}

function openProductForm(productId = 0) {
  const product = products.find((item) => item.id === productId);
  $('product-title').textContent = product ? 'Editar producto' : 'Nuevo producto';
  $('product-id').value = product?.id || '';
  $('product-name').value = product?.name || '';
  $('product-category').value = product?.category || 'Especiales';
  $('product-price').value = product?.price ?? '';
  $('product-image').value = product?.image || '';
  $('product-description').value = product?.desc || '';
  $('product-weight').checked = Boolean(product?.isWeight);
  $('product-sizes').value = (product?.sizes || []).map((s) => `${s.name}: ${s.price}`).join(', ');
  $('product-addons').value = (product?.addons || []).map((a) => `${a.name}: ${a.price}`).join(', ');
  $('product-removals').value = (product?.removals || []).join(', ');
  
  openLayer('product-modal');
}

function showGeneratedCode() {
  const codeString = `const defaultProducts = ${JSON.stringify(products, null, 2)};`;
  $('code-output').value = codeString;
  openLayer('code-modal');
}

function bindEvents() {
  $('search-input').addEventListener('input', (event) => { searchText = event.target.value; renderMenu(); });
  $('brand-home').addEventListener('click', () => { activeCategory = 'Todos'; searchText = ''; $('search-input').value = ''; renderCategories(); renderMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  $('cart-button').addEventListener('click', () => openLayer('cart-drawer'));
  $('dock-button').addEventListener('click', () => openLayer('cart-drawer'));
  $('close-cart').addEventListener('click', () => closeLayer('cart-drawer'));
  $('backdrop').addEventListener('click', closeAllLayers);
  $('close-customization').addEventListener('click', () => closeLayer('customization-modal'));
  $('cancel-customization').addEventListener('click', () => closeLayer('customization-modal'));
  $('confirm-customization').addEventListener('click', confirmCustomization);
  $('pickup-option').addEventListener('click', () => selectDelivery('pickup'));
  $('delivery-option').addEventListener('click', () => selectDelivery('delivery'));
  
  const paymentButtons = document.querySelectorAll('#payment-options .payment-card');
  paymentButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      paymentButtons.forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      paymentMethod = btn.dataset.payment;
    });
  });

  $('send-order').addEventListener('click', sendOrder);
  $('admin-button').addEventListener('click', () => {
    if (isAdminSessionActive) showAdmin();
    else openLayer('login-modal');
  });
  $('close-login').addEventListener('click', () => closeLayer('login-modal'));
  $('cancel-login').addEventListener('click', () => closeLayer('login-modal'));
  
  $('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = ($('login-user').value || '').trim().toUpperCase();
    const passInput = ($('login-password').value || '').trim();

    const authOk = window.AuthModule ? window.AuthModule.login(userInput, passInput) : false;
    const fallbackOk = (userInput === 'RP' || userInput === 'ADMIN') && passInput === '3008';

    if (authOk || fallbackOk) {
      isAdminSessionActive = true;
      $('login-error').classList.add('hidden');
      $('login-user').value = '';
      $('login-password').value = '';
      closeLayer('login-modal');
      showAdmin();
    } else {
      $('login-error').classList.remove('hidden');
    }
  });

  ['back-to-menu', 'return-menu', 'admin-brand-home'].forEach((id) => $(id).addEventListener('click', showMenu));
  $('logout-button').addEventListener('click', () => { isAdminSessionActive = false; showMenu(); });
  $('new-product').addEventListener('click', () => openProductForm());
  $('close-product').addEventListener('click', () => closeLayer('product-modal'));
  $('cancel-product').addEventListener('click', () => closeLayer('product-modal'));
  
  $('close-code').addEventListener('click', () => closeLayer('code-modal'));
  $('cancel-code').addEventListener('click', () => closeLayer('code-modal'));
  $('copy-code-button').addEventListener('click', () => {
    const codeArea = $('code-output');
    codeArea.select();
    navigator.clipboard.writeText(codeArea.value).then(() => {
      showToast('Código copiado al portapapeles.');
      closeLayer('code-modal');
    }).catch(() => {
      showToast('No se pudo copiar automáticamente.');
    });
  });

  $('product-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const id = Number($('product-id').value);
    
    const sizesRaw = $('product-sizes').value.trim();
    let parsedSizes = [];
    if (sizesRaw) {
      parsedSizes = sizesRaw.split(',').map((part) => {
        const [name, priceStr] = part.split(':').map((str) => str.trim());
        if (name) {
          return { name, price: Number(priceStr) || 0 };
        }
        return null;
      }).filter(Boolean);
    }

    const addonsRaw = $('product-addons').value.trim();
    let parsedAddons = [];
    if (addonsRaw) {
      parsedAddons = addonsRaw.split(',').map((part) => {
        const [name, priceStr] = part.split(':').map((str) => str.trim());
        if (name) {
          return { name, price: Number(priceStr) || 0 };
        }
        return null;
      }).filter(Boolean);
    }

    const removalsRaw = $('product-removals').value.trim();
    let parsedRemovals = [];
    if (removalsRaw) {
      parsedRemovals = removalsRaw.split(',').map((str) => str.trim()).filter(Boolean);
    }

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

    products = id ? products.map((item) => item.id === id ? next : item) : [...products, next];
    closeLayer('product-modal');
    renderAdminTable();
    renderMenu();
    showToast('Menú actualizado.');
    showGeneratedCode();
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
