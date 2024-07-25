// Import necessary components and hooks
import React from 'react';
import {FlatList, View} from 'react-native';
import FindMoreCard from '../FindMoreCard';

const ContentsArray = [
  {
    id: '1',
    title: 'Nova experiência ouvindo!',
    description:
      'Sabe o que ela está ouvindo? Exatamente! Pega ladrão de Gabriel o Pensador. Faixa 04 do Álbum Seja Você Mesmo',
    imageUrl:
      'https://conteudo.imguol.com.br/c/entretenimento/4f/2017/11/24/mulher-ouvindo-musica-1511535013801_v2_4x3.jpg',
  },
  {
    id: '2',
    title: 'Curtindo as férias',
    description:
      'Estou curtindo as férias vendo você tentar transferir dinheiro desse aplicativo falso. Aiai como a vida é boa...',
    imageUrl:
      'https://img.freepik.com/fotos-gratis/retrato-de-homem-relaxando-em-casa_23-2148923929.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=sph',
  },
];

const FindMoreCardList = () => {
  return (
    <FlatList
      data={ContentsArray}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={{marginRight: 10}}>
          <FindMoreCard
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FindMoreCardList;
