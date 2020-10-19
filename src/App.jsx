import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarLine from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Destination from './components/Destination.jsx';
import Travel from './components/Travel.jsx';
import Experience from './components/Experience.jsx';


const App = () => {
    return (
        <>
        <NavbarLine />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/travel" component={Travel} />
            <Route exact path="/destination" component={Destination} />
            <Route exact path="/experience" component={Experience} />
        </Switch>
        </>
    );
};

export default App;