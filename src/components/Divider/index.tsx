import React from 'react';
import {View} from 'react-native';

type DividerProps = {
  width?: number;
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  dividerStyle?: any;
};

const Divider = ({
  width = 2,
  orientation = 'horizontal',
  color = '#DFE4EA',
  dividerStyle,
}: DividerProps) => {
  const dividerStyles = [
    {width: orientation === 'horizontal' ? '100%' : width},
    {height: orientation === 'vertical' ? '100%' : width},
    {backgroundColor: color},
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
};

export default Divider;
