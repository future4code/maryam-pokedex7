import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { DetailsPage } from "../pages/DetailsPage";
import { AboutPage } from "../pages/AboutPage";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import ErrorPage from "../pages/ErrorPage";

export const Router = () => {
    const {pokedex, setPokedex} = useContext(GlobalContext)

    useEffect(() => {
        if (pokedex.length > 0){
            window.localStorage.setItem("pokedex", JSON.stringify(pokedex))
        }
    }, [pokedex])

    useEffect(() => {
        if(window.localStorage.getItem("pokedex")){
            let pokedexStorage = JSON.parse(window.localStorage.getItem("pokedex"))
            setPokedex(pokedexStorage)
          }
    }, [])
    
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
            <Route exact path={"/about"}>
                <AboutPage/>
            </Route>

            <Route path={'*'}>
                <ErrorPage />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}