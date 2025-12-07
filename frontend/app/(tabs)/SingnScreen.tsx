import { View, StyleSheet } from "react-native";
import Title from "@/components/Title";
import Formulario from "@/components/Form";

export default function SignScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title textContent="Cadastrar-se" style={styles.titulo} />
        <View style={styles.linha} />
      </View>
      <Formulario />
      <View style={styles.linha} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373B3C",
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingTop: 40,
    alignItems: "center",
  },

  titulo: {
    fontSize: 25,
    color: "#fff",
    marginBottom: 4, 
  },

  linha: {
    width: "100%",
    height: 2,
    backgroundColor: "#7b8284ff",
  },
});
