import React from 'react';
import { View } from 'react-native';
import styled from '../theme/styled';

const TopSmall = styled(View)`
  margin-top: ${props => props.theme.spacing.sm}px;
`;
const TopMedium = styled(View)`
  margin-top: ${props => props.theme.spacing.md}px;
`;
const TopLarge = styled(View)`
  margin-top: ${props => props.theme.spacing.lg}px;
`;
const TopExtraLarge = styled(View)`
  margin-top: ${props => props.theme.spacing.xl}px;
`;

const LeftSmall = styled(View)`
  margin-left: ${props => props.theme.spacing.sm}px;
`;
const LeftMedium = styled(View)`
  margin-left: ${props => props.theme.spacing.md}px;
`;
const LeftLarge = styled(View)`
  margin-left: ${props => props.theme.spacing.lg}px;
`;
const LeftExtraLarge = styled(View)`
  margin-left: ${props => props.theme.spacing.xl}px;
`;

type SpacerProps = {
  variant:
    | 'top.small'
    | 'top.medium'
    | 'top.large'
    | 'top.extralarge'
    | 'left.small'
    | 'left.medium'
    | 'left.large'
    | 'left.extralarge';
};
export const Spacer = ({ variant }: SpacerProps) => {
  switch (variant) {
    case 'top.medium':
      return <TopMedium />;
    case 'top.large':
      return <TopLarge />;
    case 'top.extralarge':
      return <TopExtraLarge />;

    case 'left.small':
      return <LeftSmall />;
    case 'left.medium':
      return <LeftMedium />;
    case 'left.large':
      return <LeftLarge />;
    case 'left.extralarge':
      return <LeftExtraLarge />;

    default:
      return <TopSmall />;
  }
};
