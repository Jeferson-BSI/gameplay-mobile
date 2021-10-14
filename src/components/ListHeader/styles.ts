import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;
