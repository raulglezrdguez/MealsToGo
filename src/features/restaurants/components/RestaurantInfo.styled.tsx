import { View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from '../../../theme/styled';

const CardCover = styled(Card.Cover)`
  margin: ${props => props.theme.spacing.sm}px;
  border-radius: 5px;
`;

const Info = styled(View)`
  padding: ${props => props.theme.spacing.sm}px;
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${props => props.theme.spacing.sm}px;
  padding-bottom: ${props => props.theme.spacing.sm}px;
`;

const Col = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { CardCover, Info, Rating, Col, Row };
