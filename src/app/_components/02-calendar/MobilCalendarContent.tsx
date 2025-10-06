import {
    MiniCalendar,
    MiniCalendarDay,
    MiniCalendarDays,
    MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";
import { IconCheck } from "@tabler/icons-react";
import { useZStore } from "@/store/zustand-provider";
import type { TurnoType } from "@/lib/types";
import { getTimeRangeForSelecteDate } from "@/lib/utils";

export const MobilCalendarContent = ({
    turnos,
    isFetching,
}: {
    turnos: TurnoType[];
    isFetching: boolean;
}) => {
    const selectedDate = useZStore((state) => state.selectedDate);
    const setSelectedDate = useZStore((state) => state.setSelectedDate);
    const setSelectedTime = useZStore((state) => state.setSelectedTime);

    return (
        <article className="flex-1 flex flex-col gap-12 items-center mt-8 mx-auto w-[90%] min-h-[45vh]">
            <div className="flex flex-col gap-3 items-center w-full">
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
                <TimeContainer
                    turnos={turnos}
                    selectedDate={selectedDate}
                    isFetching={isFetching}
                />
            )}
        </article>
    );
};

const TimeContainer = ({
    turnos,
    selectedDate,
    isFetching,
}: {
    turnos: TurnoType[];
    selectedDate: Date;
    isFetching: boolean;
}) => {
    const selectedTime = useZStore((state) => state.selectedTime);
    const setSelectedTime = useZStore((state) => state.setSelectedTime);

    const selectedDatetimeRange = getTimeRangeForSelecteDate(
        selectedDate,
        turnos,
    );

    return (
        <div className="flex flex-col gap-3 justify-center items-center w-full">
            <div className="w-full relative">
                {isFetching && (
                    <span className="text-xs text-[#444]/50 absolute right-4 top-0">
                        cargando...
                    </span>
                )}
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
                {selectedDatetimeRange.map((time) => (
                    <button
                        key={time}
                        type="button"
                        className={`p-3 text-center rounded text-xs text-[#444] tracking-wider font-medium border border-[#444]/20 ${selectedTime !== time ? "bg-pink-300/20" : "bg-[#ff9bac] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]"}`}
                        onClick={() => setSelectedTime(time)}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );
};
