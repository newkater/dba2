import {Discover} from "../../../models/Discover";
import {FC, useEffect, useState} from "react";
import {Country} from "../../../models/Country";
import {useForm} from "../../../hooks/UseForm";
import {useNavigate} from "react-router-dom";
import {Countries, Discovers, Diseases} from "../../../api/api";
import {SelectField} from "../../shared/form/select-field/SelectField";
import {Disease} from "../../../models/Disease";
import {DateField} from "../../shared/form/date-field/DateField";

export interface DiscoverFormProps {
    discover: Discover,
    formType: "create" | "edit"
}

export const DiscoverForm: FC<DiscoverFormProps> = ({discover, formType}) => {
    const {form, handleChange} = useForm(discover);

    const [countries, setCountries] = useState<Country[]>([]);
    const [diseases, setDiseases] = useState<Disease[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        const loadAll = async () => {
            console.log("loading... all?..");
            try {
                const countries = await Countries.getList();
                setCountries(countries);

                const diseases = await Diseases.getList();
                setDiseases(diseases);
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
                await Discovers.create(form);
                navigate("/discover");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await Discovers.update(form);
                navigate("/discover");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    return (<div>
        <form action="">
            <SelectField readonly={formType === "edit"} value={form.cname} onChange={handleChange} label={"Country"}
                         name={"cname"}
                         options={countries.map(opt => ({text: opt.cname, value: opt.cname}))}></SelectField>
            <SelectField readonly={formType === "edit"} value={form.disease_code} onChange={handleChange}
                         label={"Disease"} name={"disease_code"}
                         options={diseases.map(opt => ({
                             text: opt.disease_code,
                             value: opt.disease_code
                         }))}></SelectField>
            <DateField value={form.first_enc_date} name={"first_enc_date"} label={"First Encounter Date"}
                       onChange={handleChange}></DateField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                <button type={"button"} onClick={() => navigate("/discover")}>Cancel</button>
            </div>
        </form>
    </div>);
}