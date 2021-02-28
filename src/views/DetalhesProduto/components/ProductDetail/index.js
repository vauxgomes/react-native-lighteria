import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../../../components/Button';
import {DataContext} from '../../../../provider';

import {
  BLACK,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  LIGHTERGRAY,
  WHITE,
} from '../../../../styles/styles';

import {currencyFormatter} from '../../../../utils/utils';

const ProductDetail = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  itemName,
  preco,
  id,
}) => {
  const navigation = useNavigation();
  const {adicionarItem} = useContext(DataContext);

  const handlePurchace = () => {    
    let item = {
      imagem,
      titulo,
      estudio,
      itemDesc,
      itemName,
      preco,
      id,
    };

    adicionarItem(item);
    navigation.push('Checkout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.product}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.textTop}>{estudio}</Text>
              <Text style={styles.textMid}>{itemName}</Text>
              <Text style={styles.textBot}>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.image} />
          </View>

          {/* Details */}
          <View>
            <Text style={styles.textDesc}>{itemDesc}</Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.price}>{currencyFormatter(preco)}</Text>
            <Button title={'COMPRAR'} onPress={handlePurchace} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: -60,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  product: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  image: {
    width: 32,
    height: 72,
  },

  textTop: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MD,
    marginBottom: 4,
  },

  textMid: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XL,
    marginBottom: 4,
  },

  textBot: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SM,
    color: LIGHTERGRAY,
  },

  textDesc: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SM,
    color: LIGHTERGRAY,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  price: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LG,
    color: BLACK,
  },
});

export default ProductDetail;
