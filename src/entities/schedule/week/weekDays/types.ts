import {DayNameEnum} from "@/src/entities/schedule/week/weekDays/dayNameEnum";
import {Lesson} from "@/src/entities/schedule/week/weekDays/lesson/types";

export interface WeekDays {
    id: string,
    dayName: DayNameEnum,
    date: string,
    lessons: Lesson[],
}