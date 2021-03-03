import logo from './logo.svg';
import './App.css';
import ClientSignUp from './Components/ClientSignUp'
import ClientSignIn from './Components/ClientSignIn'
import InstSignUp from './Components/InstructorSignUp'
import InstSignIn from './Components/InstructorSignIn'

function App() {
  return (
    <div className="App">
      Sign in!
    <ClientSignIn/>
    <InstSignIn/>
    Make an account
    <ClientSignUp/>
    <InstSignUp/>
    </div>
  );
}

export default App;
