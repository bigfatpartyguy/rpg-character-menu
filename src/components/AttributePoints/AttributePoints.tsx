import {useContext, useEffect} from 'react';
import styled from 'styled-components';
import PointsController from '../PointsController';
import {RPGCtx} from '../../context/RPGContext';
import {
  setLevel,
  decrementAttribute,
  incrementAttribute,
} from '../../context/actionTypes';
import {calculateLevel, getSubAttributes} from '../../utils/helpers';

const AttributePoints = ({className}: AttributePointsProps): JSX.Element => {
  const {
    state: {
      strength: s,
      attack,
      dexterity: d,
      stealth,
      archery,
      intelligence: i,
      learnability,
      survival,
      medicine,
      charisma: c,
      appearance,
      manipulation,
      insight,
      intimidation,
    },
    state,
    dispatch,
  } = useContext(RPGCtx);

  useEffect(() => {
    const {level} = calculateLevel(s, d, i, c);
    dispatch(setLevel(level));
  }, [s, d, i, c]);

  const handleIncrementAttribute = (attribute: string): void => {
    dispatch(incrementAttribute(attribute));
  };

  const handleIncrementSubAttribute = (
    subAttribute: string,
    attribute: string
  ): void => {
    if (
      state[subAttribute as keyof typeof state] <
      state[attribute as keyof typeof state]
    ) {
      dispatch(incrementAttribute(subAttribute));
    }
  };

  const handleDecrementAttribute = (attribute: string): void => {
    const subAttributes = getSubAttributes(attribute);
    if (state[attribute as keyof typeof state] > 0) {
      subAttributes.forEach((subAttribute) => {
        if (
          state[subAttribute as keyof typeof state] ===
          state[attribute as keyof typeof state]
        ) {
          dispatch(decrementAttribute(subAttribute));
        }
      });
      dispatch(decrementAttribute(attribute));
    }
  };
  const handleDecrementSubAttribue = (attribute: string): void => {
    if (state[attribute as keyof typeof state] > 0) {
      dispatch(decrementAttribute(attribute));
    }
  };

  return (
    <div className={className}>
      <PointsController
        onIncrementClick={() => handleIncrementAttribute('strength')}
        onDecrementClick={() => handleDecrementAttribute('strength')}
        className="strength"
        points={s}
      >
        Сила
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('attack', 'strength')
        }
        onDecrementClick={() => handleDecrementSubAttribue('attack')}
        className="attack"
        points={attack}
      >
        Атака
      </PointsController>

      <PointsController
        onIncrementClick={() => handleIncrementAttribute('dexterity')}
        onDecrementClick={() => handleDecrementAttribute('dexterity')}
        className="dexterity"
        points={d}
      >
        Ловкость
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('stealth', 'dexterity')
        }
        onDecrementClick={() => handleDecrementSubAttribue('stealth')}
        className="stealth"
        points={stealth}
      >
        Стелс
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('archery', 'dexterity')
        }
        onDecrementClick={() => handleDecrementSubAttribue('archery')}
        className="archery"
        points={archery}
      >
        Стрельба из лука
      </PointsController>

      <PointsController
        onIncrementClick={() => handleIncrementAttribute('intelligence')}
        onDecrementClick={() => handleDecrementAttribute('intelligence')}
        className="intelligence"
        points={i}
      >
        Интелект
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('learnability', 'intelligence')
        }
        onDecrementClick={() => handleDecrementSubAttribue('learnability')}
        className="learnability"
        points={learnability}
      >
        Обучаемость
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('survival', 'intelligence')
        }
        onDecrementClick={() => handleDecrementSubAttribue('survival')}
        className="survival"
        points={survival}
      >
        Выживание
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('medicine', 'intelligence')
        }
        onDecrementClick={() => handleDecrementSubAttribue('medicine')}
        className="medicine"
        points={medicine}
      >
        Медицина
      </PointsController>

      <PointsController
        onIncrementClick={() => handleIncrementAttribute('charisma')}
        onDecrementClick={() => handleDecrementAttribute('charisma')}
        className="charisma"
        points={c}
      >
        Харизма
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('intimidation', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('intimidation')}
        className="intimidation"
        points={intimidation}
      >
        Запугивание
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('insight', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('insight')}
        className="insight"
        points={insight}
      >
        Проницательность
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('appearance', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('appearance')}
        className="appearance"
        points={appearance}
      >
        Внешний вид
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('manipulation', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('manipulation')}
        className="manipulation"
        points={manipulation}
      >
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
  .intelligence {
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
