import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Employees from './components/Employees';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={MainSection} />
          <Route path="/employees" component={Employees} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


