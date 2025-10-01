"use client";

import {
    MiniCalendar,
    MiniCalendarDay,
    MiniCalendarDays,
    MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";
import { timeRange } from "@/lib/time";
import { turnosmock, type TurnoType } from "@/lib/turnos-mock";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { AlertDialogComponent } from "../_components/AlertDialog";

export default function AdminPage() {
    const [selectedAdminDate, setSelectedAdminDate] = useState<Date>(
        new Date(),
    );

    return (
        <section className="w-1/3 min-h-[95dvh] m-5 mb-12 flex flex-col gap-4 items-center overflow-hidden">
            <MiniCalendarElement
                selectedAdminDate={selectedAdminDate}
                setSelectedAdminDate={setSelectedAdminDate}
            />
            <TimeContainer selectedAdminDate={selectedAdminDate} />
        </section>
    );
}

const MiniCalendarElement = ({
    selectedAdminDate,
    setSelectedAdminDate,
}: {
    selectedAdminDate: Date;
    setSelectedAdminDate: (date: Date) => void;
}) => {
    return (
        <MiniCalendar
            onValueChange={(date = new Date()) => {
                setSelectedAdminDate(date);
            }}
            value={selectedAdminDate}
            className="bg-pink-100 flex justify-center items-center border border-[#444]/20 shadow w-full "
        >
            <MiniCalendarNavigation direction="prev" />
            <MiniCalendarDays>
                {(date) => (
                    <MiniCalendarDay date={date} key={date.toISOString()} />
                )}
            </MiniCalendarDays>
            <MiniCalendarNavigation direction="next" />
        </MiniCalendar>
    );
};

const getTurnosByDate = (date: Date) => {
    return turnosmock.filter(
        (turno) => turno.date === date.toLocaleDateString(),
    );
};

const TimeContainer = ({ selectedAdminDate }: { selectedAdminDate: Date }) => {
    const turnosDate = getTurnosByDate(selectedAdminDate);

    return (
        <article className="w-full border border-[#444]/20  shadow bg-pink-100 p-2 rounded-lg">
            {timeRange.map((time) => (
                <Turno
                    key={time.id}
                    time={time.time}
                    turno={turnosDate.find((turno) => turno.time === time.time)}
                />
            ))}
        </article>
    );
};

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
                    <span className="font-semibold tracking-wider text-[#444]">{turno.service}</span>
                    <span className="text-[#444]/85">{turno.name}</span>
                            {selected && (
                        <div
                            className={`h-full aspect-square absolute top-1/2 transform translate-y-[-50%] right-0 flex justify-center items-center ${selected && "bg-[#400]/30"}`}
                        >
                    <AlertDialogComponent>
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
