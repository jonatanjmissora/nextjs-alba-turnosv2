export type TurnoType = {
    id: number;
    created_at: string;
    servicio: number;
    fecha: string;
    hora: string;
    nombre: string;
    telefono: number;
};

export const turnosmock = [
    {
        id: 202510031300,
        created_at: "2025-10-03 15:17:20.823026+00",
        servicio: 21,
        fecha: "2025-10-03T15:17:01.431Z",
        hora: "13:00",
        nombre: "gato",
        telefono: 1212112112
    },
    {
        id: 202510040900,
        created_at: "2025-10-03 15:00:53.668287+00",
        servicio: 21,
        fecha: "2025-10-04T14:59:55.850Z",
        hora: "09:00",
        nombre: "bianca",
        telefono: 1245665432
    }
];
