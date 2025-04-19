import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Gerenciamento</Text>
      <Text style={styles.label}>Usuário:</Text>
      <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} />
      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Entrar" onPress={() => {}} />
      <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#18365a', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, color: '#fff', marginBottom: 20 },
  label: { color: '#fff', alignSelf: 'flex-start', marginLeft: 50 },
  input: { width: '80%', padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 5 }
});
