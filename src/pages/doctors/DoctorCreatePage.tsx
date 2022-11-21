import {FC} from "react";
import {Doctor} from "../../models/Doctor";
import {DoctorForm} from "../../components/doctors/doctor-form/DoctorForm";

export const DoctorCreatePage: FC = () => {
    const doctor: Doctor = {
        degree: "", email: ""
    }

    return (<>
        <h2>Doctor Create Page</h2>
        <DoctorForm formType={"create"} doctor={doctor}></DoctorForm>
    </>)
};