
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function AppLayout() {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="livro/[id]"
        options={{
          title: 'Detalhes da obra',
          headerStyle: { backgroundColor: '#F6F3ED' },
          headerTintColor: '#713B45',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
