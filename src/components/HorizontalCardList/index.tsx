// Import necessary components and hooks
import React from 'react';
import {FlatList, View} from 'react-native';
import HorizontalCard from '../HorizontalCard';

const ContentsArray = [
  {
    id: '1',
    title:
      'Você sentaria no bolo? Aqui na Nubank temos vários seguros para bolo disponíveis',
  },
  {
    id: '2',
    title:
      'Você sabia que na Nubank você pode ser enganado por um aplicativo falso? Se cuide.',
  },
];

const ContentList = () => {
  return (
    <FlatList
      data={ContentsArray}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={{marginRight: 30}}>
          <HorizontalCard description={item.title} />
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ContentList;
