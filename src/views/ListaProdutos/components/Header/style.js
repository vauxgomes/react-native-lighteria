import {StyleSheet} from 'react-native';
import {FONT_SIZE_XXL} from '../../../../styles/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    paddingVertical: 16,
    paddingHorizontal: 6
  },

  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: FONT_SIZE_XXL,
  },
});

export default styles;
