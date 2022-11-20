import {FC} from "react";
import {useParams} from "react-router-dom";

export const DiseaseEditPage: FC = () => {
    const {id} = useParams();
    return (<>
        <h2>Disease Edit Page {id}</h2>
    </>)
};