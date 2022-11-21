import React, {FC} from "react";
import {useForm} from "../../../hooks/UseForm";
import {DiseaseType} from "../../../models/DiseaseType";
import {useNavigate} from "react-router-dom";
import {Discovers, DiseaseTypes} from "../../../api/api";
import {TextField} from "../../shared/form/text-field/TextField";
import {NumberField} from "../../shared/form/number-field/NumberField";

export interface DiseaseTypeFormProps {
    diseaseType: DiseaseType,
    formType: "create" | "edit"
}

export const DiseaseTypeForm: FC<DiseaseTypeFormProps> = ({diseaseType, formType}) => {
    const {form, handleChange} = useForm(diseaseType);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log("submiting....");
        console.log(form);
        if (formType === "create") {
            try {
                await DiseaseTypes.create(form);
                navigate("/diseasetype");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await DiseaseTypes.update(form);
                navigate("/diseasetype");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    const handleDelete = async () => {
        try {
            if (window.confirm("want to delete disease type?")) {
                await DiseaseTypes.delete(diseaseType);
                navigate('/diseasetype');
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete disease type");
        }
    }

    return (<div>
        <form action="">
            <NumberField name={"id"} value={form.id} label={"ID"} onChange={handleChange}
                         readonly={true}></NumberField>
            <TextField name={"description"} onChange={handleChange} label={"Description"} value={form.description}
            ></TextField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                {formType==="create"?null:<button type={"button"} onClick={handleDelete}>Delete</button>}
                <button type={"button"} onClick={() => navigate("/diseasetype")}>Cancel</button>
            </div>
        </form>
    </div>);
}