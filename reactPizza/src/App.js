import React, {useEffect, useState} from 'react';
import './App.css';
import { Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
               <Route exact path={'/'} component = {Home }></Route>
               <Route exact path={'/cart'} component= {Cart}></Route>
            </div>
        </div>
    );
}



export default App;
