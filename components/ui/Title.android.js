import { StyleSheet, Text, Platform } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS !== "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 3 }),
    borderWidth: 5,
    borderColor: "white",
    padding: 12,
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
    width: 300,
  },
});
