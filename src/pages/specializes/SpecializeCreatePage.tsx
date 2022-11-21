import {FC} from "react";
import {Specialize} from "../../models/Specialize";
import {SpecializeForm} from "../../components/specializes/specialize-form/SpecializeForm";

export const SpecializeCreatePage: FC = () => {
    const specialize:Specialize = {
        email: "", id: 0
    };
    return (<>
        <h2>Specialize Create Page</h2>
        <SpecializeForm specialize={specialize} formType="create"></SpecializeForm>
    </>)
};