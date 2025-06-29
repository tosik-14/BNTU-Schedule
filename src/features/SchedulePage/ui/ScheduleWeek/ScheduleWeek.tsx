import {View, Text} from "react-native";
import {Schedule} from "@/src/entities/schedule/types";
import {globalStyles} from "@/src/shared/styles/globalStyles";
import {useThemeColors} from "@/src/shared/hooks/useThemeColor";
import ScheduleDay from "@/src/features/SchedulePage/ui/ScheduleDay/ScheduleDay";
import {styles} from '@/src/features/SchedulePage/ui/ScheduleWeek/ScheduleWeek.style'

interface ScheduleProps {
    schedule: Schedule,
}

export default function ScheduleWeek({schedule} : ScheduleProps) {
    const { backgroundColor, textColor, upBackgroundColor } = useThemeColors();

    return (
        <View>
            {schedule.week.map((week) => (
                <View key={week.id} style={styles.weekBlock}>
                    
                    <ScheduleDay week={week} />

                </View>
            ))}
        </View>

    );
}