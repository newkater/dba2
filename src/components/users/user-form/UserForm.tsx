import React, {FC, useEffect, useState} from "react";
import {User} from "../../../models/User";
import {TextField} from "../../shared/form/text-field/TextField";
import {NumberField} from "../../shared/form/number-field/NumberField";
import * as api from "../../../api/api";
import {useNavigate} from "react-router-dom";
import {Country} from "../../../models/Country";
import {Countries} from "../../../api/api";
import {SelectField} from "../../shared/form/select-field/SelectField";

export interface UserFormProps {
    user: User,
    formType: "create" | "edit"
}

export const UserForm: FC<UserFormProps> = ({user, formType}) => {
    const [userForm, setUserForm] = useState(user);
    const [countries, setCountries] = useState<Country[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadCountries = async () => {
            console.log("countries loading...");
            try {
                const countries = await Countries.getList();
                setCountries(countries);
            } catch (e) {
                console.error(e);
                alert("countries not found");
            }
        };
        loadCountries();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUserForm({...userForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = async () => {
        console.log("submiting....");
        console.log(userForm);
        if (formType === "create") {
            try {
                await api.Users.create(userForm);
                navigate("/users");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await api.Users.update(userForm);
                navigate("/users");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    return (<div>
        <form action="">
            <TextField name={"email"} value={userForm.email} label={"Email"} onChange={handleChange}></TextField>
            <TextField name={"name"} value={userForm.name} label={"First Name"} onChange={handleChange}></TextField>
            <TextField name={"surname"} value={userForm.surname} label={"Second Name"}
                       onChange={handleChange}></TextField>
            <NumberField name={"salary"} value={userForm.salary} label={"Salary"} onChange={handleChange} min={10000}
                         max={600000} step={1000}></NumberField>
            <TextField name={"phone"} value={userForm.phone} label={"Phone Number"} onChange={handleChange}></TextField>
            <SelectField value={userForm.cname} onChange={handleChange} label={"Country"} name={"cname"}
                         options={countries.map(opt => ({text: opt.cname, value: opt.cname}))}></SelectField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                <button type={"button"} onClick={() => navigate("/users")}>Cancel</button>
            </div>
        </form>
    </div>);
}