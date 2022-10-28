import ProgressBar from '../ProgressBar';
import styled from 'styled-components';

const BaseStatsBar = ({
  name,
  value,
  maxValue,
  color,
  bgProgressColor,
  height,
  roundedCorners,
  bevel,
  className,
}: BaseStatsBarProps): JSX.Element => {
  return (
    <div className={className}>
      <h3>{name}</h3>
      <ProgressBar
        progress={value}
        max={maxValue}
        bevel={bevel !== undefined}
        roundedCorners={roundedCorners !== undefined}
        bgColor={bgProgressColor}
        progressColor={color}
        height={height}
      />
    </div>
  );
};

// TYPES

interface BaseStatsBarProps {
  name: string;
  value: number;
  maxValue: number;
  color: string;
  bgProgressColor: string;
  height: string;
  roundedCorners?: boolean;
  bevel?: boolean;
  className: string;
}

export default BaseStatsBar;
