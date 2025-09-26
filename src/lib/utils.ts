import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ServiceType } from "./services-mock";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getServiceData(
    selectedService: string | undefined,
    services: ServiceType[],
) {
    if (!selectedService) return { serviceTitle: "", servicePrice: "" };

    let serviceTitle = "";
    let categoryTitle = "";
    let servicePrice = "";
    const service = services.find(
        (service) => service.id === selectedService[0],
    );
    if (service) {
        serviceTitle = service.title;
        const category = service.categories.find(
            (category) => category.id === selectedService,
        );
        categoryTitle = category?.subtitle || "";
        servicePrice = category?.price || "";
    }
    return { serviceTitle: `${serviceTitle} - ${categoryTitle}`, servicePrice };
}
