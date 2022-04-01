import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './../Components/HomePage';
import UserSignInPage from './../Components/UserSignInPage';
import NotFoundPage from './../Components/NotFoundPage';
import HelpPage from './../Components/HelpPage';
import ToolBar from './../Components/Toolbar';
import WorkSignInPage from './../Components/WorkSignInPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './../Components/LoginPage';
import ServicePage from './../Components/ServicePage';
import ListOfServicePage from './../Components/ListServicePage';
import Payment from "../Components/Payment";



const AppRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <ToolBar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/UserSignIn" component={UserSignInPage} />
                <Route path="/WorkSignIn" component={WorkSignInPage} />
                <Route path="/ListOfService" component={ListOfServicePage} />
                <Route path="/Service" component={ServicePage} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/payment" component={Payment} />
                <Route component={NotFoundPage} />
            </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default AppRouter;