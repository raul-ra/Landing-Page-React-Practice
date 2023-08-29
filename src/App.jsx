import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeRoute from './routes/HomeRoute';
import EmployeesRoute from './routes/EmployeesRoute';

const App = () => {
  return (
      <>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact component={HomeRoute} />
            <Route path="/employees" component={EmployeesRoute} />
          </Routes>
        </BrowserRouter>
      <Footer />
      </>
  );
};

export default App;
