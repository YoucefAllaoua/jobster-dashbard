import { Oval } from "react-loader-spinner";

const BigLoader = () => {
	return (
		<div className=" " style={{ width: "full", display: " flex", justifyContent: " center" }}>
			<Oval height="60" width="60" radius="9" color="blue" ariaLabel="three-dots-loading" />
		</div>
	);
};
export default BigLoader;
