import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login } from './components/Login';
import { Logout } from './components/Logout'
import { Register } from './components/Register'
import { Diary } from './components/Diary/Diary'
import { Workouts } from './components/Workouts/Workouts'
import { Library } from './components/ExerciseLibrary/Library'
import { Analytics } from './components/Analytics/Analytics'
import { Profile } from './components/Profile/Profile'


import './App.css';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'      component={Login}     exact />
          <Route path='/register'   component={Register}  exact />
          <Route path='/logout'     component={Logout}    exact />
          <Route path='/diary'      component={Diary}     exact />
          <Route path='/workouts'   component={Workouts}  exact />
          <Route path='/library'    component={Library}   exact />
          <Route path='/analytics'  component={Analytics} exact />
          <Route path='/profile'    component={Profile}   exact />
        </Switch>
      </Router>

      
      
    </div>
  );
}

export default App;
