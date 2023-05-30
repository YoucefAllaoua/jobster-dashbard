import { Outlet } from "react-router-dom";

const SharedLayout = () => {
	return (
		<div>
			<h2>this is shared </h2>
			<Outlet />
		</div>
	);
};
export default SharedLayout;
