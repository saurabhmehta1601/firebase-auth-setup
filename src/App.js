import { lazy, Suspense } from "react";
import {Switch,Route} from 'react-router-dom'

const Home = lazy(() => import ('./pages/Home') )

function App() {
  return (
    <Suspense fallback={<div> Loading... </div>} >
    <Switch>
      <Route>

      </Route>
    </Switch>
    </Suspense>
  );
}

export default App;
