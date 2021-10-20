import React from "react";
import Header from "../components/Header";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { DetailsPage } from "../pages/DetailsPage";

import { Route, Switch, BrowserRouter } from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path={"/"}>
                <HomePage/>
            </Route>
            <Route exact path={"/pokedex"}>
                <PokedexPage/>
            </Route>
            <Route exact path={"/details/:name"}>
                <DetailsPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}