import Background from "@/components/Brackground";
import Title from "@/components/Title";
import { useFonts } from "expo-font";
import Botoes from "@/components/Botao";
import Links, { link1, link2 } from "@/components/Link";
import { View, StyleSheet } from "react-native";

export let back = require("..//../assets/images/roblox.jpg");


export default function App() {
   
  
  return (
    <View style={styles.container}>
      <Background image={back}>
        <View style={styles.top}>
          <Title textContent="ROBLOX"/>
        </View>
        <Botoes />
        <Links texto={["Termos", "Privacidade"]} link={[link1, link2]} />
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    marginTop: 60,
    alignItems: "center",
  },
});
