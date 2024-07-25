// Import necessary components from React Native
import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

type FindMoreCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const FindMoreCard = ({title, description, imageUrl}: FindMoreCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conhecer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 236,
    backgroundColor: '#E4E4E7',
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 30,
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: 119,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  description: {
    fontSize: 13,
    marginBottom: 10,
    color: 'gray',
  },
  button: {
    backgroundColor: '#DA0000',
    borderRadius: 23,
    padding: 13,
    alignItems: 'center',
    width: 117,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default FindMoreCard;
