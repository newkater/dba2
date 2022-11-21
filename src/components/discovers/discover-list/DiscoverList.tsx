import {FC, useEffect, useState} from "react";
import {Discover} from "../../../models/Discover";
import api from "../../../api";
import {Link} from "react-router-dom";
import {Discovers} from "../../../api/api";

export const DiscoverList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [discovers, setDiscovers] = useState<Discover[]>([]);
    useEffect(() => {
        const getDiscovers = async () => {
            setIsLoading(true);
            console.log("users loading");
            try {
                setDiscovers(await api.Discovers.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load user list");
            } finally {
                setIsLoading(false);
            }
        }
        getDiscovers();
    }, [])

    const handleDelete = async (discover: Discover) => {
        try {
            if (window.confirm("want to delete discover?")) {
                await Discovers.delete(discover);
                const newDiscovers = discovers.filter(d => (d.disease_code !== discover.disease_code && d.cname !== discover.cname));
                setDiscovers(newDiscovers);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete discover");
        }
    }

    return (<>
        {isLoading ? <div>loading users ....</div> :
            <ul>
                {discovers.map(discover => <li key={discover.disease_code + discover.cname}>
                    <>
                        {discover.disease_code} {discover.cname} {discover.first_enc_date}
                        <Link rel="stylesheet" to={`/discover/${discover.cname}/${discover.disease_code}`}>edit</Link>
                        <button onClick={() => handleDelete(discover)}>delete</button>
                    </>
                </li>)}
            </ul>}
    </>);
}