import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Background from "@/components/Brackground";
import Title from "@/components/Title";
import Botoes from "@/components/Botao";
import Links, { link1, link2 } from "@/components/Link";
import { getToken } from "../src/services/auth";

export let back = require("../assets/images/roblox.jpg");

export default function App() {
  const [checkingAuth, setCheckingAuth] = useState(true); // controla checagem de token
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const token = await getToken();
      if (token) {
        // usuário já logado → vai direto para Home
        router.replace("/home");
      } else {
        // não tem token → mostra tela inicial
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, [router]);

  // enquanto checa token → não renderiza nada
  if (checkingAuth) return null;

  return (
    <View style={styles.container}>
      <Background image={back}>
        <View style={styles.top}>
          <Title textContent="ROBLOX" />
        </View>

        {/* Botões com navegação para Login / Cadastro */}
        <Botoes
          onLogin={() => router.push("/LoginScreen")}
          onSign={() => router.push("/SingnScreen")}
        />

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
