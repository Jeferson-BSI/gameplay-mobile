import React from 'react';
import { theme } from '../../global/styles/theme';
import { Container, AvatarImg } from './styles';

type Props = {
  urlImage: string;
};

export const Avatar = ({ urlImage }: Props) => {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <Container colors={[secondary50, secondary70]}>
      <AvatarImg source={{ uri: urlImage }} />
    </Container>
  );
};
