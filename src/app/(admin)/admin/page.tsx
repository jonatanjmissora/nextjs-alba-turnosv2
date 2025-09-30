"use client";

import {
    MiniCalendar,
    MiniCalendarDay,
    MiniCalendarDays,
    MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";
import { useState } from "react";

export default function AdminPage() {
    return (
        <section className="w-[90%] h-[95dvh] my-5 flex flex-col gap-4 items-center justify-center bg-pink-100 shadow rounded-lg overflow-hidden">
            <MiniCalendarElement />
            <TimeContainer />
        </section>
    );
}

const MiniCalendarElement = () => {
    const [adminSelectedDate, setAdminSelectedDate] = useState<Date>(
        new Date(),
    );
    const [adminSelectedTime, setAdminSelectedTime] = useState<
        string | undefined
    >(undefined);

    return (
        <MiniCalendar
            onValueChange={(date = new Date()) => {
                setAdminSelectedDate(date);
                setAdminSelectedTime(undefined);
            }}
            value={adminSelectedDate}
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

const TimeContainer = () => {
    return (
        <article className="w-full grid grid-cols-[0.2fr_1fr] text-center gap-1 py-3  border border-[#444]/20 rounded-lg shadow bg-pink-100">
            {turnosmock.map((turno) => (
                <Turno key={turno.id} turno={turno} />
            ))}
        </article>
    );
};

const Turno = (turno) => {
    return (
        <article key={turno.id}>
            <span className="w-full border border-[#444]/20">{turno.time}</span>
            <span className="w-full border border-[#444]/20">{turno.name}</span>
        </article>
    );
};

const turnosmock = [
    {
        id: "1",
        date: "12/10/2025",
        time: "12:00",
        service: "Maderoterapia",
        name: "Gladys",
        phone: "123456789",
    },
    {
        id: "2",
        date: "12/10/2025",
        time: "12:00",
        service: "Maderoterapia",
        name: "Gladys",
        phone: "123456789",
    },
];
