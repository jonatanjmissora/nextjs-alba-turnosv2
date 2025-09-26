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
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
        ],
    },
    {
        id: "2",
        title: "Limpieza Facial",
        categories: [
            {
                id: "21",
                subtitle: "Simple",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
            {
                id: "22",
                subtitle: "Completa hasta la concha de tu madre",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
        ],
    },
    {
        id: "3",
        title: "Limpieza Corporal",
        categories: [
            {
                id: "31",
                subtitle: "Simple",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
            {
                id: "32",
                subtitle: "Completa",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
        ],
    },
    {
        id: "4",
        title: "Depilación Láser",
        categories: [
            {
                id: "41",
                subtitle: "Cuerpo 1",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
            {
                id: "42",
                subtitle: "Cuerpo 2",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
            {
                id: "43",
                subtitle: "Cuerpo 3",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
        ],
    },
    {
        id: "5",
        title: "Hifu",
        categories: [
            {
                id: "51",
                subtitle: "Simple",
                price: "100.000",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            },
        ],
    },
];
