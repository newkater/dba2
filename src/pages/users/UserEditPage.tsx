import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {User} from "../../models/User";
import api from "../../api";
import {UserForm} from "../../components/users/user-form/UserForm";

export const UserEditPage: FC = () => {
    const [value, setValue] = useState<User | undefined>(undefined);

    const {id} = useParams();
    useEffect(() => {
        if (id === undefined) {
            throw new Error("id undefined");
        }
        const getUser = async () => {
            try {
                setValue(await api.Users.get(id));
            } catch (e) {
                console.error(e);
                alert("unable to load user in user update");
            }
        }
        getUser();
    }, [id]);

    return (<>
        <h2>User Edit Page {id}</h2>
        {value === undefined ? <div>loading user..</div> : <UserForm formType={"edit"} user={value}></UserForm>}
    </>)
};