import { Route } from 'react-router-dom';
import Employees from '../components/employees';

const EmployeesRoute = () => {
    return (
    <Route path="/employees" component={Employees} />
    );
};

export default EmployeesRoute;