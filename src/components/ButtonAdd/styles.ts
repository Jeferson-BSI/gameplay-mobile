import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
`;
