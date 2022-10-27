import Button from '../Button';
import styled from 'styled-components';

const WelcomeWindow = (): JSX.Element => {
  return (
    <section className="welcomeWindow">
      <h1>Welcome to the rpg game</h1>
      <div className="buttons">
        <Button type="file">Upload data</Button>
        <Button type="button">New character</Button>
      </div>
    </section>
  );
};

const StyledWelcomeWindow = styled(WelcomeWindow)`
  h1 {
    color: red;
  }
`;

export default StyledWelcomeWindow;
