"use client";

import {
    MiniCalendar,
    MiniCalendarDay,
    MiniCalendarDays,
    MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";
import { IconCheck } from "@tabler/icons-react";
import { timeRange } from "@/lib/time";
import { useZStore } from "@/store/zustand-provider";
import ContentLayout from "@/app/_components/ContentLayout";

export default function CalendarPage() {
    return (
        <ContentLayout title="Selecciona fecha y hora">
            <MiniCalendarDate />
        </ContentLayout>
    );
}

const MiniCalendarDate = () => {
    const selectedDate = useZStore((state) => state.selectedDate);
    const setSelectedDate = useZStore((state) => state.setSelectedDate);
    const setSelectedTime = useZStore((state) => state.setSelectedTime);

    return (
        <article className="flex-1 flex flex-col sm:gap-6 2xl:gap-8 items-center mt-8 w-[80%]">
            <div className="flex flex-col sm:gap-2 2xl:gap-3 justify-center items-center w-full">
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
        <div className="flex flex-col sm:gap-2 2xl:gap-3 justify-center items-center w-full">
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
            <div className="w-full grid grid-cols-4 sm:gap-2 2xl:gap-3 p-4 border border-[#444]/20 rounded-lg shadow bg-pink-100">
                {timeRange.map((time) => (
                    <button
                        key={time.id}
                        type="button"
                        className={`p-3 px-6 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/20 ${selectedTime !== time.time ? "bg-pink-300/20" : "bg-[#ff9bac] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]"}`}
                        onClick={() => setSelectedTime(time.time)}
                    >
                        {time.time}
                    </button>
                ))}
            </div>
        </div>
    );
};
