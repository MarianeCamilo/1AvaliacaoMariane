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
                    label="Email"
                    mode="outlined"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    />
                    <TextInput
                    label="Senha"
                    mode="outlined"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                    />
                    <Button onPress={() => navigation.navigate("RecuperarSenhaScreen")}>
                    Recuperar senha
                    </Button>
                    <Button onPress={() => navigation.navigate("RegistroScreen")}>
                    Registre-se
                    </Button>
                    <Button
                    mode="outlined"
                    // style="margin-top: 10px;" html
                    style={{
                        // em react-native
                        marginTop: 10,
                        maxWidth: 260,
                        alignSelf: "flex-end",
                    }}
                    onPress={fazerLogin}
                    >
                    Entrar
                    </Button>
            </View>
        </View>
    )

}