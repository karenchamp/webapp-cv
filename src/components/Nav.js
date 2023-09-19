import styled from "styled-components";
import { Link } from "react-router-dom";

import { fadeToPinkAnimation } from "../utils/animations";

const BORDER_SPACING = 10;

const NavList = styled.ul`
	list-style-type: none;
	background-color: white;
	padding-left: 0;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	position: sticky;
	top: 30px;
`;

const NavListItem = styled.li`
	&:first-child a {
		border-top-left-radius: 10px;
	}

	&:last-child a {
		border-bottom-left-radius: 10px;
	}

	&:not(:last-child) {
		border-bottom: ${BORDER_SPACING}px solid #f1dfe8;
	}
`;

const NavListLink = styled(Link)`
	display: block;
	padding: 20px;

	color: black;
	text-decoration: none;
	&:after {
		display: none;
	}

	&:hover {
		background-color: #e8cad9;
		animation: ${fadeToPinkAnimation} 0.8s forwards;
		&:after {
			display: none;
		}
	}
`;

const Nav = () => {
	return (
		<div>
			<NavList>
				<NavListItem>
					<NavListLink to="/webapp-cv/">Who am I?</NavListLink>
				</NavListItem>
				<NavListItem>
					<NavListLink to="/webapp-cv/work-experience">
						Work experience
					</NavListLink>
				</NavListItem>
				<NavListItem>
					<NavListLink to="/webapp-cv/education">Education</NavListLink>
				</NavListItem>
				<NavListItem>
					<NavListLink to="/webapp-cv/hobbies-and-interests">
						Hobbies &amp; Interests
					</NavListLink>
				</NavListItem>
				<NavListItem>
					<NavListLink to="/webapp-cv/about-this-app">
						About this app
					</NavListLink>
				</NavListItem>
			</NavList>
		</div>
	);
};

export default Nav;
