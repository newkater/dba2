import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout, Home} from "./pages";
import {UserCreatePage, UserEditPage, UserListPage} from "./pages/users";
import {CountryCreate, CountryEdit, CountryList} from "./pages/countries";
import {DiseaseCreate, DiseaseEdit, DiseaseList} from "./pages/diseases";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='users'>
                        <Route index element={<UserListPage/>}/>
                        <Route path='create' element={<UserCreatePage/>}/>                        <Route path=':id' element={<UserEditPage/>}/>
                    </Route>
                    <Route path='countries'>
                        <Route index element={<CountryList/>}/>
                        <Route path='create' element={<CountryCreate/>}/>
                        <Route path=':id' element={<CountryEdit/>}/>
                    </Route>
                    <Route path='diseases'>
                        <Route index element={<DiseaseList/>}/>
                        <Route path='create' element={<DiseaseCreate/>}/>
                        <Route path=':id' element={<DiseaseEdit/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
