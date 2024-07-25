import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import type {SvgProps} from 'react-native-svg';

type ActionButtonProps = {
  IconComponent: React.FC<SvgProps>;
  title: string;
  onPress: () => void;
};

const ActionButton = ({IconComponent, title, onPress}: ActionButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{gap: 10, alignItems: 'center'}}>
        <View style={styles.buttonContainer}>
          <IconComponent width={25} />
        </View>
        <Text style={styles.description}>{title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#E4E4E7',
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  description: {
    fontSize: 14,
    fontWeight: 'medium',
  },
});

export default ActionButton;
