import {Country} from "../../../models/Country";
import React, {FC} from "react";
import {useForm} from "../../../hooks/UseForm";
import {useNavigate} from "react-router-dom";
import {Countries, Users} from "../../../api/api";
import {TextField} from "../../shared/form/text-field/TextField";
import {NumberField} from "../../shared/form/number-field/NumberField";

export interface CountryFormProps {
    country: Country,
    formType: "create" | "edit"
}

export const CountryForm: FC<CountryFormProps> = ({country, formType}) => {
    const {form, handleChange} = useForm(country);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log("submiting....");
        console.log(form);
        if (formType === "create") {
            try {
                await Countries.create(form);
                navigate("/countries");
            } catch (e) {
                console.log("creation error");
            }
        } else if (formType === "edit") {
            try {
                await Countries.update(form);
                navigate("/countries");
            } catch (e) {
                console.log("editing error");
            }
        }

    }

    const handleDelete = async () => {
        try {
            if (window.confirm("want to delete country?")) {
                await Countries.delete(country);
                navigate('/countries');
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete country");
        }
    }

    return (<div>
        <form action="">
            <TextField name={"cname"} onChange={handleChange} label={"Country Name"} value={form.cname}
                       readonly={formType === "edit"}></TextField>
            <NumberField name={"population"} value={form.population} label={"Population"} onChange={handleChange}
                         step={1000}></NumberField>
            <div>
                <button type={"button"} onClick={handleSubmit}>Submit</button>
                {formType==="create"?null:<button type={"button"} onClick={handleDelete}>Delete</button>}
                <button type={"button"} onClick={() => navigate("/countries")}>Cancel</button>
            </div>
        </form>
    </div>);
}