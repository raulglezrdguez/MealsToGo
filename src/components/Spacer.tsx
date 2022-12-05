import { View } from 'react-native';
import styled from '../theme/styled';

type SpacerProps = {
  from: 'top' | 'left' | 'right' | 'bottom';
  size: number;
};
export const Spacer = styled(View)<SpacerProps>`
  ${({ from, size }) => 'margin-' + from + ': ' + size + 'px'};
`;
