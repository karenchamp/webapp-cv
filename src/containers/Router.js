import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import WhoAmI from "../components/WhoAmI";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/webapp-cv" element={<Layout />}>
				<Route index element={<WhoAmI />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
