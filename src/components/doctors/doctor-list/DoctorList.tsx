import {FC, useEffect, useState} from "react";
import {Doctor} from "../../../models/Doctor";
import {Doctors} from "../../../api/api";
import {Link} from "react-router-dom";

export const DoctorList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [doctors, setUsers] = useState<Doctor[]>([]);
    useEffect(() => {
        const getDoctors = async () => {
            setIsLoading(true);
            console.log("doctors loading");
            try {
                setUsers(await Doctors.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load user list");
            } finally {
                setIsLoading(false);
            }
        }
        getDoctors();
    }, [])
    return (<>
        {isLoading ? <div>loading doctors ....</div> :
            <ul>
                {doctors.map(doctor => <li key={doctor.email}>{doctor.email} {doctor.degree}
                    <Link to={`/doctors/${doctor.email}`}>edit</Link>
                </li>)}
            </ul>}
    </>);
}