"use client";

import {
    MiniCalendar,
    MiniCalendarDay,
    MiniCalendarDays,
    MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";
import { timeRange } from "@/lib/time";
import { turnosmock, type TurnoType } from "@/lib/turnos-mock";
import { useState } from "react";

export default function AdminPage() {
    const [selectedAdminDate, setSelectedAdminDate] = useState<Date>(
        new Date(),
    );

    return (
        <section className="w-[95dvw] h-[95dvh] m-5 flex flex-col gap-4 items-center justify-center overflow-hidden">
            <MiniCalendarElement
                selectedAdminDate={selectedAdminDate}
                setSelectedAdminDate={setSelectedAdminDate}
            />
            <TimeContainer selectedAdminDate={selectedAdminDate} />
            {selectedAdminDate.toLocaleDateString()}
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
    return (
        <div
            className={`flex justify-center items-center text-center border border-[#444]/20 ${turno ? "bg-[#ff9bac] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]" : ""}`}
        >
            <span className="w-[20%] h-full py-2">{time}</span>
            {turno ? (
                <div className="w-[80%] py-2 flex flex-col border-l border-[#444]/20">
                    <span>{turno.service}</span>
                    <span className="text-[#444]/85">{turno.name}</span>
                </div>
            ) : (
                <div className="w-[80%] py-2 border-l border-[#444]/20">
                    <span>-</span>
                </div>
            )}
        </div>
    );
};
