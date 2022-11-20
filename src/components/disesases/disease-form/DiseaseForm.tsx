import {Disease} from "../../../models/Disease";
import {FC} from "react";
import {useForm} from "../../../hooks/UseForm";
import {useNavigate} from "react-router-dom";
import {Diseases} from "../../../api/api";
import {TextField} from "../../shared/form/text-field/TextField";
import {NumberField} from "../../shared/form/number-field/NumberField";

export interface DiseaseFormProps {
    disease: Disease,
    formType: "create" | "edit"
}

export const DiseaseForm: FC<DiseaseFormProps> = ({disease, formType}) => {
    const {form, handleChange} = useForm(disease);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log("submiting....");
        console.log(form);
        if (formType === "create") {
            try {
                await Diseases.create(form);
                navigate("/disease");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await Diseases.update(form);
                navigate("/disease");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    return (<div>
        <form action="">
            <TextField name={"disease_code"} onChange={handleChange} label={"Disease Code"}
                       value={form.disease_code} readonly={formType === "edit"}></TextField>
            <TextField name={"pathogen"} onChange={handleChange} label={"Pathogen"}
                       value={form.pathogen}></TextField>
            <TextField name={"description"} onChange={handleChange} label={"Description"}
                       value={form.description}></TextField>
            <NumberField name={"id"} value={form.id} label={"ID"} onChange={handleChange}></NumberField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                <button type={"button"} onClick={() => navigate("/disease")}>Cancel</button>
            </div>
        </form>
    </div>);
}