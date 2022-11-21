import {FC, useEffect, useState} from "react";
import {PublicServant} from "../../../models/PublicServant";
import {PublicServants} from "../../../api/api";
import {Link} from "react-router-dom";

export const PublicServantList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [publicServants, setUsers] = useState<PublicServant[]>([]);
    useEffect(() => {
        const getPublicServants = async () => {
            setIsLoading(true);
            console.log("public servants loading");
            try {
                setUsers(await PublicServants.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load user list");
            } finally {
                setIsLoading(false);
            }
        }
        getPublicServants();
    }, [])

    const handleDelete = async (ps: PublicServant) => {
        try {
            if (window.confirm("want to delete public servant?")) {
                await PublicServants.delete(ps);
                const newPS = publicServants.filter(p => (p.email !== ps.email));
                setUsers(newPS);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete public servant");
        }
    }

    return (<>
        {isLoading ? <div>loading public servants ....</div> :
            <ul>
                {publicServants.map(ps => <li key={ps.email}>{ps.email} {ps.department}
                    <Link to={`/publicservant/${ps.email}`}>edit</Link>
                    <button onClick={() => handleDelete(ps)}>delete</button>
                </li>)}
            </ul>}
    </>);
}