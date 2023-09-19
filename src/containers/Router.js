import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import WhoAmI from "../components/WhoAmI";
import HobbiesAndInterests from "../components/HobbiesAndInterests";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import AboutThisApp from "../components/AboutThisApp";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/webapp-cv" element={<Layout />}>
				<Route index element={<WhoAmI />} />
				<Route path="/webapp-cv/work-experience" element={<WorkExperience />} />
				<Route path="/webapp-cv/education" element={<Education />} />
				<Route
					path="/webapp-cv/hobbies-and-interests"
					element={<HobbiesAndInterests />}
				/>
				<Route path="/webapp-cv/about-this-app" element={<AboutThisApp />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
