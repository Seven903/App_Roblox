import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";

type Formprops = {
  place: string;
  placeColor: string;
  onChangeText?: (text: string) => void;
  escodertexto?: boolean;
  style?: object;
};

export default function Input({
  place,
  placeColor,
  escodertexto,
  style,
  onChangeText,
}: Formprops) {
  const [foco, setfoco] = useState(false);

  return (
    <TextInput
      style={[styles.input, foco && styles.foco, style]}
      multiline={false}
      placeholder={place}
      placeholderTextColor={placeColor}
      textAlignVertical="center"
      secureTextEntry={escodertexto}
      onFocus={() => setfoco(true)}
      onChangeText={onChangeText}
      onBlur={() => setfoco(false)}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#101310",
    height: 33,
    borderRadius: 8,
    fontSize: 15,
    color: "#fff",
    borderColor: "#919191ff",
    borderWidth: 0.5,
    lineHeight: 15,
    paddingVertical: 0,
    paddingHorizontal: 8,
    textAlignVertical: "center",
  },
  foco: {
    borderColor: "#fff",
    borderWidth: 1,
  },
});
