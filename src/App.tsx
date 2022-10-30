import {useState, useContext} from 'react';
import {RPGCtx, RPGCtxProvider} from './context/RPGContext';
import WelcomeWindow from './components/WelcomeWindow';
import CharacterMenu from './components/CharacterMenu';
import characterData from './utils/data';
import {downloadAsJSON} from './utils/helpers';

const App = (): JSX.Element => {
  const {state, dispatch} = useContext(RPGCtx);
  const [showMenu, setShowMenu] = useState(false);

  const handleLoadCharacterData = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log('work');
    const el = evt.target;
    const fileReader = new FileReader();
    if (el.files !== null && el.files.length > 0) {
      fileReader.readAsText(el.files[0], 'UTF-8');
      fileReader.onload = (e) => {
        if (typeof fileReader.result === 'string') {
          console.log(JSON.parse(fileReader.result));
        }
      };
    }
  };

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    downloadAsJSON(characterData);
  };

  const handleNewCharacter = (): void => {
    setShowMenu(true);
  };

  return (
    <RPGCtxProvider>
      {showMenu ? (
        <CharacterMenu />
      ) : (
        <WelcomeWindow
          onNewCharacter={handleNewCharacter}
          onChange={handleLoadCharacterData}
        />
      )}
    </RPGCtxProvider>
  );
};

export default App;
