import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CreditCard = () => {
  return (
    <View style={styles.headerContainer}>
      <Text
        style={{
          fontSize: 19,
          color: 'black',
          fontWeight: '600',
        }}>
        Cartão de Crédito
      </Text>

      <View
        style={{
          gap: 2,
        }}>
        <Text>Fatura Fechada</Text>
        <Text
          style={{
            fontSize: 19,
            color: 'black',
            fontWeight: '600',
          }}>
          R$843,98
        </Text>
      </View>
      <Text>Vencimento dia 29</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 6,
        }}>
        <TouchableOpacity
          style={[styles.buttonStyle, {backgroundColor: '#DA0000'}]}>
          <Text style={styles.buttonText}>Pagar fatura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, {backgroundColor: '#DFE4EA'}]}>
          <Text style={[styles.buttonText, {color: 'black'}]}>Parcelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    gap: 17,
    marginTop: 30,
    marginLeft: 18,
    marginBottom: 30,
  },
  buttonStyle: {
    borderRadius: 23,
    padding: 13,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreditCard;
