import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TimerScreen() {
    const route = useRoute();
    const { mode, duration } = route.params;
    const [timeLeft, setTimeLeft] = useState(duration * 60); // convert minutes to seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{mode} Mode</Text>
            <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
            <Button
                title={isRunning ? "Pause" : "Start"}
                onPress={isRunning ? stopTimer : startTimer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
    timer: { fontSize: 48, marginVertical: 20 },
});
