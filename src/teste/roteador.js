import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from '../components/Header'

function roteador() {
    return(
        <Router>
                <Switch>
                    <Link to="/"> </Link>
                    <Route path="/" exact component={Header} />
                    <Route path="/" exact component={Header} />
                </Switch>   
        <Router/>
    );
}
export default roteador;