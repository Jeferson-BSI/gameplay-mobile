import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { theme } from '../../global/styles/theme';
import { Container, Gradient, Content, Square, Title } from './styles';

type Props = RectButtonProperties & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export const Category = ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <Container {...rest}>
      <Gradient colors={[secondary50, secondary70]}>
        <Content opacity={checked ? 1 : 0.4}>
          <Square checked={checked} />
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </Content>
      </Gradient>
    </Container>
  );
};
