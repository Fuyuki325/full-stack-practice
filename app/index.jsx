import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function RootLayout() {

  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text className="text-3xl font-pblack">hdfahfhadad</Text>
      <Text>dshfahds</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue' }}>Go to Home</Link>
    </View>
  );
}