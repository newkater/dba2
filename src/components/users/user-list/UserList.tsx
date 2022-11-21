import {FC, useEffect, useState} from "react";
import {User} from "../../../models/User";
import {Link, useNavigate} from "react-router-dom";
import {Users} from "../../../api/api";

export const UserList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    useNavigate();
    useEffect(() => {
        const getUsers = async () => {
            setIsLoading(true);
            console.log("users loading");
            try {
                setUsers(await Users.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load user list");
            } finally {
                setIsLoading(false);
            }
        }
        getUsers();
    }, [])

    const handleDelete = async (user: User) => {
        try {
            if (window.confirm("want to delete user?")) {
                await Users.delete(user);
                const newUsers = users.filter(u => u.email !== user.email);
                setUsers(newUsers);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete user");
        }
    }

    return (<>
        {isLoading ? <div>loading users ....</div> :
            <ul>
                {users.map(user => <li key={user.email}>{user.email}
                    <Link to={`/users/${user.email}`}>edit</Link>
                    <button onClick={() => handleDelete(user)}>delete</button>
                </li>)}
            </ul>}
    </>);
}