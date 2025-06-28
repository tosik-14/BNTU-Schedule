import {View, Text} from "react-native";
import {Schedule} from "@/src/entities/schedule/types";
import {globalStyles} from "@/src/shared/styles/globalStyles";
import {useThemeColors} from "@/src/shared/hooks/useThemeColor";
import ScheduleDay from "@/src/features/SchedulePage/ScheduleDay/ScheduleDay";

interface ScheduleProps {
    schedule: Schedule,
}

export default function ScheduleWeek({schedule} : ScheduleProps) {
    const { backgroundColor, textColor, upBackgroundColor } = useThemeColors();

    return (
        <View>
            {schedule.week.map((week) => (
                <View key={week.id}>
                    
                    <ScheduleDay week={week} />

                </View>
            ))}
        </View>

    );
}