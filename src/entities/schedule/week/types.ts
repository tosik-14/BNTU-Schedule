import {WeekDays} from "@/src/entities/schedule/week/weekDays/types";
import {WeekAlternationLegendsEnum} from "@/src/entities/schedule/week/weekAlternationLegendsEnum";

export interface Week {
    id: number;
    weekAlternation: WeekAlternationLegendsEnum;
    weekDays: WeekDays[];
}