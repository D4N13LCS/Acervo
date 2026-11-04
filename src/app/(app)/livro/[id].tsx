
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { livros } from '../../../data/books';

export default function DetalhesLivro() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const livro = livros.find((item) => item.id === id);

  if (!livro) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Obra não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.eyebrow}>DETALHES DA OBRA</Text>

      <View style={styles.cover}>
        <Text style={styles.coverNumber}>
          {livro.id.padStart(2, '0')}
        </Text>
        <Text style={styles.coverTitle}>{livro.titulo}</Text>
        <Text style={styles.coverAuthor}>{livro.autor}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>TÍTULO</Text>
        <Text style={styles.title}>{livro.titulo}</Text>

        <Text style={styles.label}>AUTOR</Text>
        <Text style={styles.info}>{livro.autor}</Text>

        <Text style={styles.label}>CATEGORIA</Text>
        <Text style={styles.info}>{livro.categoria}</Text>

        <Text style={styles.label}>ANO DE PUBLICAÇÃO</Text>
        <Text style={styles.info}>{livro.ano}</Text>

        <Text style={styles.label}>SINOPSE</Text>
        <Text style={styles.description}>{livro.descricao}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3ED',
    padding: 24,
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: 3,
    color: '#81776E',
    marginBottom: 25,
  },
  cover: {
    backgroundColor: '#713B45',
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 5,
    marginBottom: 35,
  },
  coverNumber: {
    color: '#E7DED0',
    fontSize: 12,
    marginBottom: 20,
  },
  coverTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
  },
  coverAuthor: {
    color: '#E7DED0',
    fontSize: 13,
    marginTop: 12,
  },
  content: {
    paddingBottom: 40,
  },
  label: {
    fontSize: 10,
    letterSpacing: 2,
    color: '#713B45',
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 6,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#292725',
  },
  info: {
    fontSize: 15,
    color: '#292725',
  },
  description: {
    fontSize: 15,
    lineHeight: 25,
    color: '#81776E',
  },
});
