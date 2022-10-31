import {GoTriangleLeft, GoTriangleRight} from 'react-icons/go';
import styled from 'styled-components';

const PointsController = ({
  className,
  points,
  children,
  onIncrementClick,
  onDecrementClick,
}: PointsControllerProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="controller">
        <GoTriangleLeft onClick={onDecrementClick} />
        <h2 className="points">{points}</h2>
        <GoTriangleRight onClick={onIncrementClick} />
      </div>
      <p className="name">{children}</p>
    </div>
  );
};

// STYLES

const StyledPointsController = styled(PointsController)`
  user-select: none;
  .controller {
    width: 100%;
    display: flex;
    > * {
      margin: auto;
    }

    svg {
      fill: var(--color-white);
      cursor: pointer;
    }
    .points {
      margin: 0;
      padding: 0 10px;
    }
  }

  .name {
    margin: 0;
    text-align: center;
    color: var(--color-white);
  }
`;

// TYPES

interface PointsControllerProps {
  className?: string;
  points: number;
  children: string;
  onIncrementClick: (evt: React.MouseEvent<SVGElement>) => void;
  onDecrementClick: (evt: React.MouseEvent<SVGElement>) => void;
}

export default StyledPointsController;
