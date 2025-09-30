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
        <section className="w-20 h-20 p-3 flex flex-col items-center justify-center border border-black rounded-lg">
            hola
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
        <div>
            <h3>Selecciona hora</h3>
        </div>
    );
};
