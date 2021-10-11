import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, IconContainer, Icon, Title } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = RectButtonProperties & {
  title: string;
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <IconContainer>
        <Icon source={DiscordImg} />
      </IconContainer>

      <Title>{title}</Title>
    </Container>
  );
};
