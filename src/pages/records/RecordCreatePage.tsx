import {FC} from "react";
import {RecordForm} from "../../components/records/record-form/RecordForm";
import {Record} from "../../models/Record";

export const RecordCreatePage: FC = () => {
    const record: Record = {
        cname: "", disease_code: "", email: "", total_deaths: 0, total_patients: 0
    };
    return (<>
        <h2>Discover Create Page</h2>
        <RecordForm record={record} formType="create"></RecordForm>
    </>)
};