import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import MeuBotao from "./MeuBotao";
import { useState } from "react";
import Input from "./Input";
import Links, { link1, link2 } from "./Link";

let icon = require("../assets/images/data.png");
let icon2 = require("../assets/images/olhoon.png");
let icon3 = require("../assets/images/olhoof.png");
let icon4 = require("../assets/images/boy.png");
let icon5 = require("../assets/images/man.png");
let icon6 = require("../assets/images/girl.png");
let icon7 = require("../assets/images/woman.png");

export default function Formulario() {
  const [icono, seticon] = useState(icon2);
  const [texto, settexto] = useState(true);
  const [gen, setgen] = useState<"male" | "female" | null>(null);
  return (
    <View style={styles.formulario}>
      <Text style={{ fontSize: 14, marginBottom: 5, color: "#fff" }}>
        Data de nascimento
      </Text>
      <View>
        <Input place="Data" placeColor={"#747776"} />
        <Image
          source={icon}
          style={{ position: "absolute", left: 275, top: 5.5 }}
        ></Image>
      </View>
      <Text style={styles.textinp}>Nome de usuário</Text>
      <Input place="Não use seu nome real" placeColor="#CFD1D0" />
      <Text style={styles.textinp}>Senha</Text>
      <View>
        <Input
          place="Minimo 8 caracteres"
          placeColor="#CFD1D0"
          escodertexto={texto}
        />
        <TouchableOpacity
          onPress={() => {
            seticon(icono === icon2 ? icon3 : icon2);
            settexto(texto === true ? false : true);
          }}
          style={{
            position: "absolute",
            top: 5,
            right: 8,
          }}
        >
          <Image source={icono} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textinp}>Gênero (opcional)</Text>
      <View style={styles.genero}>
        <Pressable
          onPress={() => setgen("female")}
          style={[
            styles.botaogenero,
            gen === "female" ? styles.botaoativo : styles.botaogenero,
          ]}
        >
          <Image source={gen === "female" ? icon7 : icon6}></Image>
        </Pressable>
        <View style={styles.traco}></View>
        <Pressable
          onPress={() => setgen("male")}
          style={[
            styles.botaogenero,
            gen === "male" ? styles.botaoativo : styles.botaogenero,
          ]}
        >
          <Image source={gen === "male" ? icon5 : icon4}></Image>
        </Pressable>
      </View>
      <MeuBotao texto="Cadastrar-se" style={styles.cada} variante="cadastro" />
      <View>
        <Text style={styles.info}>
          Ao clicar em Cadastrar-se, você aceita os Termos de Uso (incluindo a
          cláusula de arbitragem) e a Política de Privacidade.
        </Text>
      </View>
      <Links
        style={styles.link}
        texto={["Termos", "Privacidade"]}
        link={[link1, link2]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    width: 350,
    height: 550,
    position: "absolute",
    top: 120,
    padding: 20,
  },
  genero: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 8,
    height: 50.5,
    flexDirection: "row",
    backgroundColor: "#191B1D",
    borderTopColor: "#CCC",
  },
  traco: {
    backgroundColor: "#fff",
    width: 1,
  },
  botaogenero: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoativo: {
    backgroundColor: "#fff",
    borderRadius: 2.6,
  },
  cada: {
    marginTop: 50,
    backgroundColor: "#0A7756",
  },
  info: {
    color: "#ccc",
    textAlign: "center",
    marginHorizontal: 30,
    marginTop: 4,
  },
  textinp: {
    fontSize: 14,
    marginTop: 10,
    color: "#fff",
    marginBottom: 5,
  },
  link: {
    top: 470,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
