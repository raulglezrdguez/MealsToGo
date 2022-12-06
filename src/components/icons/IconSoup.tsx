import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface SVGRProps {
  color?: string;
  size?: number;
}

export const IconSoup = memo(
  ({ color = 'black', size = 24, ...props }: SvgProps & SVGRProps) => (
    <Svg viewBox="0 0 330 330" height={size} width={size} {...props}>
      <Path
        fill={color}
        d="M330 164.999c0-8.284-6.716-15-15-15H15c-8.284 0-15 6.716-15 15 0 59.265 31.413 111.324 78.457 140.423A14.936 14.936 0 0 0 75 314.999c0 8.284 6.716 15 15 15h150c8.284 0 15-6.716 15-15 0-3.642-1.299-6.978-3.457-9.577C298.587 276.323 330 224.264 330 164.999zm-165 135c-69.369 0-126.686-52.595-134.172-120h268.344c-7.487 67.406-64.803 120-134.172 120zM95 105c0 8.284 6.716 15 15 15s15-6.716 15-15c0-21.215-11.21-32.424-19.396-40.608C98.25 57.038 94.999 53.432 95 44.999c-.001-8.43 3.251-12.037 10.607-19.393 5.858-5.857 5.858-15.355.001-21.212-5.857-5.859-15.356-5.857-21.214-.001C76.209 12.579 64.997 23.789 65 44.999c-.003 21.213 11.207 32.422 19.393 40.606C91.748 92.961 95 96.568 95 105zM165 105c0 8.284 6.716 15 15 15s15-6.716 15-15c0-21.215-11.21-32.424-19.395-40.608-7.355-7.354-10.606-10.96-10.605-19.393-.001-8.43 3.251-12.037 10.607-19.393 5.858-5.857 5.858-15.355.001-21.212-5.857-5.859-15.356-5.857-21.214-.001-8.186 8.185-19.397 19.395-19.395 40.606-.003 21.213 11.207 32.422 19.393 40.606C161.748 92.961 165 96.568 165 105zM235 105c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-21.215-11.21-32.424-19.395-40.608-7.355-7.354-10.606-10.96-10.605-19.393-.001-8.43 3.251-12.037 10.607-19.393 5.858-5.857 5.858-15.355.001-21.212-5.857-5.859-15.356-5.857-21.214-.001-8.186 8.185-19.397 19.395-19.395 40.606-.003 21.213 11.207 32.422 19.393 40.606C231.748 92.961 235 96.568 235 105z"
      />
    </Svg>
  ),
);
