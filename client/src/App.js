import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar, Home, Create, BlogDetails, SignupPage } from './components'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/log">
            <SignupPage />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;
