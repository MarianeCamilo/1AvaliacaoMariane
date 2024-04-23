import {  View } from "react-native";
import styles from "../config/styles";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View styles={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant="headlineLarge">
          Página Inicial</Text>
        <Text variant="headlineMedium">
          Quem Somos</Text>
        <Text variant="headlineSmall">
          A empresa foi fundada em 2021 com o objetivo de fornecer serviços de
          qualidade para a comunidade.
        </Text>
      </View>
    </View>
  );
}
