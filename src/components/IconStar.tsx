import React, { memo, useEffect, useState } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import * as path from 'svg-path-properties';

const d =
  'M 6 41 L 35 37 L 50 11 L 65 37 L 94 41 L 72 63 L 76 92 L 50 74 L 24 92 L 28 63z';
interface SVGRProps {
  color?: string;
  strokeColor?: string;
  size?: number;
  percent?: number;
}

export const IconStar = memo(
  ({
    color = 'black',
    strokeColor = 'white',
    size = 24,
    percent = 1,
    ...props
  }: SvgProps & SVGRProps) => {
    const [length, setLength] = useState(0);

    useEffect(() => {
      const properties = path.svgPathProperties(d);
      const totalLength = properties.getTotalLength();
      setLength(totalLength);
    }, []);

    return (
      <Svg viewBox="0 0 100 100" width={size} height={size} {...props}>
        <Path
          fill={color}
          fillOpacity={percent}
          stroke={strokeColor}
          strokeWidth={size / 3}
          strokeDasharray={length}
          strokeDashoffset={length - length * percent}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={d}
        />
      </Svg>
    );
  },
);
