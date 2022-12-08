import { FlatList, View } from 'react-native';
import styled from '../../../theme/styled';

const StyledContainer = styled(View)`
  flex: 1;
  justify-content: flex-start;
`;

const StyledSearchContainer = styled.View`
  margin: ${props => props.theme.spacing.sm}px;
`;

const StyledRestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})`` as unknown as typeof FlatList;

export { StyledContainer, StyledSearchContainer, StyledRestaurantList };
