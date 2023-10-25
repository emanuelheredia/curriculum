import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	max-height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	white-space: nowrap;
	margin-top: 1rem;
`;

export default Wrapper;
