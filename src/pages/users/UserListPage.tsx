import {FC} from "react";
import {UserList} from "../../components/users/user-list/UserList";
import {Link} from "react-router-dom";

export const UserListPage: FC = () => {
    return (<>
        <h2>User List Page</h2>
        <Link to='/users/create'>Create User</Link>
        <UserList></UserList>
    </>)
};