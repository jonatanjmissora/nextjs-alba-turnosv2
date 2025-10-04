import {
    MiniCalendar,
    MiniCalendarDay,
    MiniCalendarDays,
    MiniCalendarNavigation,
} from "@/components/ui/shadcn-io/mini-calendar";

export default function AdminMiniCalendar({
    selectedAdminDate,
    setSelectedAdminDate,
}: {
    selectedAdminDate: Date;
    setSelectedAdminDate: (date: Date) => void;
}) {
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
}
