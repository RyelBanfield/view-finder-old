import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex items-center justify-center flex-grow'>
      <Text className='text-xl font-bold'>View Finder</Text>
      <StatusBar style="auto" />
    </View>
  );
}