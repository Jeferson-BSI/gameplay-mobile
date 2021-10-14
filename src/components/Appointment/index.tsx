import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, Content } from './styles';
import { GuildIcon } from '../GuildIcon';

export type GuildProps = {};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProperties & {
  data: AppointmentProps;
};

export const Appointment = ({ data, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Content>
        <GuildIcon />
      </Content>
    </Container>
  );
};
