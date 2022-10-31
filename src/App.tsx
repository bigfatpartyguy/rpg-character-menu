import {useState} from 'react';
import {RPGCtxProvider} from './context/RPGContext';
import WelcomeWindow from './components/WelcomeWindow';
import CharacterMenu from './components/CharacterMenu';

const App = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <RPGCtxProvider>
      {showMenu ? (
        <CharacterMenu />
      ) : (
        <WelcomeWindow openMenu={() => setShowMenu(true)} />
      )}
    </RPGCtxProvider>
  );
};

export default App;
