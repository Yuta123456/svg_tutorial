import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Input from './screens/Input';
//import Result from './screens/Result';
import Description from './screens/Description';
function App() {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Description} />
            <Route exact path="/Input" component={Input} />
            {/*<Route exact path="/Result" component={Result} />*/}
            <Route render={() => (<p>Page not found.</p>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
