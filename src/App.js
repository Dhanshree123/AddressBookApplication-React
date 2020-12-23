import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
}from "react-router-dom";
import AddressBookForm from './components/addressbook-form/addressbook-form.jsx';

function App() {
  return (
    <div className="App">
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/form">
            <AddressBookForm />
          </Route>
        </Switch>
      </Router>
      </div>  
    </div>
  );
}

export default App;
