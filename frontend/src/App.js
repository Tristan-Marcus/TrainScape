import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login } from './containers/UserAuth/components/Login';
import { Logout } from './containers/UserAuth/components/Logout'
import { Register } from './containers/UserAuth/components/Register'
import { Diary } from './containers/Diary/components/Diary'
import { Workouts } from './containers/Workouts/components/Workouts'
import { Library } from './containers/ExerciseLibrary/components/Library'
import { Analytics } from './containers/Analytics/components/Analytics'
import { Profile } from './containers/Profile/components/Profile'

import './App.css';

function App() {

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
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
