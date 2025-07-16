import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    weekBlock: {
        marginBottom: 100,
    },

    dayBlock: {
        marginHorizontal: 8,
        marginTop: 30,
    },
    dayBlockTitle: {
        flex: 1,
        marginHorizontal: 13,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    weekNumber: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});