import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Specializes} from "../../api/api";
import {Specialize} from "../../models/Specialize";
import {SpecializeForm} from "../../components/specializes/specialize-form/SpecializeForm";

export const SpecializeEditPage: FC = () => {
    const {id, email} = useParams();

    const [specialize, setSpecialize] = useState<Specialize | undefined>(undefined);

    useEffect(() => {
        const loadSpecialize = async () => {
            if (id === undefined || email === undefined) {
                throw new Error("no enter.");
            }
            try {
                setSpecialize(await Specializes.get(Number.parseInt(id), email));
            } catch (e) {
                console.error(e);
                alert("unable to load specialize in specialize update");
            }
        }
        loadSpecialize();
    }, [email, id])

    return (<>
        <h2>Specialize Edit Page</h2>
        <p>{id} {email}</p>

        {specialize === undefined ? <div>loading...</div> :
            <SpecializeForm formType="edit" specialize={specialize}></SpecializeForm>}
    </>)
};