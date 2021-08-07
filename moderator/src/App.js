import './App.css';
import DataProvider from './Context/DataProvider'
import HumanModerator from './Components/HumanModerator'
import PreviewPage from './Components/PreviewPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <DataProvider>
    <HumanModerator />
      {/* <Router>
        <Switch>
          <Route path="/"  exact component={HumanModerator} />
          <Route path="/previewPage" exact component={PreviewPage} />
          <Route component={(<h1>Not Found 404</h1>)} />
        </Switch>
      </Router> */}
    </DataProvider>
   
  );
}

export default App;
