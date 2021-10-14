import React from 'react';
import { Avatar } from '../Avatar';
import {
  Container,
  ContentArea,
  User,
  Greeting,
  UserName,
  Message,
} from './styles';

export const Profile = () => {
  return (
    <Container>
      <Avatar urlImage="https://github.com/rodrigorgtic.png" />
      <ContentArea>
        <User>
          <Greeting>Olá,</Greeting>
          <UserName>Jeferson</UserName>
        </User>

        <Message>Hoje é dia de vitória</Message>
      </ContentArea>
    </Container>
  );
};
