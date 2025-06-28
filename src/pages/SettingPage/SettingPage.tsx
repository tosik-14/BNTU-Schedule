import { View, Text } from "react-native";
import {useThemeColors} from "@/src/shared/hooks/useThemeColor";
import {styles} from "@/src/pages/SettingPage/SettingPage.styles";
import {globalStyles} from "@/src/shared/styles/globalStyles";

export default function SettingPage(){

    const { backgroundColor, textColor } = useThemeColors()

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Text style={[globalStyles.fontB20, {color: textColor}]}>
                Hello SETTINGS
            </Text>
        </View>
    );
}