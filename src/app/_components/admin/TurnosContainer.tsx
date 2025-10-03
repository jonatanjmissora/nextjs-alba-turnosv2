import type { TurnoType } from "@/lib/turnos-mock";
import { useState } from "react";
import { AlertDialogComponent } from "../AlertDialog";
import { Trash2Icon } from "lucide-react";
import { timeRange } from "@/lib/time";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

export default function TurnosContainer({
    selectedAdminDate,
    turnos,
}: {
    selectedAdminDate: Date;
    turnos: TurnoType[];
}) {
    const turnosDate = turnos.filter(
        (turno) =>
            turno.fecha === selectedAdminDate.toISOString().split("T")[0],
    );

    return (
        <article className="w-full border border-[#444]/20  shadow bg-pink-100 p-2 rounded-lg">
            {timeRange.map((time) => (
                <Turno
                    key={time.id}
                    time={time.time}
                    turno={turnosDate.find((turno) => turno.hora === time.time)}
                />
            ))}
        </article>
    );
}

const Turno = ({
    time,
    turno,
}: {
    time: string;
    turno: TurnoType | undefined;
}) => {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div
            className={`text-base sm:text-xs 2xl:text-base flex justify-center items-center text-center border border-[#444]/20 ${turno ? "bg-[#ff9bac]/50 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]" : ""}`}
        >
            <button
                type="button"
                className="w-[20%] h-full py-2"
                onClick={() => setSelected((prev) => !prev)}
            >
                {time}
            </button>
            {turno ? (
                <div className="w-[80%] h-[64px] sm:h-[42px] 2xl:h-[64px] p-2 px-4 border-l border-[#444]/20  flex flex-col justify-center items-center relative">
                    <span className="font-semibold tracking-wider text-[#444]">
                        {turno.servicio}
                    </span>
                    <span className="text-[#444]/85">{turno.nombre}</span>
                    {selected && (
                        <div
                            className={`h-full aspect-square absolute top-1/2 transform translate-y-[-50%] right-0 flex justify-center items-center ${selected && "bg-[#400]/30"}`}
                        >
                            <AlertDialogComponent turnoId={turno.id}>
                                <Trash2Icon className="size-6 text-[#400]/50 cursor-pointer" />
                            </AlertDialogComponent>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-[80%] h-[64px] sm:h-[42px] 2xl:h-[64px] py-2 border-l border-[#444]/20 relative">
                    <Link
                        href="/"
                        className={`h-full aspect-square absolute top-1/2 transform translate-y-[-50%] right-0 flex justify-center items-center ${selected && "bg-[#040]/30"}`}
                    >
                        {selected && (
                            <PlusIcon className="size-7 text-[#444]/80" />
                        )}
                    </Link>
                </div>
            )}
        </div>
    );
};
