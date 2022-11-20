import {FC} from "react";
import {Link} from "react-router-dom";
import {DiseaseTypeList} from "../../components/disease-types/disease-type-list/DiseaseTypeList";

export const DiseaseTypeListPage: FC = () => {
    return (<>
        <h2>Disease Type List Page</h2>
        <Link to='/diseasetype/create'>Create Disease Type</Link>
        <DiseaseTypeList></DiseaseTypeList>
    </>)
};