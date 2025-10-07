"use client";

import ContentLayout from "@/app/_components/layouts/ContentLayout";
import { useServices } from "@/lib/services-query";
import { formatPrice, getServiceData } from "@/lib/utils";
import { useZStore } from "@/store/zustand-provider";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";

export default function DataPage() {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);

    const { services } = useServices();

    const { serviceTitle, servicePrice } = getServiceData(
        selectedService,
        services,
    );

    return (
        <ContentLayout title="Completar datos personales">
            <div className="flex-1 w-[80%] flex flex-col items-center">
                <div className="grid grid-cols-[1fr_2.5fr] gap-2 items-center pt-12">
                    <NameElement />

                    <PhoneElement />

                    <span className="text-[#444]">servicio :</span>
                    <span>{serviceTitle || ""}</span>

                    <span className="text-[#444]">fecha :</span>
                    <span>{selectedDate?.toLocaleDateString() || ""}</span>

                    <span className="text-[#444]">hora :</span>
                    <span>{selectedTime || ""} hs</span>

                    <span className="text-[#444]">valor :</span>
                    <span>$ {formatPrice(servicePrice) || 0}</span>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-[#444]/80 justify-center items-center w-[80%] mx-auto text-center">
                <p className="w-full">
                    Se recuerda que la atención es personalizadas, por lo que
                    debe asistir sin compania.
                </p>
                <p className="w-full">
                    ⏱ Los turnos solo se cancelan con 24 hs de antelación, caso
                    contrario se deberá abonar la seña.
                </p>
                <p className="w-full">💰 Transferencias : albanaestetica</p>
                <p className="w-full">
                    📱 Mandar comprobante luego de la transferencia
                </p>
            </div>
        </ContentLayout>
    );
}

const NameElement = () => {
    const name = useZStore((state) => state.name);
    const setName = useZStore((state) => state.setName);

    const [nombre, setNombre] = useState<string>(name || "");

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
        if (e.target.value.length > 3) {
            setName(e.target.value);
        } else {
            setName(undefined);
        }
    };

    return (
        <>
            <label className="text-[#444]" htmlFor="name">
                nombre :
            </label>
            <div className="relative">
                <input
                    name="name"
                    className="p-2 py-1 h-8 bg-pink-50 border border-[#444]/20"
                    type="text"
                    value={nombre}
                    onChange={handleChangeName}
                />
                {name && name.length > 3 && (
                    <IconCheck
                        stroke={3}
                        size={40}
                        color="#ff8000"
                        className={`absolute -top-2 -right-10 block`}
                    />
                )}
            </div>
        </>
    );
};

const PhoneElement = () => {
    const phone = useZStore((state) => state.phone);
    const setPhone = useZStore((state) => state.setPhone);

    const [celular, setCelular] = useState<string>(phone || "");

    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 10) return;
        setCelular(e.target.value);
        if (e.target.value.length > 8 && e.target.value.length < 11) {
            setPhone(e.target.value);
        } else {
            setPhone(undefined);
        }
    };

    return (
        <>
            <label className="text-[#444]" htmlFor="phone">
                celular :
            </label>
            <div className="relative">
                <input
                    name="phone"
                    className="p-2 py-1 h-8 bg-pink-50 border border-[#444]/20"
                    type="number"
                    value={celular}
                    onChange={handleChangePhone}
                />
                {phone && phone.length > 8 && phone.length < 11 && (
                    <IconCheck
                        stroke={3}
                        size={40}
                        color="#ff8000"
                        className={`absolute -top-2 -right-10 block`}
                    />
                )}
            </div>
        </>
    );
};
