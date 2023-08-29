import { Route } from 'react-router-dom';
import MainSection from '../components/mainsection';

const HomeRoute = () => {
    return (
    <Route path="/" exact component={MainSection} />
    );
};

export default HomeRoute;