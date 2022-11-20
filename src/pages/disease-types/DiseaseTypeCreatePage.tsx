import {DiseaseType} from "../../models/DiseaseType";
import {FC, useEffect, useState} from "react";
import {DiseaseTypeForm} from "../../components/disease-types/disease-type-form/DiseaseTypeForm";
import {DiseaseTypes} from "../../api/api";

export const DiseaseTypeCreatePage: FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [diseaseTypes, setDiseaseTypes] = useState<DiseaseType[]>([]);

    useEffect(() => {
        const loadDiseaseTypes = async () => {
            setIsLoading(true);
            try {
                setDiseaseTypes(await DiseaseTypes.getList());
            } catch (e) {
                console.error(e);
                alert("unable to load diseaseType list");
            } finally {
                setIsLoading(false);
            }
        }
        loadDiseaseTypes();
    }, [])

    const diseaseType: DiseaseType = {id: Math.max(...diseaseTypes.map(dt => dt.id)) + 1, description: ""};

    return (<>
        <h2>Disease Type Create Page</h2>
        {isLoading?<div>loading...</div>:<DiseaseTypeForm diseaseType={diseaseType} formType="create"></DiseaseTypeForm>}
    </>)
};