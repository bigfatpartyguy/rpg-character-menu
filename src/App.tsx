import ProgressBar from './components/ProgressBar';
import colors from './styledParams/colors';

const App = (): JSX.Element => {
  return (
    <ProgressBar
      progress={80}
      margin="50px"
      width="50%"
      bgColor={colors['0']}
      progressColor={colors['6']}
      height="15px"
    />
  );
};

export default App;
