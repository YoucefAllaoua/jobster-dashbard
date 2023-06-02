import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../Features/Sidebar/SideBarSlice";
import { logout } from "../Features/user/userSlice";

const NavBar = () => {
	const { user } = useSelector((store) => store.user);

	const dispatch = useDispatch();
	//    this state is for the dropDown btn for the logout
	const [dropDown, setDropDown] = useState(false);
	return (
		<Wrapper>
			<div className="nav-center">
				<button onClick={() => dispatch(toggleSideBar())} type="button" className="toggle-btn">
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h3 className="logo-text">Dashboard</h3>
				</div>
				<div className="btn-container">
					<button type="button" className="btn" onClick={() => setDropDown(!dropDown)}>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</button>
					<div className={`${dropDown ? "dropdown show-dropdown" : "dropdown "}`}>
						<button type="button" className="dropdown-btn" onClick={() => dispatch(logout("logout"))}>
							logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
export default NavBar;
