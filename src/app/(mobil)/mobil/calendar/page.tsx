"use client";

import {
    MiniCalendar,
    MiniCalendarDay,
    MiniCalendarDays,
    MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";
import { IconCheck } from "@tabler/icons-react";
import { timeRange } from "@/lib/time";
import { useZStore } from "@/providers/zustand-provider";

export default function MobilCalendarPage() {
    return <MiniCalendarDate />;
}

const MiniCalendarDate = () => {
    const selectedDate = useZStore((state) => state.selectedDate);
    const setSelectedDate = useZStore((state) => state.setSelectedDate);
    const setSelectedTime = useZStore((state) => state.setSelectedTime);

    return (
        <article className="flex-1 flex flex-col gap-12 items-center mt-8 mx-auto w-[90%] min-h-[40vh]">
            <h2 className="w-full text-left text-xl font-semibold tracking-wider text-[#444] mb-8">
                Selecciona fecha y hora
            </h2>
            <div className="flex flex-col gap-3 justify-center items-center w-full">
                <div className="w-full relative">
                    <h3 className="text-xs text-[#444] ">Selecciona fecha</h3>
                    {selectedDate && (
                        <IconCheck
                            stroke={3}
                            size={40}
                            color="#ff8000"
                            className={`absolute top-1/2 transform -translate-y-1/2 right-2 block`}
                        />
                    )}
                </div>
                <MiniCalendar
                    onValueChange={(date = new Date()) => {
                        setSelectedDate(date);
                        setSelectedTime(undefined);
                    }}
                    value={selectedDate}
                    className="bg-pink-100 flex justify-center items-center border border-[#444]/20 shadow w-full "
                >
                    <MiniCalendarNavigation direction="prev" />
                    <MiniCalendarDays>
                        {(date) => (
                            <MiniCalendarDay
                                date={date}
                                key={date.toISOString()}
                            />
                        )}
                    </MiniCalendarDays>
                    <MiniCalendarNavigation direction="next" />
                </MiniCalendar>
            </div>

            {selectedDate && (
                // <p className="text-muted-foreground text-sm">
                //   Selected:{" "}
                //   {selectedDate.toLocaleDateString("en-US", {
                //     weekday: "long",
                //     year: "numeric",
                //     month: "long",
                //     day: "numeric",
                //   })}
                // </p>
                <TimeContainer />
            )}
        </article>
    );
};

const TimeContainer = () => {
    const selectedTime = useZStore((state) => state.selectedTime);
    const setSelectedTime = useZStore((state) => state.setSelectedTime);

    return (
        <div className="flex flex-col gap-3 justify-center items-center w-full">
            <div className="w-full relative">
                <h3 className="text-xs text-[#444] ">Selecciona hora</h3>
                {selectedTime && (
                    <IconCheck
                        stroke={3}
                        size={40}
                        color="#ff8000"
                        className={`absolute top-1/2 transform -translate-y-1/2 right-2 block`}
                    />
                )}
            </div>
            <div className="w-full grid grid-cols-4 gap-3 py-8 px-4 border border-[#444]/20 rounded-lg shadow bg-pink-100">
                {timeRange.map((time) => (
                    <button
                        key={time.id}
                        type="button"
                        className={`p-3 text-center rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/20 ${selectedTime !== time.time ? "bg-pink-300/20" : "bg-[#ff9bac] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]"}`}
                        onClick={() => setSelectedTime(time.time)}
                    >
                        {time.time}
                    </button>
                ))}
            </div>
        </div>
    );
};
