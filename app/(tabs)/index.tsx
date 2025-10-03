
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Linking,
} from "react-native";




export default function App() {
  let [t1, t2] = ["Termos", "Privacidade"];

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagem}
        source={require("..//../assets/images/roblox.jpg")}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.topo}>
          <Text style={styles.texto}>ROBLOX</Text>
        </View>
        <View style={styles.areaBotoes}>
          <TouchableOpacity onPress={() => router.push("/(tabs)/SingnScreen")} style={styles.botao}>
            <Text style={styles.textoBotao}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaotrans]}>
            <Text style={[styles.textoBotao, styles.textoBotaoTrans]}>
              Iniciar sessão
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.links}>
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use"
              )
            }
          >
            <Text style={styles.textoLink}>{t1}</Text>
          </Pressable>
          <Text style={styles.espaco}>-</Text>
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://en.help.roblox.com/hc/en-us/articles/115004630823-Roblox-Privacy-and-Cookie-Policy"
              )
            }
          >
            <Text style={styles.textoLink}>{t2}</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 5,
    // borderColor: "green",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 55,
    color: "#ffffffff",
    letterSpacing: 5,
    // borderWidth: 5,
    // borderColor: "red",
  },
  imagem: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 5,
    // borderColor: "red",
  },
  botao: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 45,

    marginTop: 10,
    justifyContent: "center",
    borderRadius: 8,
  },
  topo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 5,
  },
  areaBotoes: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 65,
    paddingBottom:10,
    // borderWidth: 5,
    width: "95%",
    alignItems: "center",
  },

  textoBotao: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#5c5757ff",
  },
  botaotrans: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "#FFF",
  },
  textoBotaoTrans: {
    color: "#9e9b9bff",
  },
  links: {
    // borderWidth: 5,
    // borderColor: "purple",
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    top: 690,
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(24,24,24,0.5)",
  },
});
