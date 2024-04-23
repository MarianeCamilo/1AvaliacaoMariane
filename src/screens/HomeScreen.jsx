import { Text, View } from "react-native";
import styles from "../config/styles";

export default function HomeScreen() {
  return (
    <View styles={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.selfCenter}>Página Inicial</Text>
          <Text style={styles.h1}>Quem Somos</Text>
          <Text>
            A empresa foi fundada em 2021 com o objetivo de fornecer serviços de qualidade para a comunidade.
          </Text>
      </View>
    </View>
  );
}
