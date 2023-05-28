import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
// this wrapper is only responsible of styling
// we can use it above or below
const Wrapper = styled.main`
	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
	}
	h1 {
		font-weight: 700;
		span {
			color: var(--primary-500);
		}
	}
	p {
		color: var(--grey-600);
	}
`;
const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt="jobster logo" className="logo" />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maiores impedit hic, unde repellat ipsa cumque natus doloremque nihil, esse cupiditate praesentium. Voluptas, et? Non totam deleniti hic ad libero.</p>
					<button className="btn btn-hero">login/register </button>
				</div>
				<img src={main} alt="" className=" img main " />
			</div>
		</Wrapper>
	);
};
export default Landing;
