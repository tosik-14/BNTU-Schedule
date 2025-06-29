import {View, Text} from "react-native";
import {Week} from "@/src/entities/schedule/week/types";
import {globalStyles} from "@/src/shared/styles/globalStyles";
import {useThemeColors} from "@/src/shared/hooks/useThemeColor";
import ScheduleLessons from "@/src/features/SchedulePage/ui/ScheduleLessons/ScheduleLessons";
import {styles} from "@/src/features/SchedulePage/ui/ScheduleDay/ScheduleDay.style";

interface WeekProps {
    week: Week,
}

export default function ScheduleDay({week} : WeekProps) {
    const { textColor } = useThemeColors();

    return (
        <View>
            {week.weekDays.map((day) => (
                <View key={day.id} style={[styles.dayBlock]}>
                    <View style={styles.dayBlockTitle}>
                        <View>
                            <Text style={[globalStyles.fontSB16, {color: textColor}]}>
                                {day.dayName}
                            </Text>
                        </View>

                        <View style={styles.weekNumber}>
                            <Text style={[globalStyles.fontSB14, {color: textColor}]}>
                                {'нед. '}{week.weekAlternation}
                            </Text>
                        </View>
                    </View>

                    <ScheduleLessons weekDays={day} />
                </View>
            ))}
        </View>
    );
}