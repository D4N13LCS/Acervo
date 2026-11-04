
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#713B45',
        tabBarInactiveTintColor: '#A39A90',
        tabBarStyle: {
          backgroundColor: '#F6F3ED',
          borderTopColor: '#E7DED0',
        },
        headerStyle: {
          backgroundColor: '#F6F3ED',
        },
        headerTintColor: '#713B45',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Acervo',
          tabBarLabel: 'Início',
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarLabel: 'Perfil',
        }}
      />
    </Tabs>
  );
}
