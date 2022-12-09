import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { spacing } from '../../theme/spacing';

interface SVGRProps {
  color?: string;
  size?: number;
}

export const IconWine = memo(
  ({ color = 'black', size = 24, ...props }: SvgProps & SVGRProps) => (
    <Svg
      style={{ marginHorizontal: spacing.sm }}
      viewBox="0 0 463 463"
      height={size}
      width={size}
      {...props}>
      <Path
        fill={color}
        d="m327.222 279.154-8.84-88.4a7.5 7.5 0 0 0-7.463-6.754H261.81a47.592 47.592 0 0 0-10.4-22.909l-21.458-25.749a32.568 32.568 0 0 1-7.533-20.806V45.055c4.765-2.647 8-7.728 8-13.555v-16c0-8.547-6.953-15.5-15.5-15.5h-32c-8.547 0-15.5 6.953-15.5 15.5v16c0 5.827 3.235 10.908 8 13.555v69.481a32.56 32.56 0 0 1-7.533 20.806l-21.458 25.749a47.588 47.588 0 0 0-11.009 30.409v248c0 12.958 10.542 23.5 23.5 23.5h125a7.5 7.5 0 0 0 0-15c-11.855 0-21.5-9.645-21.5-21.5v-67c0-.3-.023-.595-.057-.885 17.749-1.827 34.369-10.163 46.444-23.506 13.741-15.184 20.454-35.579 18.416-55.955zM182.419 15.5a.5.5 0 0 1 .5-.5h32a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5h-32a.5.5 0 0 1-.5-.5v-16zm-32 176a32.564 32.564 0 0 1 7.533-20.806l21.458-25.749a47.588 47.588 0 0 0 11.009-30.409V47h17v67.536a47.595 47.595 0 0 0 11.009 30.409l21.458 25.749A32.545 32.545 0 0 1 246.531 184h-47.612a7.5 7.5 0 0 0-7.463 6.754L187.332 232h-36.913v-40.5zm.001 55.5h35.412l-3.215 32.154c-2.038 20.376 4.675 40.771 18.416 55.954a72.472 72.472 0 0 0 14.387 12.225V367.5c0 4.687-3.813 8.5-8.5 8.5h-56.5V247zm47.123 33.646L200.907 247h6.012c4.687 0 8.5 3.813 8.5 8.5V288h-18.118a57.289 57.289 0 0 1 .242-7.354zm49.876 78.854v67c0 11.855-9.645 21.5-21.5 21.5h-67c-4.687 0-8.5-3.813-8.5-8.5V391h56.5c12.958 0 23.5-10.542 23.5-23.5v-12.779a72.642 72.642 0 0 0 17.057 3.894 7.603 7.603 0 0 0-.057.885zm50.266-34.457A57.72 57.72 0 0 1 254.962 344h-.086a57.72 57.72 0 0 1-42.723-18.957c-5.782-6.389-9.977-13.947-12.418-22.043h110.368c-2.441 8.096-6.636 15.654-12.418 22.043zM312.538 288h-82.119v-32.5c0-12.958-10.542-23.5-23.5-23.5h-4.512l3.3-33h98.425l8.164 81.646c.246 2.456.312 4.911.242 7.354z"
      />
    </Svg>
  ),
);
