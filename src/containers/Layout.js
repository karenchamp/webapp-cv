"use es6";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";

const AppWrapper = styled.div`
	background-color: #fff;
	border-radius: 10px;

	max-width: 980px;
	margin: auto;

	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 10px;
`;

const Layout = () => {
	return (
		<AppWrapper>
			<Nav />
			<Outlet />
		</AppWrapper>
	);
};

export default Layout;
