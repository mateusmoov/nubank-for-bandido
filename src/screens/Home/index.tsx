import React from 'react';
import Header from '../../components/Header';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListButtons from '../../components/ListButtons';
import CardIcon from '../../assets/images/icons/card.svg';
import Divider from '../../components/Divider';
import CreditCard from '../../components/CreditCard';
import ContentList from '../../components/HorizontalCardList';
import FindMoreCardList from '../../components/FindMoreCardList';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RoutesParams} from '../../types/routes';

type HomeProps = {
  navigation: NativeStackNavigationProp<RoutesParams>;
};

export default function Home({navigation}: HomeProps) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <View
          style={{
            paddingLeft: 15,
          }}>
          <View
            style={{
              marginTop: 20,
            }}>
            <View style={{gap: 4}}>
              <Text style={styles.accountText}>Conta</Text>
              <Text style={styles.moneyText}>R$ 3.231,01</Text>
            </View>
          </View>
          <ListButtons navigation={navigation} />
          <View>
            <View
              style={{
                backgroundColor: '#E4E4E7',
                maxWidth: 340,
                borderRadius: 12,
                paddingVertical: 18,
                flexDirection: 'row',
                gap: 15,
                paddingLeft: 14,
                marginTop: 35,
                marginBottom: 30,
              }}>
              <CardIcon />
              <Text>Meus Cartões</Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 30,
            }}>
            <ContentList />
          </View>
        </View>
        <Divider />
        <CreditCard />
        <Divider />
        <FindMoreCardList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  accountText: {
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
  },
  moneyText: {
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
