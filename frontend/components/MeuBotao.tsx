import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Botaoprops = {
  texto: string;
  onPress?: () => void;
  variante?: "padrao" | "trasparente" | "cadastro";
  style?: object;
};

export default function MeuBotao({
  texto,
  onPress,
  variante = "padrao",
  style,
}: Botaoprops) {
  const botaoStyle = [
    styles.botao,
    variante === "trasparente" && styles.botaotrans,
  ];
  const textStyle = [
    styles.textoBotao,
    variante === "trasparente" && styles.textoBotaoTrans,
    variante === "cadastro" && styles.botaosubmit
  ];

  return (
    <TouchableOpacity onPress={onPress} style={[botaoStyle, style]}>
      <Text style={textStyle}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 45,

    marginTop: 10,
    justifyContent: "center",
    borderRadius: 8,
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
  botaosubmit: {
    color: "#d0d0d0ff"
  }
});
