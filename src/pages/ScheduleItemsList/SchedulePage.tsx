import {View, Text, ScrollView } from "react-native";
import {styles} from "@/src/pages/ScheduleItemsList/SchedulePage.style";
import {globalStyles} from "@/src/shared/styles/globalStyles";
import {useThemeColors} from "@/src/shared/hooks/useThemeColor";
import useSchedulePage from "@/src/pages/ScheduleItemsList/useSchedulePage";
import ScheduleWeek from "@/src/features/SchedulePage/ui/ScheduleWeek/ScheduleWeek";

export default function SchedulePage () {

    const { backgroundColor, textColor } = useThemeColors();

    const {schedule} = useSchedulePage();

    if (!schedule) return <Text>Загрузка...</Text>;

    return (
        <ScrollView style={[styles.container, { backgroundColor }]}>

            <ScheduleWeek schedule={schedule}/>

        </ScrollView>
    );
}