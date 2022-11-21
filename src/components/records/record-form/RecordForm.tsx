import {Record} from "../../../models/Record";
import {FC, useEffect, useState} from "react";
import {useForm} from "../../../hooks/UseForm";
import {Country} from "../../../models/Country";
import {Disease} from "../../../models/Disease";
import {PublicServant} from "../../../models/PublicServant";
import {useNavigate} from "react-router-dom";
import {Countries, Diseases, PublicServants, Records} from "../../../api/api";
import {SelectField} from "../../shared/form/select-field/SelectField";
import {NumberField} from "../../shared/form/number-field/NumberField";

export interface RecordFormProps {
    record: Record,
    formType: "create" | "edit"
}

export const RecordForm: FC<RecordFormProps> = ({record, formType}) => {
    const {form, handleChange} = useForm(record);

    const [countries, setCountries] = useState<Country[]>([]);
    const [diseases, setDiseases] = useState<Disease[]>([])
    const [publicServants, setPublicServants] = useState<PublicServant[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        const loadAll = async () => {
            console.log("loading... all?..");
            try {
                const countries = await Countries.getList();
                setCountries(countries);

                const diseases = await Diseases.getList();
                setDiseases(diseases);

                const publicServants = await PublicServants.getList();
                setPublicServants(publicServants);
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
                await Records.create(form);
                navigate("/record");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await Records.update(form);
                navigate("/record");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    const handleDelete = async () => {
        try {
            if (window.confirm("want to record discover?")) {
                await Records.delete(record);
                navigate('/record');
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete record");
        }
    }

    return (<div>
        <form action="">
            <SelectField readonly={formType === "edit"} value={form.email} label={"Public Servant"} name={"email"}
                         onChange={handleChange} options={publicServants.map(opt => ({
                text: opt.email + " " + opt.department,
                value: opt.email
            }))}></SelectField>
            <SelectField readonly={formType === "edit"} value={form.cname} onChange={handleChange} label={"Country"}
                         name={"cname"}
                         options={countries.map(opt => ({text: opt.cname, value: opt.cname}))}></SelectField>
            <SelectField readonly={formType === "edit"} value={form.disease_code} onChange={handleChange}
                         label={"Disease"} name={"disease_code"}
                         options={diseases.map(opt => ({
                             text: opt.disease_code,
                             value: opt.disease_code
                         }))}></SelectField>
            <NumberField onChange={handleChange} label={"Total Deaths"} name={"total_deaths"} value={form.total_deaths} step={1}></NumberField>
            <NumberField onChange={handleChange} label={"Total Patients"} name={"total_patients"} value={form.total_patients} step={1}></NumberField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                {formType === "create" ? null : <button type={"button"} onClick={handleDelete}>Delete</button>}
                <button type={"button"} onClick={() => navigate("/record")}>Cancel</button>
            </div>
        </form>
    </div>);
}