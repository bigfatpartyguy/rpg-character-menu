import ProgressBar from './components/ProgressBar';
import NameInput from './components/NameInput';
import colors from './styledParams/colors';

const App = (): JSX.Element => {
  return (
    <>
      <h1>Адам</h1>
      <h3>Сила</h3>
      <h3>Харизма</h3>
      <NameInput color={colors['8']} />
      <ProgressBar
        progress={60}
        width="60%"
        bgColor={colors['0']}
        progressColor={colors['6']}
        height="15px"
        roundedCorners={true}
        bevel
      />
    </>
  );
};

export default App;
