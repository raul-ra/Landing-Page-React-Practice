import { Route } from 'react-router-dom';
import MainSection from '../components/MainSection';

const HomeRoute = () => {
    return (
    <Route path="/" exact component={MainSection} />
    );
};

export default HomeRoute;