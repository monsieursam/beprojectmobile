import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CommonView = props => {
  const {children, style} = props;
  const {colors} = useTheme();
  const colorsStyle = {
    color: colors.text,
    ...style,
  };

  return (
    <Text {...props} style={colorsStyle}>
      {children}
    </Text>
  );
};

export default CommonView;
