import { Stack } from "expo-router";
import { useCachedResources } from "@/src/shared/hooks/resources/useCachedResources";
import { View, ActivityIndicator } from "react-native";
import { useThemeColors } from "@/src/shared/hooks/useThemeColor";
import { CheckInternetProvider } from "@/src/app-providers/CheckInternerProvider/CheckInternetProvider";

export default function RootLayout() {
    const isReady = useCachedResources();

    const { tintBackground } = useThemeColors();

    if (!isReady) {
        return (
            <CheckInternetProvider>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: tintBackground,
                        }}
                    >
                        <ActivityIndicator size="large" />
                    </View>
            </CheckInternetProvider>
        );
    }

    return (
        <CheckInternetProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
        </CheckInternetProvider>
    );
}
