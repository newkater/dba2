import {FC, useEffect, useState} from "react";
import {User} from "../../../models/User";
import * as api from "../../../api/api"

export const UserList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            setIsLoading(true);
            console.log("users loading");
            try {
                setUsers(await api.Users.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load user list");
            } finally {
                setIsLoading(false);
            }
        }
        getUsers();
    }, [])
    return (<>
        {isLoading ? <div>loading users ....</div> :
            <ul>
                {users.map(user => <li key={user.email}>{user.email}</li>)}
            </ul>}
    </>);
}