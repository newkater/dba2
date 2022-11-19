import React, {FC, useState} from "react";
import {User} from "../../../models/User";
import {TextField} from "../../shared/form/text-field/TextField";
import {NumberField} from "../../shared/form/number-field/NumberField";
import  * as api from "../../../api/api";
import {useNavigate} from "react-router-dom";

export interface UserFormProps {
    user: User,
    formType: "create" | "edit"
}

export const UserForm: FC<UserFormProps> = ({user, formType}) => {
    const [values, setValues] = useState(user);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    const handleSubmit = async () => {
        console.log("submiting....");
        console.log(values);
        try {
            await api.Users.create(values);
            navigate("/users");
        } catch (e) {
            console.log("creation error");
        }
    }

    return (<div>
        <form action="">
            <TextField name={"email"} value={values.email} label={"Email"} onChange={handleChange}></TextField>
            <TextField name={"name"} value={values.name} label={"First Name"} onChange={handleChange}></TextField>
            <TextField name={"surname"} value={values.surname} label={"Second Name"} onChange={handleChange}></TextField>
            <NumberField name={"salary"} value={values.salary} label={"Salary"} onChange={handleChange} min={10000}
                         max={600000} step={1000}></NumberField>
            <TextField name={"phone"} value={values.phone} label={"Phone Number"} onChange={handleChange}></TextField>
            <TextField name={"cname"} value={values.cname} label={"Country"} onChange={handleChange}></TextField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </div>);
}