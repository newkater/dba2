import {FC, useEffect, useState} from "react";
import {Doctor} from "../../../models/Doctor";
import {Diseases, Doctors} from "../../../api/api";
import {Link} from "react-router-dom";
import {Disease} from "../../../models/Disease";

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

    const handleDelete = async (doctor: Doctor) => {
        try {
            if (window.confirm("want to delete doctor?")) {
                await Doctors.delete(doctor);
                const newDoctors = doctors.filter(d => (d.email !== doctor.email));
                setUsers(newDoctors);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete doctor");
        }
    }

    return (<>
        {isLoading ? <div>loading doctors ....</div> :
            <ul>
                {doctors.map(doctor => <li key={doctor.email}>{doctor.email} {doctor.degree}
                    <Link to={`/doctors/${doctor.email}`}>edit</Link>
                    <button onClick={() => handleDelete(doctor)}>delete</button>
                </li>)}
            </ul>}
    </>);
}