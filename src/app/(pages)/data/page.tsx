"use client";

import { services } from "@/lib/services-mock";
import { useZStore } from "@/providers/zustand-provider";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";

export default function DataPage() {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);
    const name = useZStore((state) => state.name);
    const setName = useZStore((state) => state.setName);
    const phone = useZStore((state) => state.phone);
    const setPhone = useZStore((state) => state.setPhone);
    const setCheckout = useZStore((state) => state.setCheckout);

    const serviceTitle = services.find(
        (service) => service.id === selectedService,
    )?.title;

    const [nombre, setNombre] = useState<string>(name || "");
    const [celular, setCelular] = useState<string>(phone || "");

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
        if (e.target.value.length > 3) {
            setName(e.target.value);
            if (phone && phone.length > 8) {
                setCheckout(true);
            }
        } else {
            setName(undefined);
            setCheckout(false);
        }
    };
    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCelular(e.target.value);
        if (e.target.value.length > 8) {
            setPhone(e.target.value);
            if (name && name.length > 3) {
                setCheckout(true);
            }
        } else {
            setPhone(undefined);
            setCheckout(false);
        }
    };

    return (
        <section className="flex-1 w-full h-[500px] p-2 pt-10">
            <h2 className="text-xl text-[#444] p-8 py-4 border-b border-[#444]/20">
                Completar datos personales
            </h2>

            <div className="flex flex-col gap-4 justify-center items-center pt-10 w-2/3 mx-auto h-[400px]">
                <div className="flex-1 relative">
                    <div className="grid grid-cols-[1fr_2.5fr] gap-3 items-center">
                        <label className="text-[#444]" htmlFor="name">
                            nombre :
                        </label>
                        <input
                            name="name"
                            className="p-2 py-1 h-8 bg-pink-50 border border-[#444]/20"
                            type="text"
                            value={nombre}
                            onChange={handleChangeName}
                        />

                        <label className="text-[#444]" htmlFor="phone">
                            celular :
                        </label>
                        <input
                            name="phone"
                            className="p-2 py-1 h-8 bg-pink-50 border border-[#444]/20"
                            type="number"
                            value={celular}
                            onChange={handleChangePhone}
                        />

                        <span className="text-[#444]">servicio :</span>
                        <span>{serviceTitle}</span>

                        <span className="text-[#444]">fecha :</span>
                        {selectedDate && (
                            <span>{selectedDate.toLocaleDateString()}</span>
                        )}

                        <span className="text-[#444]">hora :</span>
                        {selectedTime && <span>{selectedTime} hs</span>}
                    </div>
                    {name && name.length > 3 && (
                        <IconCheck
                            stroke={3}
                            size={40}
                            color="#ff8000"
                            className={`absolute -top-2 -right-10 block`}
                        />
                    )}
                    {phone && phone.length > 8 && (
                        <IconCheck
                            stroke={3}
                            size={40}
                            color="#ff8000"
                            className={`absolute top-9 -right-10 block`}
                        />
                    )}
                </div>

                <div className="flex flex-col gap-2 text-xs text-[#444]/80 justify-center items-center w-full text-center">
                    <p className="w-full">
                        Se recuerda que la atención es personalizadas, por lo
                        que debe asistir sin compania.
                    </p>
                    <p className="w-full">
                        ⏱ Los turnos solo se cancelan con 24 hs de antelación,
                        caso contrario se deberá abonar la seña.
                    </p>
                    <p className="w-full">💰 Transferencias : mi_alias</p>
                    <p className="w-full">
                        📱 Mandar comprobante luego de la transferencia
                    </p>
                </div>
            </div>
        </section>
    );
}
