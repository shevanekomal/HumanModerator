import './App.css';
import DataProvider from './Context/DataProvider'
import HumanModerator from './Components/HumanModerator'
import {useState} from 'react'
import PreviewPage from './Components/PreviewPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import LeftPamel from './Components/LeftPanel';
import Home from './Components/Home'
import Uploads from './Components/Uploads'

function App() {
 
  return (
    <DataProvider>
    <div className='App'>
    <Router>
    <div className='leftPannel'>
     <LeftPamel />
    </div>
    <div> 
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/uploads" exact component={Uploads} />
          <Route path="/moderator" exact component={HumanModerator} />
          <Route component={(<h1>Not Found 404</h1>)} />
        </Switch>
      </div>
      </Router>
    </div>
     
    </DataProvider>
   
  );
}

export default App;
