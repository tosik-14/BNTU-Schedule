import {LessonTypeEnum} from "@/src/entities/schedule/week/weekDays/lesson/lessonTypeEnum";

export interface Lesson {
    id: string,
    time: {
        start: string,
        end: string,
    },
    subject: string,
    teacher: {
        name: string,
        title: string,
    },
    audience: string,
    type: LessonTypeEnum,
}