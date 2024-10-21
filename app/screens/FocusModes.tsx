import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function FocusModesScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose a Focus Mode</Text>
            <Button
                title="Basic (25 mins)"
                onPress={() =>
                    navigation.navigate("Timer", {
                        mode: "Basic",
                        duration: 25,
                    })
                }
            />
            <Button
                title="Intermediate (45 mins)"
                onPress={() =>
                    navigation.navigate("Timer", {
                        mode: "Intermediate",
                        duration: 45,
                    })
                }
            />
            <Button
                title="Advanced (1 hour)"
                onPress={() =>
                    navigation.navigate("Timer", {
                        mode: "Advanced",
                        duration: 60,
                    })
                }
            />
            <Button
                title="Expert (2 hours)"
                onPress={() =>
                    navigation.navigate("Timer", {
                        mode: "Expert",
                        duration: 120,
                    })
                }
            />
            <Button
                title="Divine (4 hours)"
                onPress={() =>
                    navigation.navigate("Timer", {
                        mode: "Divine",
                        duration: 240,
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
