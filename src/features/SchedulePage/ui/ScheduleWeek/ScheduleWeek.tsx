import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Week } from '@/src/entities/schedule/week/types';
import { Schedule } from '@/src/entities/schedule/types';
import ScheduleLessons from '@/src/features/SchedulePage/ui/ScheduleLessons/ScheduleLessons';
import getVirtualWeek from '@/src/features/SchedulePage/lib/getVirtualWeek';
import { globalStyles } from '@/src/shared/styles/globalStyles';
import { useThemeColors } from '@/src/shared/hooks/useThemeColor';
import { styles } from './ScheduleWeek.style';

interface ScheduleProps {
    schedule: Schedule;
}

export default function ScheduleWeek({ schedule }: ScheduleProps) {
    const [weekOffset, setWeekOffset] = useState(0);
    const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
    const scrollViewRef = useRef<ScrollView | null>(null);
    const { textColor } = useThemeColors();

    useEffect(() => {
        const virtualWeek = getVirtualWeek(weekOffset, schedule);
        setSelectedWeek(virtualWeek);
    }, [weekOffset, schedule]);

    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const offsetY = contentOffset.y;
        const maxOffsetY = contentSize.height - layoutMeasurement.height;

        if (offsetY <= 0) {
            setWeekOffset(prev => prev - 1);
        } else if (offsetY >= maxOffsetY) {
            setWeekOffset(prev => prev + 1);
        }
    };

    if (!selectedWeek) return null;

    return (
        <ScrollView
            ref={scrollViewRef}
            onScrollEndDrag={handleScrollEnd}
            scrollEventThrottle={16}
        >
            {selectedWeek.weekDays.map((day) => (
                <View key={day.id} style={styles.dayBlock}>
                    <View style={styles.dayBlockTitle}>
                        <View>
                            <Text style={[globalStyles.fontSB16, { color: textColor }]}>
                                {day.dayName}
                            </Text>
                            <Text style={[globalStyles.fontSB16, { color: textColor }]}>
                                {day.date}
                            </Text>
                        </View>
                        <View style={styles.weekNumber}>
                            <Text style={[globalStyles.fontSB14, { color: textColor }]}>
                                {'нед. '}{selectedWeek?.weekAlternation}
                            </Text>
                        </View>
                    </View>
                    <ScheduleLessons weekDays={day} />
                </View>
            ))}
        </ScrollView>
    );
}