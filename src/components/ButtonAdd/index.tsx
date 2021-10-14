import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export const ButtonAdd = ({ ...rest }: RectButtonProperties) => {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        size={25}
        color={theme.colors.heading}
      />
    </Container>
  );
};
