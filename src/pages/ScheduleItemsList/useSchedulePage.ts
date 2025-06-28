import {useEffect, useState} from "react";
import {Schedule} from "@/src/entities/schedule/types";
import {getSchedule} from "@/src/entities/schedule/api/getSchedule";

export default function useSchedulePage(){
    const [schedule, setSchedule] = useState<Schedule | null>(null);

    useEffect(() => {
        const scheduleJson = getSchedule(10701123, 1);
        if(scheduleJson) setSchedule(scheduleJson);
    }, []);

    return {
        schedule,
    };
};