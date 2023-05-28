import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
const Landing = () => {
	return (
		<main>
			<nav>
				<img src={logo} alt="jobster logo" className="logo" />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span>app
					</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maiores impedit hic, unde repellat ipsa cumque natus doloremque nihil, esse cupiditate praesentium. Voluptas, et? Non totam deleniti hic ad libero.</p>
				</div>
				<img src={main} alt="" className=" img main " />
			</div>
		</main>
	);
};
export default Landing;
