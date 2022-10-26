import ThirdPartyPB from '@ramonak/react-progress-bar';
import styled from 'styled-components';

interface ContainerProps {
  readonly margin: string;
  width: string;
}

interface ProgressProps {
  margin: string;
  width: string;
  progress: number;
  bgColor: string;
  progressColor: string;
  height: string;
}

const StyledProgressBarContainer = styled.div<ContainerProps>`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;

const ProgressBar = ({
  progress,
  margin,
  width,
  bgColor,
  progressColor,
  height,
}: ProgressProps): JSX.Element => {
  return (
    <StyledProgressBarContainer margin={margin} width={width}>
      <ThirdPartyPB
        completed={progress}
        transitionDuration={'0.3s'}
        bgColor={progressColor}
        baseBgColor={bgColor}
        height={height}
        isLabelVisible={false}
      />
    </StyledProgressBarContainer>
  );
};

export default ProgressBar;
