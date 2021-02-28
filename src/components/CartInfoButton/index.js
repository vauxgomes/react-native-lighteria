import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  WHITE,
  RED,
  FONT_SIZE_XXS,
  FONT_FAMILY_SEMI_BOLD,
} from '../../styles/styles';

import {DataContext} from '../../provider';

const CartInfoButton = () => {
  const navigation = useNavigation();
  const {itensCheckout} = useContext(DataContext);

  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/img/icone-sacola.png')}
          style={styles.image}
        />

        {itensCheckout.length > 0 ? (
          <View style={styles.pill}>
            <Text style={styles.text}>
              {itensCheckout.reduce((sum, curr) => sum + curr.qty, 0)}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 30,
  },

  image: {
    width: 30,
    height: 30,
  },

  pill: {
    backgroundColor: RED,
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },

  text: {
    textAlign: 'center',
    padding: 4,
    fontSize: FONT_SIZE_XXS,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
});

export default CartInfoButton;
