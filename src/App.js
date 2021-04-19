import { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const Todo = lazy(() => import('./pages/Todo.jsx'));
const TaskPage = lazy(() => import('./pages/Task.jsx'));

const App = props => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/tasks'>Todo</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={'Loading...'}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/tasks/:taskId' component={TaskPage} />
          <Route path='/tasks' component={Todo} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
