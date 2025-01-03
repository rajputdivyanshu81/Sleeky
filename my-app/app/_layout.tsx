import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(nobottombar)/accountinfo"
          options={{
            headerShown: true,
            headerTitle: 'Account info',
            headerTitleAlign: 'center',
            headerBackTitle: 'Go Back',
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}