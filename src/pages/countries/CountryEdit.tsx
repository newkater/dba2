import {FC} from "react";
import {useParams} from "react-router-dom";

export const CountryEdit: FC = () => {
    const {id} = useParams();
    return (<>
        <h2>Country Edit Page {id}</h2>
    </>)
};