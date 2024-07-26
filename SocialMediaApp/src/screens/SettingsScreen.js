import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.setting}>Option 1: Toggle dark mode</Text>
      <Text style={styles.setting}>Option 2: Change language</Text>
      {/* Add more settings here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default SettingsScreen;
