import {Specialize} from "../../../models/Specialize";
import {FC, useEffect, useState} from "react";
import {useForm} from "../../../hooks/UseForm";
import {Doctor} from "../../../models/Doctor";
import {useNavigate} from "react-router-dom";
import {DiseaseTypes, Doctors, Specializes} from "../../../api/api";
import {SelectField} from "../../shared/form/select-field/SelectField";
import {DiseaseType} from "../../../models/DiseaseType";

export interface SpecializeFormProps {
    specialize: Specialize,
    formType: "create" | "edit"
}

export const SpecializeForm: FC<SpecializeFormProps> = ({specialize, formType}) => {
    const {form, handleChange} = useForm(specialize);

    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [diseaseTypes, setDiseaseTypes] = useState<DiseaseType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadAll = async () => {
            console.log("loading... all?..");
            try {
                const doctors = await Doctors.getList();
                setDoctors(doctors);

                const dt = await DiseaseTypes.getList();
                setDiseaseTypes(dt);
            } catch (e) {
                console.error(e);
                alert("all not found (???)");
            }
        };
        loadAll();
    }, []);

    const handleSubmit = async () => {
        console.log("submitting....");
        console.log(form);
        if (formType === "create") {
            try {
                await Specializes.create(form);
                navigate("/specialize");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await Specializes.update(form);
                navigate("/specialize");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    const handleDelete = async () => {
        try {
            if (window.confirm("want to delete specialize?")) {
                await Specializes.delete(specialize);
                navigate('/specialize');
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete specialize");
        }
    }

    return (<div>
        <form action="">
            <SelectField readonly={formType === "edit"} value={form.email} onChange={handleChange} label={"Doctor"}
                         name={"email"}
                         options={doctors.map(opt => ({
                             text: opt.email + " " + opt.degree,
                             value: opt.email
                         }))}></SelectField>
            <SelectField readonly={formType === "edit"} value={form.id.toString()} onChange={handleChange}
                         label={"Disease Type"} name={"id"}
                         options={diseaseTypes.map(opt => ({
                             text: opt.description,
                             value: opt.id.toString()
                         }))}></SelectField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                {formType === "create" ? null : <button type={"button"} onClick={handleDelete}>Delete</button>}
                <button type={"button"} onClick={() => navigate("/specialize")}>Cancel</button>
            </div>
        </form>
    </div>);
}