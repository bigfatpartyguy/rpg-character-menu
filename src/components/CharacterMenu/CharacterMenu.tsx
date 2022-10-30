import {useContext} from 'react';
import styled from 'styled-components';
import {RPGCtx} from '../../context/RPGContext';
import {changeName} from '../../context/actionTypes';
import NameInput from '../NameInput';
import CharacterLevel from '../CharacterLevel';
import BaseStatsBar from '../BaseStatsBar';
import AttributePoints from '../AttributePoints';
import Button from '../Button';
import {downloadAsJSON, getBaseStats} from '../../utils/helpers';

const CharacterMenu = ({className}: CharacterMenuProps): JSX.Element => {
  const {
    state: {name, strength: s, dexterity: d, intelligence: i, charisma: c},
    state,
    dispatch,
  } = useContext(RPGCtx);
  const {health, dodge, energy} = getBaseStats(s, d, i);
  return (
    <div className={className}>
      <NameInput
        value={name}
        onChange={(evt) => {
          dispatch(changeName(evt.target.value));
        }}
      />
      <div className="main-info">
        <div className="name-and-level">
          <CharacterLevel />
        </div>
        <div className="base-stats">
          <BaseStatsBar
            name="Здоровье"
            value={health}
            maxValue={50}
            bgProgressColor="--color-dark-700"
            color="--color-cyan-100"
            height="15px"
          />
          <BaseStatsBar
            name="Уклонение"
            value={dodge}
            maxValue={50}
            bgProgressColor="--color-dark-700"
            color="--color-lavender-200"
            height="15px"
          />
          <BaseStatsBar
            name="Энергичность"
            value={energy}
            maxValue={50}
            bgProgressColor="--color-dark-700"
            color="--color-yellow-light"
            height="15px"
          />
        </div>
      </div>
      <hr />
      <AttributePoints />
      <div className="footer-buttons">
        <Button type="button">Получить урон</Button>
        <Button type="button" onClick={() => downloadAsJSON(state)}>
          Скачать данные
        </Button>
      </div>
    </div>
  );
};

// STYLES

const StyledCharacterMenu = styled(CharacterMenu)`
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;

  .main-info {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;

    > * {
      flex-basis: 50%;
    }
    .name-and-level {
      padding-right: 20px;
    }
    .base-stats {
      padding-left: 20px;
    }
  }
  hr {
  }
  .footer-buttons {
    display: flex;
    width: 100%;
    height: 100px;
    > * {
      flex: 1 1 50%;
      margin: 20px;
    }
  }
`;

// TYPES

interface CharacterMenuProps {
  className?: string;
}

export default StyledCharacterMenu;
