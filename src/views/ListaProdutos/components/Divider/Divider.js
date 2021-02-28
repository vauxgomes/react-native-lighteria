import React from 'react';
import {Text, View} from 'react-native';

import styles from './style.js';

const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Categorias</Text>
      </View>
    </View>
  );
};

export default Divider;
