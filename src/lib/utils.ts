import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type {
    CategoryType,
    ServiceTreeType,
    ServiceType,
    TurnoType,
} from "./types";
import { timeRange } from "./time";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getServiceData(
    selectedService: number | undefined,
    services: ServiceType[],
) {
    if (!selectedService) return { serviceTitle: "", servicePrice: "" };

    const serviceObj = services.find(
        (service) => service.id === selectedService,
    );
    if (serviceObj) {
        return {
            serviceTitle: serviceObj.title,
            servicePrice: serviceObj.price,
        };
    }
    return { serviceTitle: "", servicePrice: "" };
}

export const getDayOfTheWeek = (date: Date) => {
    const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    return days[date.getDay()];
};

export function getServicesTree(services: ServiceType[]): ServiceTreeType[] {
    // First pass: create a map of titles to their categories
    const servicesMap = new Map<string, CategoryType[]>();

    services.forEach((service) => {
        const { title, id, subtitle, price, description } = service;
        const category: CategoryType = {
            id,
            subtitle,
            price,
            description,
        };

        // Add to the map, grouping by title
        if (!servicesMap.has(title)) {
            servicesMap.set(title, []);
        }
        servicesMap.get(title)?.push(category);
    });

    // Second pass: create the nested structure
    const result: ServiceTreeType[] = [];
    const processedTitles = new Set<string>();

    services.forEach((service) => {
        const { title, id } = service;
        const mainId = Math.floor(id / 10); // Get the first digit(s) for main ID

        // Skip if we've already processed this title
        if (processedTitles.has(title)) return;

        // Mark this title as processed
        processedTitles.add(title);

        // Create the service with its categories
        const serviceWithCategories: ServiceTreeType = {
            id: mainId,
            title,
            categories: servicesMap.get(title) || [],
        };

        result.push(serviceWithCategories);
    });

    return result;
}

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", { minimumFractionDigits: 0 }).format(
        price,
    );
};

export const getTimeRangeForSelecteDate = (
    selectedDate: Date,
    turnos: TurnoType[],
): string[] => {
    const selectedDateTurnosTime = turnos
        .filter(
            (turno) => turno.fecha === selectedDate.toISOString().split("T")[0],
        )
        .map((turno) => turno.hora);
    return timeRange.filter((hora) => !selectedDateTurnosTime.includes(hora));
};
