import './App.css';
import Login from './components/login/login';
import style from './app.module.css';
import { Route, Switch } from 'react-router';
import Home from './components/home/home';
import { BrowserRouter } from 'react-router-dom';

function App({ authService, baseName }) {
  return (
    <div class={style.app}>
      <BrowserRouter>
        <Switch>
          <Route path={baseName} exact>
            <Login authService={authService} baseName={baseName} />
          </Route>
          <Route path={baseName + '/home'} exact>
            <Home authService={authService} baseName={baseName} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
