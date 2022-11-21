import {Doctor} from "../../../models/Doctor";
import {FC, useEffect, useState} from "react";
import {useForm} from "../../../hooks/UseForm";
import {User} from "../../../models/User";
import {useNavigate} from "react-router-dom";
import {Doctors, Users} from "../../../api/api";
import {SelectField} from "../../shared/form/select-field/SelectField";
import {TextField} from "../../shared/form/text-field/TextField";

export interface DoctorFormProps {
    doctor: Doctor,
    formType: "create" | "edit"
}

export const DoctorForm: FC<DoctorFormProps> = ({doctor, formType}) => {
    const {form, handleChange} = useForm(doctor);

    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUsers = async () => {
            console.log("users loading...");
            try {
                const users = await Users.getList();
                setUsers(users);
            } catch (e) {
                console.error(e);
                alert("users not found");
            }
        };
        loadUsers();
    }, []);

    const handleSubmit = async () => {
        console.log("submitting....");
        console.log(form);
        if (formType === "create") {
            try {
                await Doctors.create(form);
                navigate("/doctors");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await Doctors.update(form);
                navigate("/doctors");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    return (<div>
        <form action="">
            <SelectField value={form.email} onChange={handleChange} label={"User"} name={"email"}
                         readonly={(formType==="edit")} options={users.map(opt => ({text: opt.name + " " + opt.surname, value: opt.email}))}></SelectField>
            <TextField name={"degree"} label={"Degree"} value={form.degree} onChange={handleChange}></TextField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                <button type={"button"} onClick={() => navigate("/doctors")}>Cancel</button>
            </div>
        </form>
    </div>);
}