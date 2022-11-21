import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Doctor} from "../../models/Doctor";
import {Doctors} from "../../api/api";
import {DoctorForm} from "../../components/doctors/doctor-form/DoctorForm";

export const DoctorEditPage: FC = () => {
    const [value, setValue] = useState<Doctor | undefined>(undefined);

    const {email} = useParams();
    useEffect(() => {
        if (email === undefined) {
            throw new Error("email undefined");
        }
        const getDoctor = async () => {
            try {
                setValue(await Doctors.get(email));
            } catch (e) {
                console.error(e);
                alert("unable to load doctor in user update");
            }
        }
        getDoctor();
    }, [email]);

    return (<>
        <h2>Doctor Edit Page {email}</h2>
        {value === undefined ? <div>loading user..</div> : <DoctorForm formType={"edit"} doctor={value}></DoctorForm>}
    </>)
};