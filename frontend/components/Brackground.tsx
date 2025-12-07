import {
  View,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { ReactNode } from "react";

type Backgroundprops = {
  children?: ReactNode;
  image: ImageSourcePropType;
};

export default function Background({ children, image }: Backgroundprops) {
  return (
<ImageBackground
  source={image}
  style={styles.bg}
>
  <View style={styles.overlay} />
  <View style={styles.content}>{children}</View>
</ImageBackground>

  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.5,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative", 
  },
});
