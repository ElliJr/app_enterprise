import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import RNFS from 'react-native-fs';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const saveUser = async () => {
    const filePath = RNFS.DocumentDirectoryPath + '/usuarios.json';
    let users = [];

    try {
      const fileExists = await RNFS.exists(filePath);
      if (fileExists) {
        const data = await RNFS.readFile(filePath);
        users = JSON.parse(data);
      }
      users.push({ Nome: nome, email: email, senha: senha });
      await RNFS.writeFile(filePath, JSON.stringify(users), 'utf8');
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro', 'Falha ao salvar o usuário.');
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Salvar" onPress={saveUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#18365a', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, color: '#fff', marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 5 }
});
