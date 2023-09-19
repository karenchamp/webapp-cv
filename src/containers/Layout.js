import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import MainWrapper from "./MainWrapper";

const AppWrapper = styled.div`
	border-radius: 10px;

	max-width: 980px;
	min-width: 85vw;
	margin: auto;

	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 10px;
`;

const Layout = () => {
	return (
		<AppWrapper>
			<Nav />
			<MainWrapper>
				<Outlet />
			</MainWrapper>
		</AppWrapper>
	);
};

export default Layout;
