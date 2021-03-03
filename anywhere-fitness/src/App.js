import logo from './logo.svg';
import './App.css';
import ClientSignUp from './Components/ClientSignUp'
import ClientSignIn from './Components/ClientSignIn'
import InstSignUp from './Components/InstructorSignUp'
import InstSignIn from './Components/InstructorSignIn'
import styled from 'styled-components'


function App() {
  return (
    <StyledApp>
      Sign in!
    <ClientSignIn/>
    <InstSignIn/>
    Make an account!
    <ClientSignUp/>
    <InstSignUp/>
    </StyledApp>
  );
}

const StyledApp = styled.div`

display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`

export default App;
