import { StatusBar } from 'expo-status-bar';
import RaygunClient, { LogLevel} from "raygun4reactnative"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const options = {
  apiKey: '',
  enableCrashReporting: true,
  disableNativeCrashReporting: false,
  disableUnhandledPromiseRejectionReporting: false,
  enableRealUserMonitoring: true,
  disableNetworkMonitoring: false,
  logLevel: LogLevel.info,
};



export default function App() {
  RaygunClient.init(options)
  throw new Error('foobar')
  return (
    <View style={styles.container}>
      <Text>Open up App.js to on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
