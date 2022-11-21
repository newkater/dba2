import {FC} from "react";
import {Link} from "react-router-dom";
import {RecordList} from "../../components/records/record-list/RecordList";

export const RecordListPage: FC = () => {
    return (<>
        <Link to='/record/create'>Create Record</Link>
        <RecordList></RecordList>
    </>)
}