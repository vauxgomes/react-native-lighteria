import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {
  LIGHTBLUE,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../../styles/styles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHTBLUE,
    padding: 20,
    borderRadius: 6,
  },

  text: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});

export default Button;
