import { Button, Text, TextInput, View } from "react-native";
import styles from "../config/styles";


export default function Search(){
    return(
        <View style= {styles.container}>
            <Text style= {styles.h1}>Pesquisar músicas</Text>
            <TextInput
                style= {styles.inputText}
                label= "Pesquisar"
            />
            <Button
                title= "Pesquisar"
                onPress= {() => navigation.navigate('Search')}
            />
        </View>
    )
}