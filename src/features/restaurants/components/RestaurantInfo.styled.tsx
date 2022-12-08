import { View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from '../../../theme/styled';

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const StyledCardCover = styled(Card.Cover)`
  margin: ${props => props.theme.spacing.sm}px;
  border-radius: 5px;
`;

const StyledInfo = styled(View)`
  padding: ${props => props.theme.spacing.sm}px;
`;

const StyledRating = styled(View)`
  flex-direction: row;
  padding-top: ${props => props.theme.spacing.sm}px;
  padding-bottom: ${props => props.theme.spacing.sm}px;
`;

const StyledCol = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledOffers = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 10px;
`;

export {
  StyledCard,
  StyledCardCover,
  StyledInfo,
  StyledRating,
  StyledCol,
  StyledRow,
  StyledOffers,
};
