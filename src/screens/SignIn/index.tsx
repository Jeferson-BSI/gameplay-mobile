import React from 'react';
import { Container, BackgroundImg, Content, Title } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export const SingIn = () => {
  return (
    <Container>
      <BackgroundImg resizeMethod="resize" source={IllustrationImg} />

      <Content>
        <Title size={40} margin={16}>
          Conecte-se e organize{'\n'} suas jogatinas {'\n'}facilmente
        </Title>
        <Title size={15} margin={30}>
          Crie grupos para jogar sues games{'\n'}favoritos com seus amigos
        </Title>
        <ButtonIcon title="Entra com o Discord" />
      </Content>
    </Container>
  );
};
