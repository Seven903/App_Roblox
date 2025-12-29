import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
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

type Formprops = {
  onSucess?: () => void;
};

export default function Formulario({ onSucess }: Formprops) {
  const [icono, seticon] = useState(icon2);
  const [texto, settexto] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const buscarApi = async () => {
    const usuario = {
      user: user,
      password: password,
      dataNascimento: dataNascimento,
      genero: gen,
    };
    if (!user.trim() || !password.trim() || !dataNascimento.trim()) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const resposta = await fetch("http://192.168.0.103:3000/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!resposta.ok) {
      Alert.alert("Erro ao cadastrar");
      return;
    }
    onSucess?.();
    const data = await resposta.json();
    console.log("Resposta: " + JSON.stringify(data));
  };

  const [gen, setgen] = useState<"male" | "female" | null>(null);
  return (
    <View style={styles.formulario}>
      <Text style={{ fontSize: 14, marginBottom: 5, color: "#fff" }}>
        Data de nascimento
      </Text>
      <View>
        <Input
          place="Data"
          placeColor={"#747776"}
          onChangeText={setDataNascimento}
        />
        <Image
          source={icon}
          style={{ position: "absolute", left: 275, top: 5.5 }}
        ></Image>
      </View>
      <Text style={styles.textinp}>Nome de usuário</Text>
      <Input
        place="Não use seu nome real"
        placeColor="#CFD1D0"
        onChangeText={setUser}
      />
      <Text style={styles.textinp}>Senha</Text>
      <View>
        <Input
          place="Minimo 8 caracteres"
          placeColor="#CFD1D0"
          escodertexto={texto}
          onChangeText={setPassword}
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
      <MeuBotao
        texto="Cadastrar-se"
        style={styles.cada}
        variante="cadastro"
        onPress={buscarApi}
      />
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
