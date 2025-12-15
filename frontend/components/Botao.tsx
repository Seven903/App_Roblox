import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import MeuBotao from "./MeuBotao";

type botaoProps = {
  onLogin?: () => void;
  onSign?: () => void;
};

export default function Botoes({ onLogin, onSign }: botaoProps) {
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
