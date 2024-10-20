import { Text, View } from "@/src/components/Themed";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FocusWeave</Text>

            <View style={styles.focusModes}>
                <Link href="/modal/timer?mode=basic" style={styles.modeLink}>
                    <View
                        style={[
                            styles.modeCard,
                            { backgroundColor: "#4CAF50" },
                        ]}
                    >
                        <Text style={styles.modeTitle}>Basic Mode</Text>
                        <Text style={styles.modeDuration}>25 Minutes</Text>
                    </View>
                </Link>

                <Link
                    href="/modal/timer?mode=intermediate"
                    style={styles.modeLink}
                >
                    <View
                        style={[
                            styles.modeCard,
                            { backgroundColor: "#2196F3" },
                        ]}
                    >
                        <Text style={styles.modeTitle}>Intermediate</Text>
                        <Text style={styles.modeDuration}>45 Minutes</Text>
                    </View>
                </Link>

                <Link href="/modal/timer?mode=advanced" style={styles.modeLink}>
                    <View
                        style={[
                            styles.modeCard,
                            { backgroundColor: "#9C27B0" },
                        ]}
                    >
                        <Text style={styles.modeTitle}>Advanced</Text>
                        <Text style={styles.modeDuration}>1 Hour</Text>
                    </View>
                </Link>

                <Link href="/modal/timer?mode=expert" style={styles.modeLink}>
                    <View
                        style={[
                            styles.modeCard,
                            { backgroundColor: "#FF9800" },
                        ]}
                    >
                        <Text style={styles.modeTitle}>Expert</Text>
                        <Text style={styles.modeDuration}>2 Hours</Text>
                    </View>
                </Link>

                <Link href="/modal/timer?mode=divine" style={styles.modeLink}>
                    <View
                        style={[
                            styles.modeCard,
                            { backgroundColor: "#F44336" },
                        ]}
                    >
                        <Text style={styles.modeTitle}>Divine</Text>
                        <Text style={styles.modeDuration}>4 Hours</Text>
                    </View>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 20,
    },
    focusModes: {
        width: "100%",
        gap: 15,
    },
    modeLink: {
        width: "100%",
    },
    modeCard: {
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
    },
    modeTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    modeDuration: {
        fontSize: 14,
        color: "white",
        opacity: 0.9,
    },
});
