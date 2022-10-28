import Button from '../Button';
import styled from 'styled-components';

const WelcomeWindow = ({
  className,
  onNewCharacter,
  onChange,
}: WelcomeWindowProps): JSX.Element => {
  return (
    <section className={className}>
      <h1>Добро пожаловать в меню RPG персонажа</h1>
      <h3>
        Создайте нового персонажа, или загрузите файл с готовыми
        характеристиками персонажа
      </h3>
      <div className="buttons">
        <Button type="button" onClick={onNewCharacter}>
          Новый персонаж
        </Button>
        <Button type="file" onChange={onChange}>
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
  onNewCharacter: () => void;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default StyledWelcomeWindow;
