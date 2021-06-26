import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register'
import { Home } from './components/Home'
import { Workouts } from './components/Workouts/Workouts'

function App() {

  return (
    <div className="App">
      {/*<Login />*/}
      {/*<Register />*/}
      {/*<Home />*/}
      {<Workouts/>}
      
    </div>
  );
}

export default App;
