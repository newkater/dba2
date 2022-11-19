import {FC} from "react";
import {useParams} from "react-router-dom";

export const UserEdit: FC = () => {
    const {id} = useParams();
    return (<>
        <h2>User Edit Page {id}</h2>
    </>)
};