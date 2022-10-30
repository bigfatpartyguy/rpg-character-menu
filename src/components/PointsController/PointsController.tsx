import {GoTriangleLeft, GoTriangleRight} from 'react-icons/go';
import styled from 'styled-components';

const PointsController = ({
  className,
  points,
  children,
  onLeftClick,
  onRightClick,
}: PointsControllerProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="controller">
        <GoTriangleLeft onClick={onLeftClick} />
        <h2 className="points">{points}</h2>
        <GoTriangleRight onClick={onRightClick} />
      </div>
      <p className="name">{children}</p>
    </div>
  );
};

// STYLES

const StyledPointsController = styled(PointsController)`
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
  onLeftClick: (evt: React.MouseEvent<SVGElement>) => void;
  onRightClick: (evt: React.MouseEvent<SVGElement>) => void;
}

export default StyledPointsController;
