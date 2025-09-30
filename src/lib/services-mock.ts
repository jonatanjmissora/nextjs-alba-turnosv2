export interface ServiceType {
    id: string;
    title: string;
    categories: CategoryType[];
}

export interface CategoryType {
    id: string;
    subtitle: string;
    price: string;
    description: string;
}

export const services: ServiceType[] = [
    {
        id: "1",
        title: "Maderoterapia",
        categories: [
            {
                id: "11",
                subtitle: "Cuerpo entero",
                price: "45.000",
                description:
                    "Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
            },
        ],
    },
    {
        id: "2",
        title: "Limpieza Facial",
        categories: [
            {
                id: "21",
                subtitle: "Limpieza facial profunda con extracciónes",
                price: "48.000",
                description:
                    "Ideal para pieles deslucidas, con puntos negros y engrosadas.",
            },
            {
                id: "22",
                subtitle: "Tratamiento Antioxidante Glow Up",
                price: "65.000",
                description:
                    "Lucí una piel radiante con mucho Glow. Aporte de activos y vitaminas según cada tipo de piel.",
            },
            {
                id: "23",
                subtitle: "Tratamiento tensor",
                price: "60.000",
                description:
                    "Tratamiento de higiene profunda con Radiofrecuencia. Con aporte de activos tensores. Ideal para pieles desvitalizadas y con flacidez.",
            },
        ],
    },
    {
        id: "3",
        title: "Tratamientos corporales",
        categories: [
            {
                id: "31",
                subtitle: "Higiene corporal profunda",
                price: "50.000",
                description:
                    "Higiene profunda en espalda, glúteos, brazos o piernas. Se realizan extracciones y se tratan manchas o foliculitis. El valor es por zona.",
            },
            {
                id: "32",
                subtitle: "Pulido corporal",
                price: "48.000",
                description:
                    "Pulido corporal con exfoliante. Se hace un prepeeling y un masaje circulatorio en todo el cuerpo.",
            },
        ],
    },
    {
        id: "4",
        title: "Bronceado sin sol",
        categories: [
            {
                id: "41",
                subtitle: "Bronceado sin sol",
                price: "45.000",
                description:
                    "Es un bronceado orgánico que se aplica en forma de bruma con un compresor. En una sola sesión logras el color ideal, natural sin tonos naranjas, ni manchas ni olor.",
            },
        ],
    },
    {
        id: "5",
        title: "Hifu y Liposonix",
        categories: [
            {
                id: "51",
                subtitle: "Hifu",
                price: "85.000",
                description:
                    "Lifting sin cirugía, tratamiento rejuvenecedor sin dolor. Reduce arrugas y líneas de expresión. Mejora la firmeza del rostro. El valor incluye Higiene facial. Rostro, cuello y escote.",
            },
            {
                id: "52",
                subtitle: "Liposonix",
                price: "75.000",
                description:
                    "Deshace permanentemente la grasa localizada, mejora la firmeza y la elasticidad de la piel. Reduce cm, mejora piel con celulitis, sin dolor y sin tiempo de recuperación. Zonas a tratar: abdomen, brazos, pantalón de montar, muslos, espalda, entrepierna. Valor por zona. Y con drenaje en cuerpo completo.",
            },
        ],
    },
    {
        id: "6",
        title: "Depilación láser",
        categories: [
            {
                id: "61",
                subtitle: "Promo: axilas, cavado con tiro y bozo",
                price: "20.000",
                description:
                    "Amamos lo rápido que funciona el tratamiento en todo tipo de piel. Ahorra tiempo y esfuerzo, despedite de la irritación y sobre pigmentación en zonas delicadas.",
            },
        ],
    },
    {
        id: "7",
        title: "Pestañas y cejas",
        categories: [
            {
                id: "71",
                subtitle: "Pestañas",
                price: "25.000",
                description:
                    "Lifting. Técnica de arqueado en pestañas naturales. técnica tradicional y coreana",
            },
            {
                id: "72",
                subtitle: "Laminado de cejas + lifting",
                price: "45.000",
                description: "Promos laminado de cejas y Lifting tradicional.",
            },
        ],
    },
];
