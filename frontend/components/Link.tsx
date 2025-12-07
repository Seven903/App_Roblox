import { View, Pressable, Text, Linking, StyleSheet } from "react-native";

type Linkprops = {
  texto: [string, string];
  link: [string, string];
  style?: object;
};

export const link1 =
  "https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use";
export const link2 =
  "https://en.help.roblox.com/hc/en-us/articles/115004630823-Roblox-Privacy-and-Cookie-Policy";

export default function Links({ texto, link, style }: Linkprops) {
  return (
    <View style={[styles.links, style]}>
      <Pressable onPress={() => Linking.openURL(link[0])}>
        <Text style={styles.textoLink}>{texto[0]}</Text>
      </Pressable>
      <Text style={styles.espaco}>-</Text>
      <Pressable onPress={() => Linking.openURL(link[1])}>
        <Text style={styles.textoLink}>{texto[1]}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  links: {
    // borderWidth: 5,
    // borderColor: "purple",
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    bottom: "5.5%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  textoLink: {
    color: "#59a9e4",
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 7,
    paddingLeft: 5,
    textDecorationLine: "underline",
  },
  espaco: {
    color: "#FFF",
    fontSize: 25,
  },
});
