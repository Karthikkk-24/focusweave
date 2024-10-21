import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#4CAF50" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
            }}
        >
            <Stack.Screen
                name="(tabs)/explore"
                options={{ title: "Explore" }}
            />
            <Stack.Screen
                name="(tabs)/focus"
                options={{ title: "Focus Modes" }}
            />
        </Stack>
    );
}
