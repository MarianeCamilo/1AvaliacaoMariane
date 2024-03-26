import { Button, Text, View } from "react-native";
import styles from "../config/styles";

export default function HomeScreen(){
    return(
        <View style= {styles.container}>
            <Text style= {styles.h1}Seja bem vindo ao Dark Music></Text>
            <Button
                tittle= "Pesquisar músicas"
                onPress= {() => navigation.navigate('Search')}
            />

        </View>
    )
}