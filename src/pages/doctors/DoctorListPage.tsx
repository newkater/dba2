import {FC} from "react";
import {Link} from "react-router-dom";
import {DoctorList} from "../../components/doctors/doctor-list/DoctorList";

export const DoctorListPage: FC = () => {
    return (<>
        <h2>Doctor List Page</h2>
        <Link to='/doctors/create'>Create Doctor</Link>
        <DoctorList></DoctorList>
    </>)
};