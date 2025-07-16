import {startOfWeek, addWeeks} from 'date-fns';

export default function getMondayOfWeek(offset: number): Date {
    const now = new Date();
    const targetWeek = addWeeks(now, offset);
    return startOfWeek(targetWeek, {weekStartsOn: 1});
}