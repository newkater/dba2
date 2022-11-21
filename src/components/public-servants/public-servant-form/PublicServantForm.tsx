import {PublicServant} from "../../../models/PublicServant";
import {FC, useEffect, useState} from "react";
import {useForm} from "../../../hooks/UseForm";
import {User} from "../../../models/User";
import {useNavigate} from "react-router-dom";
import {PublicServants, Users} from "../../../api/api";
import {SelectField} from "../../shared/form/select-field/SelectField";
import {TextField} from "../../shared/form/text-field/TextField";

export interface PublicServantFormProps {
    publicServant: PublicServant,
    formType: "create" | "edit"
}

export const PublicServantForm: FC<PublicServantFormProps> = ({publicServant, formType}) => {
    const {form, handleChange} = useForm(publicServant);

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
                await PublicServants.create(form);
                navigate("/publicservant");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await PublicServants.update(form);
                navigate("/publicservant");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    const handleDelete = async () => {
        try {
            if (window.confirm("want to delete public servant?")) {
                await PublicServants.delete(publicServant);
                navigate('/publicservant');
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete public servant");
        }
    }

    return (<div>
        <form action="">
            <SelectField value={form.email} onChange={handleChange} label={"User"} name={"email"}
                         readonly={(formType==="edit")} options={users.map(opt => ({text: opt.name + " " + opt.surname, value: opt.email}))}></SelectField>
            <TextField name={"department"} label={"Department"} value={form.department} onChange={handleChange}></TextField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                {formType==="create"?null:<button type={"button"} onClick={handleDelete}>Delete</button>}
                <button type={"button"} onClick={() => navigate("/publicservant")}>Cancel</button>
            </div>
        </form>
    </div>);
}