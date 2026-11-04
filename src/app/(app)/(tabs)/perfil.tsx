
import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import { useAuth } from '../../../context/AuthContext';

export default function Perfil() {
  const { usuario, sair } = useAuth();

  const email = usuario ?? 'Usuário não identificado';

  const nome = email.includes('@')
    ? email.split('@')[0]
        .replace(/[._-]/g, ' ')
        .replace(/\b\w/g, letra => letra.toUpperCase())
    : 'Leitor do Acervo';

  const iniciais = nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(palavra => palavra[0])
    .join('')
    .toUpperCase();

  function handleSair() {
    sair();
    router.replace('/login');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>SUA CONTA</Text>
        <Text style={styles.title}>Meu perfil.</Text>
        <Text style={styles.subtitle}>
          Suas informações no Acervo.
        </Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{iniciais}</Text>
        </View>

        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.email}>{email}</Text>

        <View style={styles.status}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Conta ativa</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DADOS DA CONTA</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.iconText}>@</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>E-mail</Text>
              <Text style={styles.infoValue}>{email}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.iconText}>01</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Tipo de conta</Text>
              <Text style={styles.infoValue}>Pessoal</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Text style={styles.iconText}>✓</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Autenticação</Text>
              <Text style={styles.infoValue}>Sessão iniciada</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOBRE O APLICATIVO</Text>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>Acervo.</Text>
          <Text style={styles.aboutText}>
            Um espaço para descobrir, explorar e acompanhar
            obras literárias. Sua biblioteca começa aqui.
          </Text>
          <Text style={styles.version}>Versão 1.0.0</Text>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.logoutButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleSair}
      >
        <Text style={styles.logoutText}>Sair da conta</Text>
        <Text style={styles.logoutArrow}>→</Text>
      </Pressable>

      <Text style={styles.footer}>ACERVO · SUA BIBLIOTECA</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3ED',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: '#81776E',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: '#292725',
    fontSize: 34,
    fontWeight: '700',
  },
  subtitle: {
    color: '#81776E',
    fontSize: 14,
    marginTop: 6,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7DED0',
    borderRadius: 12,
    padding: 24,
    marginBottom: 32,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#713B45',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '600',
  },
  name: {
    color: '#292725',
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
  },
  email: {
    color: '#81776E',
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F0E9',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 16,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#64836A',
    marginRight: 7,
  },
  statusText: {
    color: '#526D56',
    fontSize: 11,
    fontWeight: '600',
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    color: '#81776E',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7DED0',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
  },
  infoIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#F6F3ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },
  iconText: {
    color: '#713B45',
    fontSize: 15,
    fontWeight: '700',
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    color: '#81776E',
    fontSize: 12,
    marginBottom: 4,
  },
  infoValue: {
    color: '#292725',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E7DED0',
  },
  aboutCard: {
    backgroundColor: '#EEE9DF',
    borderRadius: 12,
    padding: 20,
  },
  aboutTitle: {
    color: '#713B45',
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 8,
  },
  aboutText: {
    color: '#5F5852',
    fontSize: 13,
    lineHeight: 21,
  },
  version: {
    color: '#81776E',
    fontSize: 11,
    marginTop: 16,
  },
  logoutButton: {
    height: 52,
    borderWidth: 1,
    borderColor: '#713B45',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  logoutText: {
    color: '#713B45',
    fontSize: 14,
    fontWeight: '600',
  },
  logoutArrow: {
    color: '#713B45',
    fontSize: 18,
    marginLeft: 10,
  },
  buttonPressed: {
    opacity: 0.65,
  },
  footer: {
    color: '#A49A8E',
    fontSize: 10,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 28,
  },
});

