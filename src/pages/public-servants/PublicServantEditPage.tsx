import {FC, useEffect, useState} from "react";
import {PublicServant} from "../../models/PublicServant";
import {useParams} from "react-router-dom";
import {PublicServants} from "../../api/api";
import {PublicServantForm} from "../../components/public-servants/public-servant-form/PublicServantForm";

export const PublicServantEditPage: FC = () => {
    const [value, setValue] = useState<PublicServant | undefined>(undefined);

    const {email} = useParams();
    useEffect(() => {
        if (email === undefined) {
            throw new Error("email undefined");
        }
        const getPublicServant = async () => {
            try {
                setValue(await PublicServants.get(email));
            } catch (e) {
                console.error(e);
                alert("unable to load public servant");
            }
        }
        getPublicServant();
    }, [email]);

    return (<>
        <h2>Public Servant Edit Page {email}</h2>
        {value === undefined ? <div>loading user..</div> :
            <PublicServantForm formType={"edit"} publicServant={value}></PublicServantForm>}
    </>)
};