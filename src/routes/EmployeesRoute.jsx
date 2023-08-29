import { Route } from 'react-router-dom';
import Employees from '../components/Employees/Employees';

const EmployeesRoute = () => {
    return (
    <Route path="/employees" component={Employees} />
    );
};

export default EmployeesRoute;