import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Background from './components/Background';
import ProductDetail from './components/ProductDetail';

const DetalhesProduto = ({route}) => {
  const {imagem, titulo, estudio, itemDesc, itemName, preco, id} = route.params;

  return (
    <View style={styles.container}>
      <Background />
      <ProductDetail
        imagem={imagem}
        titulo={titulo}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        preco={preco}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetalhesProduto;
