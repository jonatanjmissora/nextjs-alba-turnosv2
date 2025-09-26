"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@radix-ui/react-accordion";

import {
    type CategoryType,
    services,
    type ServiceType,
} from "@/lib/services-mock";

export default function ServicesAccordion() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full h-[400px] services-card-container p-4"
                >
                    {services.map((service) => (
                        <AccordionItemElement
                            key={service.id}
                            service={service}
                        />
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

const AccordionItemElement = ({ service }: { service: ServiceType }) => {
    const selectedService = useZStore((state) => state.selectedService);
    return (
        <AccordionItem
            value={service.id}
            className="w-full flex flex-col justify-center items-center"
        >
            <AccordionTrigger className="font-semibold tracking-wider py-4 text-[#444] border-b border-[#444]/20 w-full relative">
                <span>{service.title}</span>
                <IconCheck
                    stroke={3}
                    size={40}
                    color="#ff8000"
                    className={`absolute top-1/2 transform -translate-y-1/2 right-2 ${selectedService && selectedService[0] === service.id ? "block" : "hidden"}`}
                />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                {service.categories.map((category) => (
                    <ServiceCard key={category.id} category={category} />
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};

import { useZStore } from "@/providers/zustand-provider";
import { IconCheck } from "@tabler/icons-react";

const ServiceCard = ({ category }: { category: CategoryType }) => {
    const selectedService = useZStore((state) => state.selectedService);
    const setSelectedService = useZStore((state) => state.setSelectedService);

    const handleSelectService = () => {
        if (selectedService && selectedService === category.id) {
            setSelectedService(undefined);
        } else {
            setSelectedService(category.id);
        }
    };

    return (
        <button
            type="button"
            className={`flex flex-col justify-between items-center bg-pink-100 p-4 border border-[#444]/20 rounded-lg  shadow-xl ${selectedService && selectedService === category.id && "bg-pink-300/20"}`}
            onClick={handleSelectService}
        >
            <div className="text-[#333] w-full flex justify-between items-center pb-2">
                <span className="font-semibold">{category.subtitle}</span>
                <span className="font-semibold text-lg text-[#444]">
                    $ {category.price}
                </span>
            </div>
            <p className="text-pretty text-xs text-[#444]/70">
                {category.description}
            </p>
            <span className="w-full text-right text-xs text-[#444]/80">
                ...leer más
            </span>
        </button>
    );
};
