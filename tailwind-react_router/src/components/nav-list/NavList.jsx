import { Link } from "react-router-dom";

const NavList = ({ linkArr }) => {
    return ( <nav>
        {
            linkArr.map((link) => {
                return (
                    <Link to={link.url}>{link.item}</Link>
                )
            })
        }
    </nav> );
}
 
export default NavList;