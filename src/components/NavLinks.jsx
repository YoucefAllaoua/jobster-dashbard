import links from "../utils/links";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { NavLink } from "react-router-dom";
const NavLinks = ({ toggle }) => {
	const icons = [<IoBarChartSharp />, <MdQueryStats />, <FaWpforms />, <ImProfile />];

	return (
		<div className="nav-links">
			{links.map((item, index) => {
				return (
					<NavLink
						to={item.path}
						className={({ isActive }) => {
							return isActive ? "nav-link active" : "nav-link";
						}}
						key={item.id}
						onClick={toggle}
					>
						<span className="icon">{icons[index]}</span>
						{item.text}
					</NavLink>
				);
			})}
		</div>
	);
};
export default NavLinks;
