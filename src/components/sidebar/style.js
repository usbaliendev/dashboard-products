import styled from "styled-components";

/* SIDEBAR CONTAINER */
export const SidebContainer = styled.div`
	min-width: var(--sidebar-width);
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	background-color: var(--main-bg);
	box-shadow: var(--box-shadow);
	border-top-right-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
`;

/* HEADER */
export const NavHeader = styled.div`
	height: 15vh;
	width: 100%;
	display: flex;
	align-items: center;
	.logo-name {
		margin-left: 3px;
		font-size: 20px;
		color: var(--txt-color);
		font-weight: 600;
		transition: 0.3s ease;
		transition-delay: ${({ isopen }) => (isopen ? "0.1s" : "0")};
		opacity: ${({ isopen }) => (isopen ? "1" : "0")};
	}
	.bx-menu {
		font-size: 20px;
		margin: 0 15px;
		cursor: pointer;
		transition: none;
		opacity: ${({ isopen }) => (isopen ? "1" : "0")};
	}
`;

export const TitleBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.div`
	min-width: 78px;
	line-height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Bckg = styled.div`
	height: 30px;
	width: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--second-bg);
	border-radius: 50%;
	img {
		height: 20px;
		width: 20px;
		line-height: 50px;
		cursor: ${({ isopen }) => (isopen ? "default" : "pointer")};
	}
`;

/* SIDEBAR ITEMS */
export const SideItems = styled.ul`
	height: 85vh;
	display: flex;
	flex-direction: column;
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;
