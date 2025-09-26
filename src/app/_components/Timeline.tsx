"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useZStore } from "@/providers/zustand-provider";

export default function TimeLine() {
    const pathname = usePathname();
    const activeColor = "bg-pink-200 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]";

    return (
        <article className="w-full flex justify-around items-center h-16 bg-[#ffbdc8] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2)]">
            <PrevButton pathname={pathname} />

            <ul className="flex gap-4">
                <li
                    className={`p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${pathname === "/" && activeColor}`}
                >
                    1
                </li>
                <li
                    className={`p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${pathname === "/calendar" && activeColor}`}
                >
                    2
                </li>
                <li
                    className={`p-2 px-3 rounded-full text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${pathname === "/checkout" && activeColor}`}
                >
                    3
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
                    className={`p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow ${activeColor}`}
                    href={prevHref}
                >
                    ATRAS
                </Link>
            ) : (
                <span
                    className={`p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow`}
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
        (pathname === "/" && selectedService !== "0") ||
        (pathname === "/calendar" && selectedDate && selectedTime)
    ) {
        nextActive = true;
    }

    const nextHref = pathname === "/" ? "/calendar" : "/checkout";
    const activeColor = "bg-pink-200 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]";

    if (checkout && pathname === "/checkout") {
        return (
            <button
                type="button"
                className={`w-[14ch] py-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/50 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.35)] bg-[#ff8000]`}
                onClick={() => {}}
            >
                CONFIRMAR
            </button>
        );
    }

    return (
        <>
            {nextActive && pathname !== "/checkout" ? (
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
                    {pathname === "/checkout" ? "CONFIRMAR" : "SIGUIENTE"}
                </span>
            )}
        </>
    );
};
