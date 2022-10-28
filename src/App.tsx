import {useState, useContext} from 'react';
import {RPGCtx, RPGCtxProvider} from './context/RPGContext';
import WelcomeWindow from './components/WelcomeWindow';
import CharacterMenu from './components/CharacterMenu';
import NameInput from './components/NameInput';
import characterData from './utils/data';
import {downloadAsJSON} from './utils/helpers';
import Button from './components/Button';

const App = (): JSX.Element => {
  const {state, dispatch} = useContext(RPGCtx);
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('work');
    const el = evt.target;
    const fileReader = new FileReader();
    if (el.files !== null && el.files.length > 0) {
      fileReader.readAsText(el.files[0], 'UTF-8');
      fileReader.onload = (e) => {
        if (typeof fileReader.result === 'string') {
          console.log('test');
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
          onChange={handleChange}
        />
      )}
    </RPGCtxProvider>
  );

  /* <Button type="file" onChange={handleChange}>
  <WelcomeWindow />
        Upload data
      </Button>
      <Button type="button" onClick={handleClick}>
        Download data
      </Button>
      <NameInput color={colors['8']} />
      <ProgressBar
        progress={60}
        width="60%"
        bgColor={colors['0']}
        progressColor={colors['6']}
        height="15px"
        roundedCorners={true}
        bevel
      /> */
};

export default App;
