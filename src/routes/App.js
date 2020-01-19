import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;