import React, { useState } from 'react';
import { Container, Header, Content } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { FlatList, Text } from 'react-native';
import { Appointment } from '../../components/Appointment';

const appoinments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendarios',
      icon: null,
      owner: true,
    },

    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
];

export const Home = () => {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId == category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <Content>
        <ListHeader title="Partidas agendadas" subTitle="Total 6" />

        <FlatList
          data={appoinments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Content>
    </Container>
  );
};
