import styled from "styled-components";

import me from "../images/me.jpeg";

const DisplayGrid = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: 10px;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 100%;
`;

const WhoAmI = () => {
	return (
		<>
			<h1>Who am I?</h1>
			<DisplayGrid>
				<div>
					<p>
						My name is Karen Champ and I'm a software engineer, postgrad
						student, avid reader, fitness junkie, pet parent, and wife.
					</p>
					<p>
						I live in the middle of nowhere in the midlands with my wife, two
						cats and a dog.
					</p>
					<p>
						At work I build beautiful applications alongside a team of other
						fantastic engineers.
					</p>
					<p>You can learn more about me with the links on the left.</p>
				</div>
				<Image src={me} />
			</DisplayGrid>
		</>
	);
};

export default WhoAmI;
