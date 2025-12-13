import { View, StyleSheet,} from "react-native";
import Background from "@/components/Brackground";
import Title from "@/components/Title";
import FormLog from "@/components/FormLog";

export let back = require("..//../assets/images/roblox.jpg");


export default function Login() {
  return (
    <View style={styles.Container}>
      <Background image={back}>
        <View style={styles.top}>
          <Title textContent="ROBLOX" />
        </View>

        <FormLog />
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  top: {
    marginTop: 60,
    alignItems: "center",
  },
  close: {
    backgroundColor: "#fff",
    transform: "scale(0.6)",
    borderColor: "red",
    borderWidth: 2,
  },
  closeArea: {
    borderColor: "green",
    borderWidth: 4,
    width: "100%",
  },
});
