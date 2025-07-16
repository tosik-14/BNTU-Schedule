import {Week} from "@/src/entities/schedule/week/types";
import {Schedule} from "@/src/entities/schedule/types";
import getMondayOfWeek from "@/src/features/SchedulePage/lib/getMondayOfWeek";
import {addDays, format} from "date-fns"

export default function getVirtualWeek(offset: number, schedule: Schedule) : Week{
    const isEven = offset % 2 === 0;
    const baseWeekNumber = isEven ? 2 : 1;

    const baseWeek = schedule.week.find((w) => w.weekAlternation === baseWeekNumber);

    const weekStartDate = getMondayOfWeek(offset);
    const weekId = offset;

    return {
        ...baseWeek,
        id: weekId,
        baseWeek: baseWeekNumber,
        weekDays: baseWeek.weekDays.map((day, index) => ({
            ...day,
            date: format(addDays(weekStartDate, index), 'dd.MM.yyyy'),
        }))
    };
}