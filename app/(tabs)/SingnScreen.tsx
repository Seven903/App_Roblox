import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";

export default function SignScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("..//../assets/images/roblox.jpg")}
        resizeMode="cover"
      >
        <View style={styles.topo}>
          <Text style={styles.title}>Cadastrar-se</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.input}>Seu Usuario</TextInput>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: "rgba(7, 254, 7, 1)",
    flex: 1,
    backgroundColor: "#100f0fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    borderWidth: 5,
    borderColor: "rgba(7, 233, 254, 1)",
    fontSize: 30,
    color: "#fff9f9ff",
    fontWeight: "bold",
  },
  topo: {
    borderWidth: 5,
    borderColor: "rgba(254, 205, 7, 1)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "red",
  },
  form: {
    borderWidth: 3,
    borderColor: "#fff",
  },
  input: {
    borderWidth: 4,
    borderColor: "blue"
  }
});
