import styled from "styled-components";

export const TopnavWrapper = styled.div`
	padding: 30px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: var(--topnav-height);
	width: calc(100% - var(--sidebar-width));
	background-color: var(--second-bg-dark);
	box-shadow: var(--box-shadow);
	border-bottom-left-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	z-index: 99;
`;

/* SEARCH BOX */
export const SearchBox = styled.div`
	position: relative;
	height: 50px;
	width: 20em;
	background-color: var(--main-bg);
	display: flex;
	align-items: center;
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	overflow: hidden;
	input {
		font-family: "Poppins", sans-serif;
		height: 100%;
		width: 100%;
		padding: 10px 60px 10px 20px;
		font-size: 18px;
		border-radius: var(--border-radius);
		color: var(--txt-color);
		background-color: var(--main-bg);
	}
	.react-icon {
		color: var(--main-color);
		position: absolute;
		right: 20px;
	}
`;

/* TOPNAV USER */
export const TopnavRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--main-bg);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	width: 300px;
	height: 70px;
	padding: 10px 10px 10px 10px;
	.dropdown {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
export const ItemRight = styled.div`
	margin: 0 10px 0 10px;
`;

/* TOPNAV USER */
export const TopNavUser = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ImgBox = styled.div`
	width: 40px;
	height: 40px;
	img {
		border-radius: 50%;
		height: 40px;
		width: 40px;
	}
`;

export const IconBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

export const UserName = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	font-size: 18px;
	height: 70;
	line-height: 18px;
`;

/* USER DROPMENU */
export const UserDropMenu = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
`;

/* NOTIFICATION BELL */

/* NOTIFICATION DROPMENU */
export const NotiDropMenu = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
`;
