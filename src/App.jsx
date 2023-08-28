import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomeRoute from './routes/HomeRoute';
import EmployeesRoute from './routes/EmployeesRoute';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeRoute} />
        <Route path="/employees" component={EmployeesRoute} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
