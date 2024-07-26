// components/ActionButtons.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Icon} from 'react-native-elements';

const ActionButtons = ({onLike, onComment, onShare}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onLike}>
        <Icon name="thumb-up" type="material" color="#007bff" />
        <Text style={styles.buttonText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onComment}>
        <Icon name="comment" type="material" color="#007bff" />
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onShare}>
        <Icon name="share" type="material" color="#007bff" />
        <Text style={styles.buttonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 5,
    color: '#007bff',
  },
});

export default ActionButtons;
