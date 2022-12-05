import React from 'react';
import { View } from 'react-native';
import styled from '../theme/styled';

const TopSmall = styled(View)`
  margin-top: ${props => props.theme.spacing.lg}px;
`;
const TopMedium = styled(View)`
  margin-top: ${props => props.theme.spacing.xxl}px;
`;
const TopLarge = styled(View)`
  margin-top: ${props => props.theme.spacing.xxxl}px;
`;

const LeftSmall = styled(View)`
  margin-left: ${props => props.theme.spacing.lg}px;
`;
const LeftMedium = styled(View)`
  margin-left: ${props => props.theme.spacing.xxl}px;
`;
const LeftLarge = styled(View)`
  margin-left: ${props => props.theme.spacing.xxxl}px;
`;

type SpacerProps = {
  variant:
    | 'top.small'
    | 'top.medium'
    | 'top.large'
    | 'left.small'
    | 'left.medium'
    | 'left.large';
};
export const Spacer = ({ variant }: SpacerProps) => {
  switch (variant) {
    case 'top.medium':
      return <TopMedium />;
    case 'top.large':
      return <TopLarge />;

    case 'left.small':
      return <LeftSmall />;
    case 'left.medium':
      return <LeftMedium />;
    case 'left.large':
      return <LeftLarge />;

    default:
      return <TopSmall />;
  }
};
