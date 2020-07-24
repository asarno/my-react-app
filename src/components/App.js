import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

import { GlobalProvider } from '../utils/context/GlobalState';

function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;