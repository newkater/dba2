import {FC} from "react";
import {Link} from "react-router-dom";
import {SpecializeList} from "../../components/specializes/specialize-list/SpecializeList";

export const SpecializeListPage: FC = () => {
    return (<>
        <Link to='/specialize/create'>Create Specialize</Link>
        <SpecializeList></SpecializeList>
    </>)
}