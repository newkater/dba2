import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout, Home} from "./pages";
import {UserCreate, UserEdit, UserList} from "./pages/users";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path={'/users'}>
                        <Route index element={<UserList/>}/>
                        <Route path={'/create'} element={<UserCreate/>}/>
                        <Route path={'/:id'} element={<UserEdit/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
