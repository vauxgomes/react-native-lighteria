import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CartInfoButton from '../../../../components/CartInfoButton';

const Background = () => {
  const imgSrc = require('../../../../../assets/img/bgimg.jpg');
  const naviagation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.bgImage}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => naviagation.goBack()}>
            <Image
              style={styles.arrow}
              source={require('../../../../../assets/img/flecha-esquerda.png')}
            />
          </TouchableOpacity>

          <View style={styles.containerCartButton}>
            <CartInfoButton />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },

  bgImage: {
    width: Dimensions.get('window').width,
    height: '100%',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  arrow: {
    width: 24,
    height: 24,
    marginLeft: 24,
    marginTop: 36,
  },

  containerCartButton: {
    padding: 18,
  },
});

export default Background;
