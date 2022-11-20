import {FC, useEffect, useState} from "react";
import {Disease} from "../../models/Disease";
import {DiseaseForm} from "../../components/disesases/disease-form/DiseaseForm";

export const DiseaseCreatePage: FC = () => {
    const disease: Disease = {disease_code: "", pathogen: "", id: 0, description: ""};

    return (<>
        <h2>Disease Type Create Page</h2>
        <DiseaseForm disease={disease} formType="create"></DiseaseForm>
    </>)
};