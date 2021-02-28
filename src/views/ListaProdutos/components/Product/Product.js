import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

const Product = ({imagem, titulo, estudio, itemDesc, itemName, preco, id}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.push('DetalhesProduto', {
          imagem,
          titulo,
          estudio,
          itemDesc,
          itemName,
          preco,
          id,
        });
      }}>
      <Image source={imagem} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{titulo}</Text>
    </TouchableOpacity>
  );
};

export default Product;
