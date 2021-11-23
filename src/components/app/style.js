import styled from "styled-components";

/* APP LAYOUT */
export const AppLayout = styled.div`
	color: var(--txt-color);
`;

/* CONTENT */
export const Content = styled.div`
	padding-left: var(--sidebar-width);
	background-color: var(--second-bg);
	min-height: 150vh;
	display: flex;
	flex-direction: column;
`;

export const MainContent = styled.div`
	position: absolute;
	top: var(--topnav-height);
	width: calc(100% - var(--sidebar-width));
	height: 100%;
	padding: 30px;
`;
