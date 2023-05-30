import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../Features/Sidebar/SideBarSlice";

const NavBar = () => {
	const { user } = useSelector((store) => store.user);
	console.log(user);
	const dispatch = useDispatch();
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
					<button type="button" className="btn" onClick={() => console.log("toggle logout dropdown")}>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</button>
					<div className="dropdown show-dropdown">
						<button type="button" className="dropdown-btn" onClick={() => console.log("logout text")}>
							logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
export default NavBar;
