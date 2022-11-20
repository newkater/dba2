import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Country} from "../../models/Country";
import {Countries} from "../../api/api";
import {CountryForm} from "../../components/countries/country-form/CountryForm";

export const CountryEditPage: FC = () => {
    const [country, setCountry] = useState<Country>();
    const {cname} = useParams();


    useEffect(() => {
        const loadCountry = async () => {
            if (cname === undefined) {
                throw new Error("no enter.");
            }
            try {
                setCountry(await Countries.get(cname));
            } catch (e) {
                console.error(e);
                alert("unable to load country");
            }
        }
        loadCountry();
    }, [])

    return (<>
        <h2>Country Edit Page</h2>

        {country === undefined ? <div>loading...</div> :
            <CountryForm formType="edit" country={country}></CountryForm>}
    </>)
};