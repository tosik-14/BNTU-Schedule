import {Text, View} from "react-native";
import {globalStyles} from "@/src/shared/styles/globalStyles";
import {useThemeColors} from "@/src/shared/hooks/useThemeColor";
import {WeekDays} from "@/src/entities/schedule/week/weekDays/types";
import {styles} from "@/src/features/SchedulePage/ScheduleLessons/ScheduleLessons.style";
import {LessonTypeEnum} from "@/src/entities/schedule/week/weekDays/lesson/lessonTypeEnum";

interface WeekDaysProps {
    weekDays: WeekDays,
}

export default function ScheduleLessons({weekDays} : WeekDays){
    const { backgroundColor, upBackgroundColor, textColor, metaTextColor } = useThemeColors();

    return (
        <View>
            {weekDays.lessons.map((lesson) => (
                <View key={lesson.id} style={[styles.lessonBlock, {backgroundColor: upBackgroundColor}]}>
                    <View style={[globalStyles.columnWrapper, styles.lessonTime]}>
                        <Text style={[globalStyles.fontB16, {color: metaTextColor}]}>
                            {lesson.time.start}
                        </Text>
                        <Text style={[globalStyles.fontB16, {color: metaTextColor}]}>
                            {lesson.time.end}
                        </Text>
                    </View>

                    <View style={[styles.typeMarker, {backgroundColor:
                            lesson.type === LessonTypeEnum.ForAllGroup ? '#FFFF5D' : '#99FF7B'}]}
                    >
                    </View>

                    <View style={[globalStyles.rowWrapper, styles.lessonInfo]}>

                        <View>
                            <Text style={[globalStyles.fontB16, {color: textColor}]}>
                                {lesson.subject}
                            </Text>
                        </View>

                        <View style={[globalStyles.columnWrapper, styles.audienceAndTeacher]}>
                            <Text style={[globalStyles.fontR16, {color: textColor}]}>
                                {lesson.audience}
                            </Text>
                            <Text style={[globalStyles.fontR16, {color: textColor}]}>
                                {lesson.teacher.title}{' '}{lesson.teacher.name}
                            </Text>
                        </View>

                    </View>

                </View>
            ))}
        </View>
    );
}