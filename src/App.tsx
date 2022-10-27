import ProgressBar from './components/ProgressBar';
import NameInput from './components/NameInput';
import colors from './styledParams/colors';
import characterData from './utils/data';
import {downloadAsJSON} from './utils/helpers';
import Button from './components/Button';
import React from 'react';

const App = (): JSX.Element => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
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
  return (
    <>
      <Button type="file" onChange={handleChange}>
        Upload data
      </Button>
      <Button type="button" onClick={handleClick}>
        Download data
      </Button>
      {/* <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Download data</button> */}
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
