import React from 'react';
import { Container, BackgroundImg, Content, Title, SubTitle } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';

export const SingIn = () => {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home' as never);
  }
  return (
    <Container>
      <BackgroundImg resizeMethod="resize" source={IllustrationImg} />

      <Content>
        <Title>
          Conecte-se e organize{'\n'} suas jogatinas {'\n'}facilmente
        </Title>
        <SubTitle>
          Crie grupos para jogar sues games{'\n'}favoritos com seus amigos
        </SubTitle>
        <ButtonIcon title="Entra com o Discord" onPress={handleSignIn} />
      </Content>
    </Container>
  );
};
