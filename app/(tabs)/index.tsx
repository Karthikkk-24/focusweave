import { Tabs } from "expo-router";

export default function AppTabs() {
    return (
        <Tabs>
            <Tabs.Screen name="explore" options={{ title: "Explore" }} />
            <Tabs.Screen name="focus" options={{ title: "Focus Modes" }} />
        </Tabs>
    );
}
