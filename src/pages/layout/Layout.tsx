import {FC} from 'react'
import {Link, Outlet} from 'react-router-dom'

export const Layout: FC = () => {
    return (<>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/doctors'>Doctors</Link></li>
                <li><Link to='/publicservant'>Public Servants</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/countries'>Countries</Link></li>
                <li><Link to='/disease'>Diseases</Link></li>
                <li><Link to='/diseasetype'>Disease Types</Link></li>
                <li><Link to='/discover'>Discovers</Link></li>
                <li><Link to='/record'>Records</Link></li>
                <li><Link to='/specialize'>Specializes</Link></li>
            </ul>
        </nav>
        <Outlet></Outlet>
    </>);
};