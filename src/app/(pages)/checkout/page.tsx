"use client";

import { services } from "@/lib/services-mock";
import { useZStore } from "@/providers/zustand-provider";
import Confetti from "react-confetti";

export default function CheckoutPage() {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);

    const serviceTitle = services.find(
        (service) => service.id === selectedService,
    )?.title;

    return (
        <section className="flex-1 w-2/3 mx-auto h-[500px] p-2 flex flex-col justify-center gap-12 items-center">
            <h2 className="text-xl text-[#444] p-8 py-4 border border-[#444]/20 shadow-lg bg-pink-50 rounded-lg font-semibold tracking-wider">
                ¡¡ Tu turno ha sido confirmado !!
            </h2>
            <Confetti gravity={0.035} width={2000} height={1000} />

            <div className="flex flex-col gap-4 bg-pink-50 border border-[#444]/20 shadow-lg rounded-lg p-4">
                <div className="grid grid-cols-[1fr_2.5fr] gap-3 items-center text-semibold text-xl">
                    <span className="text-[#444]">servicio :</span>
                    <span>{serviceTitle}</span>

                    <span className="text-[#444]">fecha :</span>
                    <span>
                        {selectedDate ? selectedDate?.toLocaleDateString() : ""}
                    </span>

                    <span className="text-[#444]">hora :</span>
                    <span>{selectedTime ? selectedTime : ""}</span>
                </div>
            </div>

            <div className="text-sm text-[#444]/80 text-center">
                Se enviará un whatsapp con la confirmación y un recordatorio el
                dia anterior al mismo. En el caso de no poder asistir, o
                reprogramar el turno, recuerde que se debe notificar 24hs antes.
                Gracias por elegirme!! 😍
            </div>
        </section>
    );
}
