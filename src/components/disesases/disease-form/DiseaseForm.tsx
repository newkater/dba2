import {Disease} from "../../../models/Disease";
import React, {FC, useEffect, useState} from "react";
import {useForm} from "../../../hooks/UseForm";
import {useNavigate} from "react-router-dom";
import {Diseases, DiseaseTypes} from "../../../api/api";
import {TextField} from "../../shared/form/text-field/TextField";
import {NumberField} from "../../shared/form/number-field/NumberField";
import {SelectField} from "../../shared/form/select-field/SelectField";
import {DiseaseType} from "../../../models/DiseaseType";

export interface DiseaseFormProps {
    disease: Disease,
    formType: "create" | "edit"
}

export const DiseaseForm: FC<DiseaseFormProps> = ({disease, formType}) => {
    const {form, handleChange} = useForm(disease);
    const [diseaseTypes, setDiseaseTypes] = useState<DiseaseType[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const loadDiseaseTypes = async () => {
            try {
                setDiseaseTypes(await DiseaseTypes.getList());
            } catch (e) {
                console.error(e);
                alert("diseaseTypes not loaded");
            }
        }
        loadDiseaseTypes();
    }, []);


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

    const handleDelete = async () => {
        try {
            if (window.confirm("want to delete disease?")) {
                await Diseases.delete(disease);
                navigate('/disease');
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete disease");
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
            <SelectField name={"id"} value={form.id.toString()} label={"Disease Type"} onChange={handleChange}
                         options={diseaseTypes.map((d) => ({text: d.description, value: d.id.toString()}))}></SelectField>
            <NumberField name={"id"} value={form.id} label={"ID"} onChange={handleChange} readonly={true}></NumberField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                {formType==="create"?null:<button type={"button"} onClick={handleDelete}>Delete</button>}
                <button type={"button"} onClick={() => navigate("/disease")}>Cancel</button>
            </div>
        </form>
    </div>);
}