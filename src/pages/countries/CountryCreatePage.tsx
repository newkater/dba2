import {FC} from "react";
import {Country} from "../../models/Country";
import {CountryForm} from "../../components/countries/country-form/CountryForm";

export const CountryCreatePage: FC = () => {
    const country:Country = {cname: "", population: 0};
    return (<>
        <h2>Country Create Page</h2>
        <CountryForm country={country} formType="create"></CountryForm>
    </>)
};