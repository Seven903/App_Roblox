import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import MeuBotao from "./MeuBotao";
import Input from "./Input";
import { useState } from "react";
import Links from "./Link";

let icon = require("../assets/images/olhoon.png");
let icon2 = require("../assets/images/olhoof.png");

export default function FormLog() {
  const [icono, seticon] = useState(icon);
  const [texto, settexto] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <Input
          style={styles.inp}
          place="Usuario/e-mail/telefone"
          placeColor="#747776"
        />
        <View>
          <Input
            style={styles.inp}
            place="Senha"
            placeColor="#747776"
            escodertexto={texto}
          />
          <TouchableOpacity
            onPress={() => {
              seticon(icono === icon ? icon2 : icon);
              settexto(texto === true ? false : true);
            }}
            style={{
              position: "absolute",
              top: 7,
              right: 8,
            }}
          >
            <Image source={icono} />
          </TouchableOpacity>
        </View>
        <View style={styles.botoes}>
          <MeuBotao style={styles.bt} texto="Entrar" />
          <MeuBotao
            style={{ opacity: 0.5 }}
            texto="Entrar com outro dispositivo"
            variante="trasparente"
          />
        </View>
        <Text style={styles.txt}>Esqueceu a senha ou nome de usuario?</Text>
        <Links
          style={styles.link}
          texto={["Termos", "Privacidade"]}
          link={[
            "https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use",
            "https://en.help.roblox.com/hc/en-us/articles/115004630823-Roblox-Privacy-and-Cookie-Policy",
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
  width: 350,
  minHeight: 490,
  borderRadius: 10,
  padding: 20,
  marginTop: 80,

},
  inp: {
    marginBottom: 35,
    height: 36,
  },
 botoes: {
  marginTop: 10,
},
  bt: {
    marginBottom: 25,
    opacity: 0.6,
  },
  txt: {
    color: "#b6b5b5ff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
    marginTop: 15,
  },
  link: {
    bottom: "25%",
    left: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
