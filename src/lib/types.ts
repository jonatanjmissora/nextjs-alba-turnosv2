export interface ServiceType {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    description: string;
    admin_desc: string;
}

export interface ServiceTreeType {
    id: number;
    title: string;
    categories: CategoryType[];
}

export interface CategoryType {
    id: number;
    subtitle: string;
    price: number;
    description: string;
}

export type TurnoType = {
    id: number;
    created_at?: string;
    servicio: number;
    fecha: string;
    hora: string;
    nombre: string;
    telefono: string;
    servicios?: ServiceType;
};
