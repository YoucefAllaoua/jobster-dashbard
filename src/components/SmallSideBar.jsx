import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { Logo, NavLinks } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../Features/Sidebar/SideBarSlice";

const SmallSideBar = () => {
	const dispatch = useDispatch();
	const toggle = () => {
		dispatch(toggleSideBar());
	};
	const { isSideBarOpen } = useSelector((store) => store.sideBar);

	return (
		<Wrapper>
			<div className={`sidebar-container  ${isSideBarOpen ? "show-sidebar" : ""} `}>
				<div className="content">
					<button className="close-btn" onClick={() => toggle()}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggle={toggle} />
				</div>
			</div>
		</Wrapper>
	);
};
export default SmallSideBar;
