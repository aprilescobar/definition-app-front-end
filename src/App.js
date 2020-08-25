import React from 'react';
import './styles.css'
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import InputForm from './Components/FindWord';
import Saved from './Components/Saved';
import WordCon from './Context/WordCon';
import SavedWordsCon from './Context/SavedWordsCon';

function App() {
  return (
    <div className="container">
    <Router>
      <WordCon>
        <SavedWordsCon>
          <Header />
          <Switch>
            <Route exact path='/' component={InputForm}/>
            <Route exact path='/saved' component={Saved}/>
          </Switch>
        </SavedWordsCon>
      </WordCon>
    </Router>
    </div>
  );
}

export default App;
