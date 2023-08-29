import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import HomeRoute from './routes/homeroute';
import EmployeesRoute from './routes/employeesroute';

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
