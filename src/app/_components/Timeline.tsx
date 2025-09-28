"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useZStore } from "@/providers/zustand-provider";
import { CheckIcon } from "lucide-react";

export default function TimeLine() {
    const pathname = usePathname();

    const selectedService = useZStore((state) => state.selectedService);
    const setSelectedService = useZStore((state) => state.setSelectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const setSelectedDate = useZStore((state) => state.setSelectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);
    const setSelectedTime = useZStore((state) => state.setSelectedTime);
    const name = useZStore((state) => state.name);
    const setName = useZStore((state) => state.setName);
    const phone = useZStore((state) => state.phone);
    const setPhone = useZStore((state) => state.setPhone);
    const setCheckout = useZStore((state) => state.setCheckout);

    const handleReset = () => {
        setSelectedService(undefined);
        setSelectedDate(undefined);
        setSelectedTime(undefined);
        setName(undefined);
        setPhone(undefined);
        setCheckout(false);
    };

    if (pathname === "/checkout") {
        return (
            <article className="w-full flex justify-end px-20 items-center h-16 bg-[#ffbdc8] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2)]">
                <button type="button" className="p-0 m-0" onClick={handleReset}>
                    <Link
                        href="/"
                        className="p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow bg-pink-50"
                    >
                        VOLVER
                    </Link>
                </button>
            </article>
        );
    }

    return (
        <article className="w-full flex justify-around items-center h-16 bg-[#ffbdc8] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2)]">
            <PrevButton pathname={pathname} />

            <ul className="flex gap-4">
                <li
                    className={`size-8 flex justify-center items-center p-2 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${selectedService ? "bg-orange-500/70" : "transparent"}`}
                >
                    {selectedService ? <CheckIcon size={15} /> : <span>1</span>}
                </li>
                <li
                    className={`size-8 flex justify-center items-center rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${selectedDate && selectedTime ? "bg-orange-500/70" : "transparent"}`}
                >
                    {selectedDate && selectedTime ? (
                        <CheckIcon size={15} />
                    ) : (
                        <span>2</span>
                    )}
                </li>
                <li
                    className={`size-8 flex justify-center items-center p-2 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${name && phone ? "bg-orange-500/70" : "transparent"}`}
                >
                    {name && phone ? <CheckIcon size={15} /> : <span>3</span>}
                </li>
            </ul>
            <NextButton pathname={pathname} />
        </article>
    );
}

const PrevButton = ({ pathname }: { pathname: string }) => {
    const prevActive = pathname !== "/";
    const prevHref = pathname === "/calendar" ? "/" : "/calendar";
    const activeColor = "bg-pink-200 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]";
    return (
        <>
            {prevActive ? (
                <Link
                    className={`w-[14ch] text-center p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${activeColor}`}
                    href={prevHref}
                >
                    ATRAS
                </Link>
            ) : (
                <span
                    className={`w-[14ch] text-center  p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow`}
                >
                    ATRAS
                </span>
            )}
        </>
    );
};

const NextButton = ({ pathname }: { pathname: string }) => {
    const selectedService = useZStore((state) => state.selectedService);
    const selectedDate = useZStore((state) => state.selectedDate);
    const selectedTime = useZStore((state) => state.selectedTime);
    const checkout = useZStore((state) => state.checkout);

    let nextActive = false;
    if (
        (pathname === "/" && selectedService) ||
        (pathname === "/calendar" && selectedDate && selectedTime)
    ) {
        nextActive = true;
    }

    const nextHref = pathname === "/" ? "/calendar" : "/data";
    const activeColor = "bg-pink-200 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]";

    if (checkout && pathname === "/data") {
        return (
            <Link
                href="/checkout"
                className={`animate-bounce w-[14ch] text-center py-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.35)] bg-[#ff8000]/70`}
            >
                CONFIRMAR
            </Link>
        );
    }

    return (
        <>
            {nextActive && pathname !== "/data" ? (
                <Link
                    className={`w-[14ch] text-center  py-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${activeColor}`}
                    href={nextHref}
                >
                    SIGUIENTE
                </Link>
            ) : (
                <span
                    className={`w-[14ch] text-center  py-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow`}
                >
                    {pathname === "/data" ? "CONFIRMAR" : "SIGUIENTE"}
                </span>
            )}
        </>
    );
};
