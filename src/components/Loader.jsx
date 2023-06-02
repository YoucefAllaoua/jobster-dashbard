import { Oval } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Oval height="20" width="20" radius="9" color="white" ariaLabel="three-dots-loading" />
		</div>
	);
};
export default Loader;
