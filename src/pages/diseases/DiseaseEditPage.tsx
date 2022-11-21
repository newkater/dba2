import {FC, useEffect, useState} from "react";
import {Disease} from "../../models/Disease";
import {Diseases} from "../../api/api";
import {useParams} from "react-router-dom";
import {DiseaseForm} from "../../components/disesases/disease-form/DiseaseForm";

export const DiseaseEditPage: FC = () => {
    const [disease, setDisease] = useState<Disease>();
    const {disease_code} = useParams();


    useEffect(() => {
        const loadDisease = async () => {
            if (disease_code === undefined) {
                throw new Error("no enter.");
            }
            try {
                setDisease(await Diseases.get(disease_code));
            } catch (e) {
                console.error(e);
                alert("unable to load disease");
            }
        }
        loadDisease();
    }, [disease_code])

    return (<>
        <h2>Disease Edit Page</h2>

        {disease === undefined ? <div>loading...</div> :
            <DiseaseForm formType="edit" disease={disease}></DiseaseForm>}
    </>)
};