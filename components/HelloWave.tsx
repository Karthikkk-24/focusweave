import { StyleSheet, Text, View } from "react-native";

export default function HelloWave() {
    return (
        <View style={styles.container}>
            <Text style={styles.waveText}>👋 Welcome to FocusWeave!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    waveText: { fontSize: 24, fontWeight: "bold", color: "#3A3A3A" },
});
