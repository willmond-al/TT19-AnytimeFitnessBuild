import logo from './logo.svg';
import './App.css';
import ClientSignUp from './Components/ClientSignUp'
import ClientSignIn from './Components/ClientSignIn'
import InstSignUp from './Components/InstructorSignUp'
import InstSignIn from './Components/InstructorSignIn'
import styled from 'styled-components'
import SignIn from './Components/ClientSignIn';


function App() {
  return (
    <StyledApp>

<div className="signin">
    <ClientSignIn/>
    <InstSignIn/>
</div>
<div className="signup">
    <ClientSignUp/>
    <InstSignUp/>
</div>
    </StyledApp>
  );
}

const StyledApp = styled.div`

display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
width: 100%

`

export default App;
