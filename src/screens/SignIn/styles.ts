import { theme } from '../../global/styles/theme';
import styled from 'styled-components/native';

type ITitle = {
  size: number;
  margin: number;
};

export const Container = styled.View`
  background-color: ${theme.colors.secondary90};

  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImg = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  margin-bottom: 14px;
  padding: 50px;
`;

export const Title = styled.Text<ITitle>`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: ${({ size }) => size}px;
  margin-bottom: ${({ margin }) => margin}px;
`;
