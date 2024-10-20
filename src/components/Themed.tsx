import { Text as RNText, View as RNView } from "react-native";

export const Text = ({ style, ...props }) => (
    <RNText style={[style]} {...props} />
);

export const View = ({ style, ...props }) => (
    <RNView style={[style]} {...props} />
);
