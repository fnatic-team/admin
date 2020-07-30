import React from "react";
import { Switch, Route } from "react-router-dom";

import { Dashboard, Admins, Login, CreateAdmin, EditAdmin, Speaker, Audience, Transaksi } from "../pages";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/dashboard/admins">
                <Admins />
            </Route>
            <Route exact path="/dashboard/admins/create">
                <CreateAdmin />
            </Route>
            <Route exact path="/dashboard/admins/edit">
                <EditAdmin />
            </Route>
            <Route exact path="/dashboard/speaker">
                <Speaker />
            </Route>
            <Route exact path="/dashboard/audience">
                <Audience />
            </Route>
            <Route exact path="/dashboard/transaksi">
                <Transaksi />
            </Route>
        </Switch>
    );
}