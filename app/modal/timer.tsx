import { Text, View } from "@/src/components/Themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const modeDurations = {
    basic: 25,
    intermediate: 45,
    advanced: 60,
    expert: 120,
    divine: 240,
};

export default function TimerModal() {
    const { mode } = useLocalSearchParams();
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(
        modeDurations[mode as keyof typeof modeDurations] * 60
    );
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => time - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            // Handle timer completion
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {mode?.charAt(0).toUpperCase() + mode?.slice(1)} Mode
            </Text>

            <Text style={styles.timer}>{formatTime(timeLeft)}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setIsActive(!isActive)}
            >
                <Text style={styles.buttonText}>
                    {isActive ? "Pause" : "Start"}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => router.back()}
            >
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    timer: {
        fontSize: 72,
        fontWeight: "bold",
        marginVertical: 40,
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 15,
        borderRadius: 25,
        width: 200,
        alignItems: "center",
        marginVertical: 10,
    },
    cancelButton: {
        backgroundColor: "#F44336",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
