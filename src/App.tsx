import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout, Home} from "./pages";
import {UserCreatePage, UserEditPage, UserListPage} from "./pages/users";
import {CountryCreatePage, CountryEditPage, CountryListPage} from "./pages/countries";
import {DiseaseCreatePage, DiseaseEditPage, DiseaseListPage} from "./pages/diseases";
import {DiscoverListPage} from "./pages/discovers/DiscoverListPage";
import {DiscoverCreatePage} from "./pages/discovers/DiscoverCreatePage";
import {DiscoverEditPage} from "./pages/discovers";
import {DiseaseTypeCreatePage, DiseaseTypeEditPage, DiseaseTypeListPage} from "./pages/disease-types";
import {DoctorCreatePage, DoctorEditPage, DoctorListPage} from "./pages/doctors";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='users'>
                        <Route index element={<UserListPage/>}/>
                        <Route path='create' element={<UserCreatePage/>}/>
                        <Route path=':id' element={<UserEditPage/>}/>
                    </Route>
                    <Route path='doctors'>
                        <Route index element={<DoctorListPage/>}/>
                        <Route path='create' element={<DoctorCreatePage/>}/>
                        <Route path=':email' element={<DoctorEditPage/>}/>
                    </Route>
                    <Route path='countries'>
                        <Route index element={<CountryListPage/>}/>
                        <Route path='create' element={<CountryCreatePage/>}/>
                        <Route path=':cname' element={<CountryEditPage/>}/>
                    </Route>
                    <Route path='diseasetype'>
                        <Route index element={<DiseaseTypeListPage/>}/>
                        <Route path='create' element={<DiseaseTypeCreatePage/>}/>
                        <Route path=':id' element={<DiseaseTypeEditPage/>}/>
                    </Route>
                    <Route path='disease'>
                        <Route index element={<DiseaseListPage/>}/>
                        <Route path='create' element={<DiseaseCreatePage/>}/>
                        <Route path=':disease_code' element={<DiseaseEditPage/>}/>
                    </Route>
                    <Route path='discover'>
                        <Route index element={<DiscoverListPage/>}/>
                        <Route path='create' element={<DiscoverCreatePage/>}/>
                        <Route path=':cname/:disease_code' element={<DiscoverEditPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
