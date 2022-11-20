import {FC} from "react";
import {useParams} from "react-router-dom";

export const DiscoverEditPage: FC = () => {
    const {cname, disease_code} = useParams();

    return (<>
        <h2>Discover Edit Page</h2>
        <p>{cname} {disease_code}</p>
    </>)
};