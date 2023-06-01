import links from "../utils/links";

import { NavLink } from "react-router-dom";
const NavLinks = ({ toggle }) => {
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
						<span className="icon">{item.icon}</span>
						{item.text}
					</NavLink>
				);
			})}
		</div>
	);
};
export default NavLinks;
