import ThirdPartyPB from '@ramonak/react-progress-bar';
import styled from 'styled-components';

const ProgressBar = ({
  progress,
  width,
  bgColor,
  progressColor,
  height,
  roundedCorners,
  bevel,
}: ProgressProps): JSX.Element => {
  return (
    <StyledPBContainer width={width} bevel={bevel}>
      <ThirdPartyPB
        completed={progress}
        transitionDuration={'0.3s'}
        bgColor={progressColor}
        baseBgColor={bgColor}
        height={height}
        isLabelVisible={false}
        borderRadius={roundedCorners ? '50px' : '0'}
      />
    </StyledPBContainer>
  );
};

// STYLES

const StyledPBContainer = styled.div<StyledPBContainerProps>`
  width: ${({width}) => width};

  div div {
    clip-path: ${(props) =>
      props.bevel !== undefined
        ? `polygon(
      1% 0,
      99% 0%,
      100% 50%,
      100% 50%,
      99% 100%,
      1% 100%,
      0 50%,
      0 50%
    );`
        : 'none'};
  }
  div div div {
    clip-path: none;
  }
`;

// TYPES

interface StyledPBContainerProps {
  bevel?: boolean;
  width: string;
}

interface ProgressProps {
  width: string;
  progress: number;
  bgColor: string;
  progressColor: string;
  height: string;
  roundedCorners: boolean;
  bevel?: boolean;
}

export default ProgressBar;
