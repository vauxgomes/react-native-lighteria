import React from 'react';
import {View, Text, Image} from 'react-native';
import CartInfoButton from '../../../../components/CartInfoButton';

import styles from './style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lighteria</Text>
      <CartInfoButton />
    </View>
  );
};

export default Header;
