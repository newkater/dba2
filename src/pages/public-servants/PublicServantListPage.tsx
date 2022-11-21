import {FC} from "react";
import {Link} from "react-router-dom";
import {PublicServantList} from "../../components/public-servants/public-servant-list/PublicServantList";

export const PublicServantListPage: FC = () => {
    return (<>
        <h2>Public Servant List Page</h2>
        <Link to='/publicservant/create'>Create Public Servant</Link>
        <PublicServantList></PublicServantList>
    </>)
};