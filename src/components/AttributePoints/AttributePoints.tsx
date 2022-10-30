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
      strength: str,
      attack: att,
      dexterity: dex,
      stealth: ste,
      archery: arc,
      intelligence: int,
      learnability: lea,
      survival: sur,
      medicine: med,
      charisma: cha,
      appearance: app,
      manipulation: man,
      insight: ins,
      intimidation: inti,
    },
    state,
    dispatch,
  } = useContext(RPGCtx);

  useEffect(() => {
    const {level} = calculateLevel(
      Object.values([
        str,
        att,
        dex,
        ste,
        arc,
        int,
        lea,
        sur,
        med,
        cha,
        app,
        man,
        ins,
        inti,
      ])
    );
    dispatch(setLevel(level));
  }, [str, att, dex, ste, arc, int, lea, sur, med, cha, app, man, ins, inti]);

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
        points={str}
      >
        Сила
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('attack', 'strength')
        }
        onDecrementClick={() => handleDecrementSubAttribue('attack')}
        className="attack"
        points={att}
      >
        Атака
      </PointsController>

      <PointsController
        onIncrementClick={() => handleIncrementAttribute('dexterity')}
        onDecrementClick={() => handleDecrementAttribute('dexterity')}
        className="dexterity"
        points={dex}
      >
        Ловкость
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('stealth', 'dexterity')
        }
        onDecrementClick={() => handleDecrementSubAttribue('stealth')}
        className="stealth"
        points={ste}
      >
        Стелс
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('archery', 'dexterity')
        }
        onDecrementClick={() => handleDecrementSubAttribue('archery')}
        className="archery"
        points={arc}
      >
        Стрельба из лука
      </PointsController>

      <PointsController
        onIncrementClick={() => handleIncrementAttribute('intelligence')}
        onDecrementClick={() => handleDecrementAttribute('intelligence')}
        className="intelligence"
        points={int}
      >
        Интелект
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('learnability', 'intelligence')
        }
        onDecrementClick={() => handleDecrementSubAttribue('learnability')}
        className="learnability"
        points={lea}
      >
        Обучаемость
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('survival', 'intelligence')
        }
        onDecrementClick={() => handleDecrementSubAttribue('survival')}
        className="survival"
        points={sur}
      >
        Выживание
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('medicine', 'intelligence')
        }
        onDecrementClick={() => handleDecrementSubAttribue('medicine')}
        className="medicine"
        points={med}
      >
        Медицина
      </PointsController>

      <PointsController
        onIncrementClick={() => handleIncrementAttribute('charisma')}
        onDecrementClick={() => handleDecrementAttribute('charisma')}
        className="charisma"
        points={cha}
      >
        Харизма
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('intimidation', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('intimidation')}
        className="intimidation"
        points={inti}
      >
        Запугивание
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('insight', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('insight')}
        className="insight"
        points={ins}
      >
        Проницательность
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('appearance', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('appearance')}
        className="appearance"
        points={app}
      >
        Внешний вид
      </PointsController>
      <PointsController
        onIncrementClick={() =>
          handleIncrementSubAttribute('manipulation', 'charisma')
        }
        onDecrementClick={() => handleDecrementSubAttribue('manipulation')}
        className="manipulation"
        points={man}
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
