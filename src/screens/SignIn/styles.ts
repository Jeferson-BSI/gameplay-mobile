import { theme } from '../../global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
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

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  line-height: 40px;
  font-size: 40px;
  font-family: ${theme.fonts.title700};
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 15px;
  font-family: ${theme.fonts.title500};
  margin-bottom: 40px;
`;
