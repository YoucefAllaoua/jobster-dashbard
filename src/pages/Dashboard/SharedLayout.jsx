import { Outlet } from "react-router-dom";
import { BigSideBar, NavBar, SmallSideBar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
	return (
		<Wrapper>
			<main className="dashboard">
				<SmallSideBar />
				<BigSideBar />
				<div className="">
					<NavBar />
					<div className="dashboard-page">
						<Outlet />
					</div>
				</div>
			</main>
		
		</Wrapper>
	);
};
export default SharedLayout;
