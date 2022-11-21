import {FC, useEffect, useState} from "react";
import {Record} from "../../../models/Record";
import {Records} from "../../../api/api";
import {Link} from "react-router-dom";

export const RecordList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState<Record[]>([]);
    useEffect(() => {
        const getRecords = async () => {
            setIsLoading(true);
            console.log("records loading");
            try {
                setRecords(await Records.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load record list");
            } finally {
                setIsLoading(false);
            }
        }
        getRecords();
    }, [])

    const handleDelete = async (record: Record) => {
        try {
            if (window.confirm("want to delete record?")) {
                await Records.delete(record);
                const newRecords = records.filter(r => (r.disease_code !== record.disease_code || r.cname !== record.cname || r.email !== record.email));
                setRecords(newRecords);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete record");
        }
    }

    return (<>
        {isLoading ? <div>loading records ....</div> :
            <ul>
                {records.map(record => <li key={record.disease_code + record.cname + record.email}>
                    <>
                        {record.disease_code} {record.cname} {record.email} {record.total_patients} {record.total_deaths}
                        <Link to={`/record/${record.email}/${record.cname}/${record.disease_code}`}>edit</Link>
                        <button onClick={() => handleDelete(record)}>delete</button>
                    </>
                </li>)}
            </ul>}
    </>);
}