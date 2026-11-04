
import { Redirect } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Index() {
  const { usuario } = useAuth();

  return (
    <Redirect href={usuario ? '/(app)/(tabs)' : '/login'} />
  );
}

