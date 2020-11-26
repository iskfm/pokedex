import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoadingScreen } from './components/loading';
import { Header, Footer } from './components/layouts';

const Pokemon = React.lazy(() =>
  import(/* webpackChunkName: 'pokemon' */ './modules/list'),
);

const App = () => (
  <>
    <Header />
    <React.Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path="/" component={Pokemon} exact />
        <Route path="/page/:page" component={Pokemon} />
        {/* <Route path="/type/:type" component={PokemonType} />
      <Route path="/pokemon/:pokemonId" component={PokemonDetail} /> */}
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </React.Suspense>
    <Footer />
  </>
);

export default App;
