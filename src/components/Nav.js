"use es6";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { fadeToPinkAnimation } from "../utils/animations";

const BORDER_SPACING = 5;

const NavList = styled.ul`
	list-style-type: none;
	border-right: ${BORDER_SPACING}px solid #f1dfe8;
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

	&:hover {
		background-color: #e8cad9;
		animation: ${fadeToPinkAnimation} 0.8s forwards;
	}
`;

const Nav = () => {
	return (
		<NavList>
			<NavListItem>
				<NavListLink to="/">Who am I?</NavListLink>
			</NavListItem>
			<NavListItem>
				<NavListLink to="/work-experience">Work experience</NavListLink>
			</NavListItem>
			<NavListItem>
				<NavListLink to="/education">Education</NavListLink>
			</NavListItem>
			<NavListItem>
				<NavListLink to="/hobbies-and-interests">
					Hobbies &amp; Interests
				</NavListLink>
			</NavListItem>
			<NavListItem>
				<NavListLink to="/about-this-app">About this app</NavListLink>
			</NavListItem>
		</NavList>
	);
};

export default Nav;
