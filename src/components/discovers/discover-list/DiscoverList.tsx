import {FC, useEffect, useState} from "react";
import {Discover} from "../../../models/Discover";
import api from "../../../api";
import {Link} from "react-router-dom";

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
    return (<>
        {isLoading ? <div>loading users ....</div> :
            <ul>
                {discovers.map(discover => <li key={discover.disease_code + discover.cname}>
                    <>
                        {discover.disease_code} {discover.cname} {discover.first_enc_date}
                        <Link rel="stylesheet" to={`/discover/${discover.cname}/${discover.disease_code}`}>edit</Link>
                    </>
                </li>)}
            </ul>}
    </>);
}