import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface ToggleButtonProps {
  title: string;
  onPress: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFC423',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default ToggleButton;
