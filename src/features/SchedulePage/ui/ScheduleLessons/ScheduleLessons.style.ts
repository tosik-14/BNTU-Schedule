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
        shadowColor: '#444444',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 1},
        elevation: 1,
    },

    lessonTime: {
        marginHorizontal: 12,
        marginVertical: 8,
        justifyContent: 'center',
        gap: 5,
        width: 45,
    },
    textTime: {
        textAlign: 'center',
    },

    typeMarker: {
        height: "100%",
        width: 10,
        //marginRight: 5,
    },

    lessonInfo: {
        flex: 1,
        marginHorizontal: 13,
        marginVertical: 8,
        justifyContent: 'space-between',
    },

    audienceAndTeacher: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

})