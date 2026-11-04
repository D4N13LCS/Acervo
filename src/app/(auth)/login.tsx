
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { entrar } = useAuth();
  const router = useRouter();

  function handleLogin() {
    if (!email.trim() || !senha.trim()) return;

    entrar(email.trim());
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>BIBLIOTECA DIGITAL</Text>
        <Text style={styles.logo}>Acervo.</Text>
        <Text style={styles.description}>
          Um espaço para descobrir, reunir e revisitar histórias.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Bem-vindo de volta.</Text>
        <Text style={styles.formDescription}>
          Entre para acessar sua biblioteca.
        </Text>

        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#A39A90"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#A39A90"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar na biblioteca</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        LEITURA, MEMÓRIA E DESCOBERTA.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3ED',
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    paddingTop: 90,
    paddingBottom: 35,
  },
  header: {
    gap: 12,
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 3,
    color: '#81776E',
  },
  logo: {
    fontSize: 54,
    fontWeight: '700',
    color: '#713B45',
    letterSpacing: -2,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#81776E',
    maxWidth: 280,
  },
  form: {
    gap: 12,
  },
  formTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#292725',
  },
  formDescription: {
    fontSize: 14,
    color: '#81776E',
    marginBottom: 15,
  },
  label: {
    fontSize: 10,
    letterSpacing: 2,
    color: '#713B45',
    fontWeight: '700',
    marginTop: 8,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E7DED0',
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#292725',
  },
  button: {
    height: 54,
    backgroundColor: '#713B45',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: '#A39A90',
    fontSize: 9,
    letterSpacing: 2,
  },
});
