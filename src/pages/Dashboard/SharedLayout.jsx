import { Outlet } from "react-router-dom";
import { BigSideBar, NavBar, SmallSideBar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
	return (
		<Wrapper>
			<main className="dashboard">
				<div className="">
					<SmallSideBar />
					<BigSideBar />
				</div>
				<div>
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
