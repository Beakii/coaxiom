import React, { useState } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Header from '../components/header';
import NavDrawer from '../components/navDrawer';
import Landing from '../components/landing';
import About from '../components/about';
import Resources from '../components/resources';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Services from '../components/services';
import PrivacyStatement from '../components/privacystatement';
import Terms from '../components/terms';

import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline } from '@material-ui/core';


function ContentPage() {

    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );

    const [open, setOpen] = useState(false);

    const OpenCloseDrawer = () => {
        setOpen(!open);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const customHistory = createBrowserHistory();


    return (
        <div>
            <CssBaseline />
            <Router customHistory={customHistory}>
                <Header toggleDrawer={OpenCloseDrawer}/>
                <NavDrawer drawerState={open} closeDrawer={closeDrawer}/>

                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/Services" component={Services}/>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Resources" component={Resources}/>
                    {
                        isMobileSize 
                        ?
                        <Route exact path="/Contact" component={Contact}/>
                        :
                        null
                    }
                    <Route exact path="/Privacy" component={PrivacyStatement}/>
                    <Route exact path="/Terms" component={Terms}/>
                </Switch>

                <Footer/>
            </Router>
        </div>
    )
}

export default ContentPage

