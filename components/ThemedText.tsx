import { Text } from "react-native";

export default function ThemedText({ children, style }) {
    return (
        <Text style={[{ fontSize: 16, color: "#333" }, style]}>{children}</Text>
    );
}
