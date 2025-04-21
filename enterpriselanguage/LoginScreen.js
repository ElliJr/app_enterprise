import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    try {
      const dadosSalvos = await AsyncStorage.getItem('usuarios');
      const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      const usuarioEncontrado = usuarios.find(
        (u) => u.email === usuario && u.senha === senha
      );

      if (usuarioEncontrado) {
        navigation.navigate('Home'); // Login com sucesso
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao acessar os dados');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Gerenciamento</Text>
      <Text style={styles.label}>Usuário (email):</Text>
      <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} />
      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Entrar" onPress={fazerLogin} />
      <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#18365a', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 24, 
    color: '#fff', 
    marginBottom: 20 
  },
  label: { 
    color: '#fff', 
    alignSelf: 'flex-start', 
    marginLeft: 50 
  },
  input: { 
    width: '80%', 
    padding: 10, 
    marginVertical: 5, 
    backgroundColor: '#fff', 
    borderRadius: 5 
  }
});
