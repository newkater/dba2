import {FC} from "react";
import {DiscoverForm} from "../../components/discovers/discover-form/DiscoverForm";
import {Discover} from "../../models/Discover";

export const DiscoverCreatePage: FC = () => {
    const discover:Discover = {cname: "", disease_code: "", first_enc_date: new Date()};
    return (<>
        <h2>Discover Create Page</h2>
        <DiscoverForm discover={discover} formType="create"></DiscoverForm>
    </>)
};