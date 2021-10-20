import React from 'react'
import styledComponentsCjs from 'styled-components'
import login from '../img/login.gif'

const MainLogin = styledComponentsCjs.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Login () {
    return(
        <MainLogin>
            <img src={login} alt='login' />
        </MainLogin>
    )
}