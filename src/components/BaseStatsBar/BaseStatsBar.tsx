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
      <h4>{name}</h4>
      <ProgressBar
        progress={value}
        max={maxValue}
        bevel={bevel}
        roundedCorners={roundedCorners}
        bgColor={bgProgressColor}
        progressColor={color}
        height={height}
      />
    </div>
  );
};

// STYLES

const StyledBaseStatsBar = styled(BaseStatsBar)`
  display: flex;
  align-items: center;

  > * {
    display: inline-block;
  }
  h4 {
    margin: 15px 0;
    color: var(${(props) => props.color});
    flex-grow: 1;
    flex-basis: 20%;
    min-width: 200px;
  }

  > :last-child {
    min-width: 50px;
    width: 80%;
  }
`;

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
  className?: string;
}

export default StyledBaseStatsBar;
