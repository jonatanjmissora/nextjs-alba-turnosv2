"use client";
import { useEffect, useState } from "react";
import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";
import { IconCheck } from "@tabler/icons-react";

export default function CalendarPage() {
  return (
    <section className="w-2/3 h-[500px] mx-2">
      <h2 className="text-xl text-[#444] p-8 py-4 border-b border-[#444]/20">
        Selecciona turno
      </h2>
      <MiniCalendarDate />
    </section>
  );
}

const MiniCalendarDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <article className="flex flex-col gap-8 items-center mt-8">
      <div className="flex flex-col gap-3 justify-center items-center w-2/3">
        <div className="w-full relative">
          <h3 className="text-xs text-[#444] ">Selecciona fecha</h3>
          {selectedDate && (
            <IconCheck
              stroke={2}
              className={`absolute top-1/2 transform -translate-y-1/2 right-2 block`}
            />
          )}
        </div>
        <MiniCalendar
          onValueChange={setSelectedDate}
          value={selectedDate}
          className="bg-pink-300/20 flex justify-center items-center border border-[#444]/20 shadow w-full "
        >
          <MiniCalendarNavigation direction="prev" />
          <MiniCalendarDays>
            {(date) => <MiniCalendarDay date={date} key={date.toISOString()} />}
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
        <TimeContainer selectedDate={selectedDate} />
      )}
    </article>
  );
};

const TimeContainer = ({ selectedDate }: { selectedDate: Date }) => {
  const timeRange = [
    { id: 1, time: "08:00" },
    { id: 2, time: "09:00" },
    { id: 3, time: "10:00" },
    { id: 4, time: "11:00" },
    { id: 5, time: "12:00" },
    { id: 6, time: "13:00" },
    { id: 7, time: "14:00" },
    { id: 8, time: "15:00" },
    { id: 9, time: "16:00" },
    { id: 10, time: "17:00" },
    { id: 11, time: "18:00" },
    { id: 12, time: "19:00" },
    { id: 13, time: "20:00" },
  ];

  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (selectedDate) {
      setSelectedTime(undefined);
    }
  }, [selectedDate]);

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-2/3">
      <div className="w-full relative">
        <h3 className="text-xs text-[#444] ">Selecciona hora</h3>
        {selectedTime && (
          <IconCheck
            stroke={2}
            className={`absolute top-1/2 transform -translate-y-1/2 right-2 block`}
          />
        )}
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center py-8 px-4 border border-[#444]/20 rounded-lg shadow bg-pink-100">
        {timeRange.map((time) => (
          <button
            key={time.id}
            type="button"
            className={`p-2 rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/20 shadow ${selectedTime !== time.time ? "bg-pink-300/20" : "bg-[#ff9bac]"}`}
            onClick={() => setSelectedTime(time.time)}
          >
            {time.time}
          </button>
        ))}
      </div>
    </div>
  );
};
