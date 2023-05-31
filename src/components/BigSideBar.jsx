import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import { NavLinks } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../Features/Sidebar/SideBarSlice";

const BigSideBar = () => {
	const dispatch = useDispatch();
	const { isSideBarOpen } = useSelector((store) => store.sideBar);
	return (
		<Wrapper>
			<div className={isSideBarOpen ? "sidebar-container show-sidebar" : "sidebar-container "}>
				<div className="content">
					<header>
						<Logo />
					</header>
					<NavLinks toggle={() => dispatch(toggleSideBar())} />
				</div>
			</div>
		</Wrapper>
	);
};
export default BigSideBar;
