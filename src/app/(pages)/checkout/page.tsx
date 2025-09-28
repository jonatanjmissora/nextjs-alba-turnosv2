"use client";

import { services } from "@/lib/services-mock";
import { getServiceData } from "@/lib/utils";
import { useZStore } from "@/providers/zustand-provider";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function CheckoutPage() {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);

    const { serviceTitle, servicePrice } = getServiceData(
        selectedService,
        services,
    );
    const { width, height } = useWindowSize();

    return (
        <section className="flex-1 w-2/3 mx-auto h-[500px] p-2 flex flex-col justify-center gap-12 items-center">
            <h2 className="text-xl sm:text-lg 2xl:text-xl text-[#444] p-8 py-4 border border-[#444]/20 shadow-lg bg-pink-50 rounded-lg font-semibold tracking-wider w-full">
                ¡¡ Tu turno ha sido confirmado !!
            </h2>
            <Confetti gravity={0.035} width={width} height={height} />

            <div className="flex flex-col gap-4 bg-pink-50 border border-[#444]/20 shadow-lg rounded-lg p-4 w-full">
                <div className="grid grid-cols-[1fr_2.5fr] gap-3 items-center text-semibold text-xl sm:text-base 2xl:text-xl">
                    <span className="text-[#444]">servicio :</span>
                    <span className="text-base">{serviceTitle}</span>

                    <span className="text-[#444]">fecha :</span>
                    <span className="text-base">
                        {selectedDate ? selectedDate?.toLocaleDateString() : ""}
                    </span>

                    <span className="text-[#444]">hora :</span>
                    <span className="text-base">
                        {selectedTime ? selectedTime : ""} hs
                    </span>

                    <span className="text-[#444]">precio :</span>
                    <span className="text-base">
                        $ {servicePrice ? servicePrice : ""}
                    </span>
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
