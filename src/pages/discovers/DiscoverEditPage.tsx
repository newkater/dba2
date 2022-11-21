import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {DiscoverForm} from "../../components/discovers/discover-form/DiscoverForm";
import {Discover} from "../../models/Discover";
import {Discovers} from "../../api/api";

export const DiscoverEditPage: FC = () => {
    const {cname, disease_code} = useParams();

    const [discover, setDiscover] = useState<Discover | undefined>(undefined);

    useEffect(() => {
        const loadDiscover = async () => {
            if (cname === undefined || disease_code === undefined) {
                throw new Error("no enter.");
            }
            try {
                setDiscover(await Discovers.get(cname, disease_code));
            } catch (e) {
                console.error(e);
                alert("unable to load discover in discover update");
            }
        }
        loadDiscover();
    }, [cname, disease_code])

    return (<>
        <h2>Discover Edit Page</h2>
        <p>{cname} {disease_code}</p>

        {discover === undefined ? <div>loading...</div> :
            <DiscoverForm formType="edit" discover={discover}></DiscoverForm>}
    </>)
};