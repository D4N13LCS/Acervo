
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';

export default function Perfil() {
  const { usuario, sair } = useAuth();
  const router = useRouter();

  function handleLogout() {
    sair();
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>SUA CONTA</Text>

      <Text style={styles.title}>Perfil.</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {usuario?.charAt(0).toUpperCase() || 'A'}
          </Text>
        </View>

        <Text style={styles.name}>Leitor do Acervo</Text>
        <Text style={styles.email}>{usuario}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Sobre sua biblioteca</Text>
        <Text style={styles.description}>
          Este é seu espaço pessoal para descobrir e explorar
          diferentes obras literárias.
        </Text>
      </View>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3ED',
    padding: 25,
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: 3,
    color: '#81776E',
    marginTop: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#713B45',
    marginTop: 12,
  },
  profileCard: {
    alignItems: 'center',
    paddingVertical: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#E7DED0',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#713B45',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '600',
  },
  name: {
    fontSize: 19,
    fontWeight: '600',
    color: '#292725',
    marginTop: 15,
  },
  email: {
    fontSize: 13,
    color: '#81776E',
    marginTop: 5,
  },
  infoSection: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#292725',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#81776E',
    lineHeight: 23,
  },
  logoutButton: {
    marginTop: 40,
    height: 52,
    borderWidth: 1,
    borderColor: '#713B45',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#713B45',
    fontWeight: '600',
    fontSize: 14,
  },
});
