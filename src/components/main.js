import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


import { HashRouter, Switch, Route } from 'react-router-dom';

const Main = () => (

    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
    </Switch>


)

export default Main;