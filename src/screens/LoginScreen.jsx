import { View } from "react-native";
import styles from "../config/styles";
import { Button, Text, TextInput } from "react-native-paper";


export default function LoginScreen({navigation}{
    return(
        <View style= {styles.container}>
            <View style= {styles.innerContainer}>
                <Text style= {styles.h1}>Login</Text>
                <TextInput
                    style= {styles.inputText}
                    placeholder= "Digite seu email"
                />
                <View style= {styles.espacamentoDelicado}></View>
                <TextInput
                    style= {styles.inputText}
                    placeholder= "Digite sua senha"
                />
                <View style= {styles.espacamentoDelicado}></View>
                <Button
                    title= "Entrar"
                    onPress= {() => navigation.navigate('Home')}
                />
                <Text style= {styles.corDestaque}>Não tem uma conta? Cadastre-se</Text>
            </View>
        </View>
    )
}