import {FC} from "react";
import {PublicServant} from "../../models/PublicServant";
import {PublicServantForm} from "../../components/public-servants/public-servant-form/PublicServantForm";

export const PublicServantCreatePage: FC = () => {
    const publicServant: PublicServant = {
        department: "", email: ""
    }

    return (<>
        <h2>Public Servant Create Page</h2>
        <PublicServantForm formType={"create"} publicServant={publicServant}></PublicServantForm>
    </>)
};