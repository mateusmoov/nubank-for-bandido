import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type HorizontalCardProps = {
  description: string;
};

const HorizontalCard = ({description}: HorizontalCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 263,
    backgroundColor: '#E4E4E7',
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 14,
  },
});

export default HorizontalCard;
