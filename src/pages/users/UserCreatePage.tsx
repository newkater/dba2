import {FC} from "react";
import {UserForm} from "../../components/users/user-form/UserForm";
import {User} from "../../models/User";

export const UserCreatePage: FC = () => {
    const user: User = {
        cname: "",
        name: "",
        phone: "",
        salary: 0,
        surname: "",
        email: ""
    }

    return (<>
        <h2>User Create Page</h2>
        <UserForm formType={"create"} user={user}></UserForm>
    </>)
};