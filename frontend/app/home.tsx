import { View, Text, Button } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import { getToken, removeToken } from "@/src/services/auth";

export default function AppHome() {
  useEffect(() => {
    async function check() {
      const token = await getToken();
      if (!token) {
        router.replace("/LoginScreen");
      }
    }
    check();
  }, []);

  async function logout() {
    await removeToken();
    router.replace("/LoginScreen");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Área logada ate que enfim</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}
