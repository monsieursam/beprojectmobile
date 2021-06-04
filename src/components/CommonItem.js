import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CommonView = props => {
  const {children, style} = props;
  const {colors} = useTheme();
  const colorsStyle = {
    color: colors.card,
    ...style,
  };

  return (
    <View {...props} style={colorsStyle}>
      {children}
    </View>
  );
};

export default CommonView;
