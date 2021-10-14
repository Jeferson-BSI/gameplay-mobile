import styled, { css } from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  opacity: number;
};

type PropsSquare = {
  checked: boolean;
};

export const Container = styled(RectButton)`
  margin-left: 5px;
`;

export const Gradient = styled(LinearGradient)`
  width: 104px;
  height: 120px;

  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled.View<Props>`
  opacity: ${({ opacity }) => opacity};

  width: 100px;
  height: 116px;
  background-color: ${theme.colors.secondary40};
  border-radius: 8px;

  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
`;

export const Square = styled.View<PropsSquare>`
  width: 10px;
  height: 10px;
  align-self: flex-end;
  margin-right: 7px;
  border-radius: 3px;
  background-color: ${theme.colors.primary};

  ${({ checked }) =>
    !checked &&
    css`
      background-color: ${theme.colors.secondary100};
      border-color: ${theme.colors.secondary50};
      border-width: 2px;
    `}
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
  font-size: 15px;
`;
