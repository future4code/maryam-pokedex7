import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [login, setLogin] = useState(false)

    return(
        <GlobalContext.Provider value={{pokedex, setPokedex, login, setLogin}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
