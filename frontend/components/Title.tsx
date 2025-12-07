import { View, Text, StyleSheet } from "react-native";
import { ReactNode } from "react";

type Titleprops = {
  textContent: ReactNode;
  style?: object
};

export default function Title({ textContent, style }: Titleprops) {
  return (
    <View>
      <Text style={[styles.title,style]}>{textContent}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 55,
    color: "#ffffffff",
    letterSpacing: 2,
    // borderWidth: 5,
    // borderColor: "red",
  },
});
