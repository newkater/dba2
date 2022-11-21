import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {DiseaseTypes} from "../../api/api";
import {DiseaseType} from "../../models/DiseaseType";
import {DiseaseTypeForm} from "../../components/disease-types/disease-type-form/DiseaseTypeForm";

export const DiseaseTypeEditPage: FC = () => {
    const [diseaseType, setDiseaseType] = useState<DiseaseType>();
    const {id} = useParams();


    useEffect(() => {
        const loadDiseaseType = async () => {
            if (id === undefined) {
                throw new Error("no enter.");
            }
            try {
                setDiseaseType(await DiseaseTypes.get(Number.parseInt(id)));
            } catch (e) {
                console.error(e);
                alert("unable to load diseaseType");
            }
        }
        loadDiseaseType();
    }, [id])

    return (<>
        <h2>Country Edit Page</h2>

        {diseaseType === undefined ? <div>loading...</div> :
            <DiseaseTypeForm formType="edit" diseaseType={diseaseType}></DiseaseTypeForm>}
    </>)
};