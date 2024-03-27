import { Button, Text, TextInput, View } from "react-native";
import styles from "../config/styles";
import { useState } from "react";


export default function LoginScreen({navigation}){
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    async function handleLogin(){
        setLoading(true);
        try{
            navigation.navigate("HomeScreen");
        } catch (error){
            setError("Usuário ou senha inválidos");
        }
    }

    return(
        <View style= {styles.container}>
            <View style= {styles.innerContainer}>
                <Text style= {styles.h1}>Login</Text>
                <TextInput
                    style= {styles.inputText}
                    label= "Usuário"
                    value= {usuario}
                    onChangeText= {setUsuario}
                />
                <TextInput
                    style= {styles.inputText}
                    label= "Senha"
                    value= {senha}
                    onChangeText= {setSenha}
                    secureTextEntry
                />
                <Button
                style={styles.spaceTop}
                mode="contained"
                onPress={handleLogin}
                loading={loading}
                >
                  Entrar
                </Button>
                <Button onPress={() => navigation.navigate("RecoveryPasswordScreen")}>
                  Esqueci minha senha
                </Button>
                <Button onPress={() => navigation.navigate("RegisterScreen")}>
                  Cadastre-se
                </Button>
            </View>
        </View>
    )

}