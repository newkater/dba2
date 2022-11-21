import {FC, useEffect, useState} from "react";
import {Disease} from "../../../models/Disease";
import {Diseases} from "../../../api/api";
import {Link} from "react-router-dom";

export const DiseaseList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [diseases, setDiseases] = useState<Disease[]>([]);

    useEffect(() => {
        const getDiseases = async () => {
            setIsLoading(true);
            console.log("diseases loading");
            try {
                setDiseases(await Diseases.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load disease list");
            } finally {
                setIsLoading(false);
            }
        }
        getDiseases();
    }, [])

    const handleDelete = async (disease: Disease) => {
        try {
            if (window.confirm("want to delete disease?")) {
                await Diseases.delete(disease);
                const newDiseases = diseases.filter(d => (d.disease_code !== disease.disease_code));
                setDiseases(newDiseases);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete disease");
        }
    }

    return (<>
        {isLoading ? <div>loading diseases ....</div> :
            <ul>
                {diseases.map(disease => <li key={disease.disease_code}>
                    <>
                        {disease.disease_code} {disease.description} {disease.pathogen} {disease.id}
                        <Link to={`/disease/${disease.disease_code}`}>edit</Link>
                        <button onClick={() => handleDelete(disease)}>delete</button>
                    </>
                </li>)}
            </ul>}
    </>);
}