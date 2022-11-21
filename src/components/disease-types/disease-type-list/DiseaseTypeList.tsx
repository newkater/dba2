import {FC, useEffect, useState} from "react";
import {DiseaseType} from "../../../models/DiseaseType";
import {Discovers, DiseaseTypes} from "../../../api/api";
import {Link} from "react-router-dom";
import {Discover} from "../../../models/Discover";

export const DiseaseTypeList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [diseaseTypes, setDiseaseTypes] = useState<DiseaseType[]>([]);
    useEffect(() => {
        const getDiseaseTypes = async () => {
            setIsLoading(true);
            console.log("disease types loading");
            try {
                setDiseaseTypes(await DiseaseTypes.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load disease type list");
            } finally {
                setIsLoading(false);
            }
        }
        getDiseaseTypes();
    }, [])

    const handleDelete = async (dt: DiseaseType) => {
        try {
            if (window.confirm("want to delete disease type?")) {
                await DiseaseTypes.delete(dt);
                const newDT = diseaseTypes.filter(d => (d.id !== dt.id));
                setDiseaseTypes(newDT);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete disease type");
        }
    }

    return (<>
        {isLoading ? <div>loading users ....</div> :
            <ul>
                {diseaseTypes.map(dt => <li key={dt.id}>
                    <>
                        {dt.id} {dt.description}
                        <Link to={`/diseasetype/${dt.id}`}>edit</Link>
                        <button onClick={() => handleDelete(dt)}>delete</button>
                    </>
                </li>)}
            </ul>}
    </>);
}