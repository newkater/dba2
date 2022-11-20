import {FC} from "react";
import {Link} from "react-router-dom";
import {DiseaseList} from "../../components/disesases/disease-list/DiseaseList";

export const DiseaseListPage: FC = () => {
    return (<>
        <h2>Disease List Page</h2>
        <Link to='/disease/create'>Create Disease</Link>
        <DiseaseList></DiseaseList>
    </>)
};