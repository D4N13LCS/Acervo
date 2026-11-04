
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { livros, Livro } from '../../../data/books';

export default function Home() {
  const router = useRouter();

  function renderLivro({ item }: { item: Livro }) {
    return (
      <Pressable
        style={styles.bookCard}
        onPress={() =>
          router.push({
            pathname: '/livro/[id]',
            params: { id: item.id },
          })
        }
      >
        <View style={styles.bookNumber}>
          <Text style={styles.numberText}>
            {item.id.padStart(2, '0')}
          </Text>
        </View>

        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.titulo}</Text>
          <Text style={styles.bookAuthor}>{item.autor}</Text>
          <Text style={styles.bookCategory}>
            {item.categoria} · {item.ano}
          </Text>
        </View>

        <Text style={styles.arrow}>→</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>SUA BIBLIOTECA</Text>
        <Text style={styles.title}>Explore o acervo.</Text>
        <Text style={styles.subtitle}>
          Histórias que merecem ser descobertas.
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Obras disponíveis</Text>
        <Text style={styles.counter}>
          {livros.length.toString().padStart(2, '0')} obras
        </Text>
      </View>

      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={renderLivro}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3ED',
    paddingHorizontal: 24,
    paddingTop: 35,
  },
  header: {
    marginBottom: 35,
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: 3,
    color: '#81776E',
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#713B45',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 14,
    color: '#81776E',
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#292725',
  },
  counter: {
    fontSize: 11,
    color: '#81776E',
  },
  list: {
    paddingBottom: 25,
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E7DED0',
  },
  bookNumber: {
    width: 42,
    height: 52,
    backgroundColor: '#713B45',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  numberText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  bookInfo: {
    flex: 1,
    marginLeft: 15,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#292725',
  },
  bookAuthor: {
    fontSize: 13,
    color: '#81776E',
    marginTop: 4,
  },
  bookCategory: {
    fontSize: 10,
    color: '#A39A90',
    marginTop: 5,
  },
  arrow: {
    fontSize: 22,
    color: '#713B45',
  },
});
