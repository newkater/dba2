import {FC} from "react";
import {DiscoverList} from "../../components/discovers/discover-list/DiscoverList";
import {Link} from "react-router-dom";

export const DiscoverListPage: FC = () => {
    return (<>
        <Link to='/discover/create'>Create Discover</Link>
        <DiscoverList></DiscoverList>
    </>)
}