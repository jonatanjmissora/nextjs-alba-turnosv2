import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type {
    CategoryType,
    ServiceTreeType,
    ServiceType,
} from "./services-mock";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getServiceData(
    selectedService: string | undefined,
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
    // Create a map to group services by their title
    const servicesMap = new Map<string, CategoryType[]>();

    // First pass: group all services by their title
    services.forEach((service) => {
        const { id, title, subtitle, price, description } = service;

        // Create the category object
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
        const { title } = service;
        const mainId = service.id.length >= 2 ? service.id[0] : service.id;

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
