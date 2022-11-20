import {FC, useEffect, useState} from "react";
import {Country} from "../../../models/Country";
import {Countries} from "../../../api/api";
import {Link} from "react-router-dom";

export const CountryList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState<Country[]>([]);
    useEffect(() => {
        const getCountries = async () => {
            setIsLoading(true);
            console.log("users loading");
            try {
                setCountries(await Countries.getList());
            } catch (e) {
                console.error(e);
                alert("couldn't load country list");
            } finally {
                setIsLoading(false);
            }
        }
        getCountries();
    }, [])
    return (<>
        {isLoading ? <div>loading users ....</div> :
            <ul>
                {countries.map(country => <li key={country.cname}>
                    <>
                        {country.cname} {country.population}
                        <Link rel="stylesheet" to={`/countries/${country.cname}`}>edit</Link>
                    </>
                </li>)}
            </ul>}
    </>);
}