import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  // FIX2: Routes should be wrapped with Switch component from react-router-dom
  <Switch>
    <Route exact path="/" component={Home} />

    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
