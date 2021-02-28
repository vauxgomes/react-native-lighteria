import {StyleSheet} from 'react-native';

import {BACKGROUND_COLOR, FONT_FAMILY_REGULAR} from '../../../../styles/styles';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 24,
  },

  divider: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },

  text: {
    paddingHorizontal: 34,
    marginVertical: 24,
    backgroundColor: BACKGROUND_COLOR,
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    color: '#A1A5AA',
  },
});

export default styles;
