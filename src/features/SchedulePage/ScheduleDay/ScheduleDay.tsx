import {View, Text} from "react-native";
import {Week} from "@/src/entities/schedule/week/types";
import {globalStyles} from "@/src/shared/styles/globalStyles";
import {useThemeColors} from "@/src/shared/hooks/useThemeColor";
import ScheduleLessons from "@/src/features/SchedulePage/ScheduleLessons/ScheduleLessons";
import {styles} from "@/src/features/SchedulePage/ScheduleDay/ScheduleDay.style";

interface WeekProps {
    week: Week,
}

export default function ScheduleDay({week} : WeekProps) {
    const { textColor } = useThemeColors();

    return (
        <View>
            {week.weekDays.map((day) => (
                <View key={day.id} style={styles.dayBlock}>
                        <Text style={[globalStyles.fontB20, {color: textColor}]}>
                            {day.dayName}
                        </Text>
                    <ScheduleLessons weekDays={day} />
                </View>
            ))}
        </View>
    );
}