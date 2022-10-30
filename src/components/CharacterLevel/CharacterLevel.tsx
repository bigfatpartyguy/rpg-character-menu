import {useContext} from 'react';
import {RPGCtx} from '../../context/RPGContext';
import ProgressBar from '../ProgressBar';
import styled from 'styled-components';
import {calculateLevel, getLevelRank} from '../../utils/helpers';

const CharacterLevel = ({className}: CharacterLevelProps): JSX.Element => {
  const {
    state: {level, strength: s, dexterity: d, intelligence: i, charisma: c},
  } = useContext(RPGCtx);
  const {progress} = calculateLevel(s, d, i, c);
  return (
    <div className={className}>
      <div className="level">
        <h2>{level}</h2>
        <h3>Уровень</h3>
      </div>
      <div className="progress">
        <p>
          <span>{getLevelRank(level)}</span>
          <span>{progress}%</span>
        </p>
        <ProgressBar
          progress={progress}
          max={100}
          bgColor="--color-dark-700"
          progressColor="--color-white"
          height="20px"
          bevel
        />
      </div>
    </div>
  );
};

// STYLES

const StyledCharacterLevel = styled(CharacterLevel)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 15px;
  .level {
    flex-grow: 1;
    text-align: center;
    padding-right: 10px;

    h2 {
      margin: 5px 0;
    }

    h3 {
      margin: 0;
      font-size: 1em;
    }
  }
  .progress {
    flex-grow: 3;

    p {
      display: flex;
      justify-content: space-between;
      color: var(--color-white);
      font-size: 0.7em;
    }
  }
`;

// TYPES

interface CharacterLevelProps {
  className?: string;
}

export default StyledCharacterLevel;
