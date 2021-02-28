import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useContext} from 'react/cjs/react.development';
import {DataContext} from '../../provider';
import Button from '../../components/Button';

import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_LG,
  FONT_SIZE_XXL,
  FONT_SIZE_SM,
  LIGHTBLUE,
} from '../../styles/styles';

import {currencyFormatter} from '../../utils/utils';
import {CheckoutItem} from './components/CheckoutItem';

export const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);

  const total = itensCheckout.reduce(
    (acc, item) => acc + item.preco * item.qty,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {itensCheckout.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}

      <Text style={styles.total}>{currencyFormatter(total)}</Text>
      <Button title="FINALIZAR COMPRA" />
      <TouchableOpacity>
        <Text style={styles.keepShopping}>Continuar comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },

  title: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_XXL,
  },

  total: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_LG,
    marginVertical: 36,
  },

  keepShopping: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SM,
    color: LIGHTBLUE,
    textAlign: 'center',
    marginTop: 20,
  },
});
