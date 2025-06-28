import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    lessonBlock:{
        flex: 1,
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        //marginHorizontal: 8,
        borderRadius: 15,
    },

    lessonTime: {
        marginHorizontal: 12,
        marginVertical: 8,
        justifyContent: 'center',
        gap: 5,
    },

    typeMarker: {
        height: "100%",
        width: 15,
    },

    lessonInfo: {
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 8,
        justifyContent: 'space-between',
    },

    audienceAndTeacher: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

})