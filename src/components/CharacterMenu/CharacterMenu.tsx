import {useContext} from 'react';
import {RPGCtx} from '../../context/RPGContext';
import {changeName} from '../../context/actionTypes';
import NameInput from '../NameInput';
import styled from 'styled-components';

const CharacterMenu = ({className}: CharacterMenuProps): JSX.Element => {
  const {
    state: {name},
    dispatch,
  } = useContext(RPGCtx);
  return (
    <div className={className}>
      <div className="main-info">
        <div className="name-and-level">
          <NameInput
            value={name}
            onChange={(evt) => {
              dispatch(changeName(evt.target.value));
            }}
          />
        </div>
        <div className="base-stats"></div>
      </div>
    </div>
  );
};

// STYLES

const StyledCharacterMenu = styled(CharacterMenu)`
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
`;

// TYPES

interface CharacterMenuProps {
  className?: string;
}

export default StyledCharacterMenu;
