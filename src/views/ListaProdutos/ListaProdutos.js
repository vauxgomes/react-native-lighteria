import React from 'react';
import {View, FlatList} from 'react-native';

import {Header} from './components/Header';
import {Divider} from './components/Divider';
import {Product} from './components/Product';

import styles from './style';

import {data} from '../../utils/mocked-data';

const ListaProdutos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Product {...item} />}
        ListHeaderComponent={
          <>
            <Header />
            <Divider />
          </>
        }
      />
    </View>
  );
};

export default ListaProdutos;
