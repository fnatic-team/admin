import React from "react";
import { Switch, Route } from "react-router-dom";

import { Dashboard, Admins, Login, CreateAdmin, EditAdmin, Speaker, Audience, Transaction, Newsletter, Contact } from "../pages";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/dashboard/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/dashboard/admins">
                <Admins />
            </Route>
            <Route exact path="/dashboard/admins/create">
                <CreateAdmin />
            </Route>
            <Route exact path="/dashboard/admins/edit/:id">
                <EditAdmin />
            </Route>
            <Route exact path="/dashboard/speaker">
                <Speaker />
            </Route>
            <Route exact path="/dashboard/audience">
                <Audience />
            </Route>
            <Route exact path="/dashboard/transaction">
                <Transaction />
            </Route>
            <Route exact path="/dashboard/newsletter">
                <Newsletter />
            </Route>
            <Route exact path="/dashboard/contact">
                <Contact />
            </Route>
        </Switch>
    );
}