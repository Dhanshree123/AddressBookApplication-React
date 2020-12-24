import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
}from "react-router-dom";
import AddressBookForm from './components/addressbook-form/addressbook-form.jsx';
import AddressBookHome from './components/addressbook-home/addressbook-home.jsx';

function App() {
  return (
    <div className="App">
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/form/:id" component={AddressBookForm}>
            <AddressBookForm />
          </Route>
          <Route path = "/home"  component={AddressBookHome}>
            <AddressBookHome/>
          </Route>
        </Switch>
      </Router>
      </div>  
    </div>
  );
}

export default App;
