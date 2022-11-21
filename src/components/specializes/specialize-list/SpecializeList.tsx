import {FC, useEffect, useState} from "react";
import {Specialize} from "../../../models/Specialize";
import {Specializes} from "../../../api/api";
import {Link} from "react-router-dom";

export const SpecializeList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [specializes, setSpecializes] = useState<Specialize[]>([]);
    useEffect(() => {
        const getSpecializes = async () => {
            setIsLoading(true);
            console.log("specializes loading");
            try {
                setSpecializes(await Specializes.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load specialize list");
            } finally {
                setIsLoading(false);
            }
        }
        getSpecializes();
    }, [])

    const handleDelete = async (specialize: Specialize) => {
        try {
            if (window.confirm("want to delete specialize?")) {
                await Specializes.delete(specialize);
                const newSpecializes = specializes.filter(s => (s.id !== specialize.id && s.email !== specialize.email));
                setSpecializes(newSpecializes);
            }
        } catch (e) {
            console.error(e);
            alert("couldn't delete specialize");
        }
    }

    return (<>
        {isLoading ? <div>loading specializes ....</div> :
            <ul>
                {specializes.map(specialize => <li key={specialize.id + specialize.email}>
                    <>
                        {specialize.email} {specialize.id}
                        <Link to={`/specialize/${specialize.id}/${specialize.email}`}>edit</Link>
                        <button onClick={() => handleDelete(specialize)}>delete</button>
                    </>
                </li>)}
            </ul>}
    </>);
}