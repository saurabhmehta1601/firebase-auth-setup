import { lazy, Suspense } from "react";
import {Switch,Route} from 'react-router-dom'

const Home = lazy(() => import ('./pages/Home') )
const Login = lazy(() => import ('./pages/Login') )
const SignUp = lazy(() => import ('./pages/SignUp') )

function App() {
  return (
    <Suspense fallback={<div> Loading... </div>} >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      
    </Switch>

    </Suspense>
  );
}

export default App;
