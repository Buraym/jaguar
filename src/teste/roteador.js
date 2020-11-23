import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from '../components/Header'
import Segunda from '../Home-Gerente/Segunda'

function roteador() {
    return(
        <Router>
                <Switch>
                    <Link to="/"> </Link>
                    <Route path="/" exact component={Header} />
                    <Route path="/segunda" component={Segunda} />
                </Switch>   
        <Router/>
    );
}
export default roteador;