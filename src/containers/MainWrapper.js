import styled from "styled-components";

const StyledWrapper = styled.div`
	padding: 30px;
	background-color: white;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
`;

const MainWrapper = (props) => {
	return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default MainWrapper;
