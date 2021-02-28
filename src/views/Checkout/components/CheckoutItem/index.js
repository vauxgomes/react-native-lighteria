import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  OFFWHITE,
  WHITE,
} from '../../../../styles/styles';
import {currencyFormatter} from '../../../../utils/utils';

export const CheckoutItem = ({itemName, titulo, imagem, preco, qty}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={imagem} style={styles.image} />
      </View>

      <View style={styles.containerDesc}>
        <Text style={styles.textDescTop}>{itemName}</Text>
        <Text style={styles.textDescBot}>{titulo}</Text>
      </View>

      <View style={styles.containerPrice}>
        <Text style={styles.textPrice}>{currencyFormatter(preco)}</Text>
        <Text style={styles.textQty}>x{qty}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    elevation: 8,
    overflow: 'hidden'
  },

  containerImage: {
    flex: 2,
    backgroundColor: OFFWHITE,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 50,
  },

  containerDesc: {
    flex: 4.5,
    padding: 18,
    justifyContent: 'center',
  },

  textDescTop: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MD,
  },

  textDescBot: {
    fontFamily: FONT_FAMILY_LIGHT,
    fontSize: FONT_SIZE_SM,
  },

  containerPrice: {
    flex: 3.5,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  textPrice: {
    fontFamily: FONT_FAMILY_REGULAR,
  },

  textQty: {
    textAlign: 'center',
    padding: 4,
    fontSize: FONT_SIZE_XS,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
  },
});
