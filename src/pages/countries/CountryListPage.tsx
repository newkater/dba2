import {FC} from "react";
import {Link} from "react-router-dom";
import {CountryList} from "../../components/countries/country-list/CountryList";

export const CountryListPage: FC = () => {
    return (<>
        <h2>Country List Page</h2>
        <Link to='/countries/create'>Create Country</Link>
        <CountryList></CountryList>
    </>)
};