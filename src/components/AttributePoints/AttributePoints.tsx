import {useContext} from 'react';
import styled from 'styled-components';
import PointsController from '../PointsController';
import {RPGCtx} from '../../context/RPGContext';

const AttributePoints = ({className}: AttributePointsProps): JSX.Element => {
  const {
    state: {
      strength: {
        value: s,
        stats: {attack},
      },
      dexterity: {
        value: d,
        stats: {stealth, archery},
      },
      intelligence: {
        value: i,
        stats: {learnability, survival, medicine},
      },
      charisma: {
        value: c,
        stats: {appearance, manipulation, insight, intimidation},
      },
    },
    dispatch,
  } = useContext(RPGCtx);
  return (
    <div className={className}>
      <PointsController className="strength" points={s}>
        Сила
      </PointsController>
      <PointsController className="attack" points={attack}>
        Атака
      </PointsController>

      <PointsController className="dexterity" points={d}>
        Ловкость
      </PointsController>
      <PointsController className="stealth" points={stealth}>
        Стелс
      </PointsController>
      <PointsController className="archery" points={archery}>
        Стрельба из лука
      </PointsController>

      <PointsController className="intellect" points={i}>
        Интелект
      </PointsController>
      <PointsController className="learnability" points={learnability}>
        Обучаемость
      </PointsController>
      <PointsController className="survival" points={survival}>
        Выживание
      </PointsController>
      <PointsController className="medicine" points={medicine}>
        Медицина
      </PointsController>

      <PointsController className="charisma" points={c}>
        Харизма
      </PointsController>
      <PointsController className="intimidation" points={intimidation}>
        Запугивание
      </PointsController>
      <PointsController className="insight" points={insight}>
        Проницательность
      </PointsController>
      <PointsController className="appearance" points={appearance}>
        Внешний вид
      </PointsController>
      <PointsController className="manipulation" points={manipulation}>
        Манипулирование
      </PointsController>
    </div>
  );
};

// STYLES

const StyledAttributePoints = styled(AttributePoints)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;

  .dexterity {
    grid-area: 2 / 1 / 3 / 2;
  }
  .stealth {
    grid-area: 2 / 2 / 3 / 3;
  }
  .archery {
    grid-area: 2 / 3 / 3 / 4;
  }
  .intellect {
    grid-area: 3 / 1 / 4 / 2;
  }
  .learnability {
    grid-area: 3 / 2 / 4 / 3;
  }
  .survival {
    grid-area: 3 / 3 / 4 / 4;
  }
  .medicine {
    grid-area: 3 / 4 / 4 / 5;
  }
  .charisma {
    grid-area: 4 / 1 / 5 / 2;
  }
  .intimidation {
    grid-area: 4 / 2 / 5 / 3;
  }
  .insight {
    grid-area: 4 / 3 / 5 / 4;
  }
  .appearance {
    grid-area: 4 / 4 / 5 / 5;
  }
  .manipulation {
    grid-area: 4 / 5 / 5 / 6;
  }
`;

// TYPES

interface AttributePointsProps {
  className?: string;
}

export default StyledAttributePoints;
