import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Records} from "../../api/api";
import {Record} from "../../models/Record";
import {RecordForm} from "../../components/records/record-form/RecordForm";

export const RecordEditPage: FC = () => {
    const {email, cname, disease_code} = useParams();

    const [record, setRecord] = useState<Record | undefined>(undefined);

    useEffect(() => {
        const loadDiscover = async () => {
            if (email === undefined || cname === undefined || disease_code === undefined) {
                throw new Error("no enter.");
            }
            try {
                setRecord(await Records.get(email, cname, disease_code));
            } catch (e) {
                console.error(e);
                alert("unable to load record in record update");
            }
        }
        loadDiscover();
    }, [cname, disease_code, email])

    return (<>
        <h2>Record Edit Page</h2>
        <p>{email} {cname} {disease_code}</p>

        {record === undefined ? <div>loading...</div> :
            <RecordForm formType="edit" record={record}></RecordForm>}
    </>)
};