import {useContext} from 'react';
import {RPGCtx} from '../../context/RPGContext';
import Button from '../Button';
import styled from 'styled-components';
import {checkData} from '../../utils/helpers';
import {loadData} from '../../context/actionTypes';

const WelcomeWindow = ({
  className,
  openMenu,
}: WelcomeWindowProps): JSX.Element => {
  const {dispatch} = useContext(RPGCtx);
  const handleLoadCharacterData = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const el = evt.target;
    const fileReader = new FileReader();
    if (el.files !== null && el.files.length > 0) {
      fileReader.readAsText(el.files[0], 'UTF-8');
      fileReader.onload = (e) => {
        if (typeof fileReader.result === 'string') {
          const data = JSON.parse(fileReader.result);
          if (checkData(data)) {
            dispatch(loadData(data));
            openMenu();
          }
        }
      };
    }
  };

  const handleNewCharacter = (): void => {
    openMenu();
  };
  return (
    <section className={className}>
      <h1>Добро пожаловать в меню RPG персонажа</h1>
      <h3>
        Создайте нового персонажа, или загрузите файл с готовыми
        характеристиками персонажа
      </h3>
      <div className="buttons">
        <Button type="button" onClick={handleNewCharacter}>
          Новый персонаж
        </Button>
        <Button type="file" onChange={handleLoadCharacterData}>
          Загрузить настройки
        </Button>
      </div>
    </section>
  );
};

const StyledWelcomeWindow = styled(WelcomeWindow)`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  h1 {
    margin-top: 0;
    color: var(--color-white);
    font-size: 2em;
  }
  h3 {
    color: var(--color-yellow-light);
    width: 80%;
    margin-bottom: 2em;
  }

  .buttons {
    height: 150px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
`;

// TYPES

interface WelcomeWindowProps {
  className?: string;
  openMenu: () => void;
}

export default StyledWelcomeWindow;
