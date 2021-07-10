import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register'
import { Diary } from './components/Diary/Diary'
import { Workouts } from './components/Workouts/Workouts'
import { Profile } from './components/Profile/Profile';
import { Library } from './components/ExerciseLibrary/Library';

function App() {

  return (
    <div className="App">
      {/*<Login />*/}
      {<Register />}
      {<Diary />}
      {/*<Workouts/>*/}
      {/*<Library/>*/}
      {/*<Profile />*/}
      
    </div>
  );
}

export default App;
