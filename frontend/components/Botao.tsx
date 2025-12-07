import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import MeuBotao from "./MeuBotao";

export default function Botoes() {
  return (
    <View style={styles.areaBotoes}>
      <MeuBotao
        texto="Cadastrar-se"
        onPress={() => router.push("/SingnScreen")}
      />
      <MeuBotao
        texto="Iniciar sessão"
        onPress={() => router.push("/LoginScreen")}
        variante="trasparente"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  areaBotoes: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 65,
    paddingBottom: 10,
    // borderWidth: 5,
    width: "95%",
    alignItems: "center",
  },
});
