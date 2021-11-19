import styled from "styled-components";
import { Link } from "react-router-dom";

/* SUB MENUS */
export const SidebarWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-decoration: none;
	height: 40px;
	font-size: 20px;
	padding: 0 20px 0 0;
	transition: color 0.3s ease 0s;
	background: var(--main-bg);
	&.active {
		//border-radius: var(--border-radius);
		background: var(--second-bg);
		box-shadow: 6px 0 inset var(--main-color);
	}
	&:hover {
		background: var(--second-bg);
		box-shadow: 6px 0 inset var(--main-color);
	}
`;

export const SubItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	span {
		text-indent: 5px;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		color: var(--txt-color);
		text-transform: capitalize;
		line-height: 20px;
		margin: 0;
		//opacity: ${({ isopen }) => (isopen ? "1" : "0")};
		pointer-events: ${({ isopen }) => (isopen ? "" : "none")};
	}
`;

export const IconBox = styled.div`
	min-width: 78px;
	display: flex;
	justify-content: center;
`;

export const Arrowbox = styled.div`
	display: flex;
	align-items: center;
	//transition: ${({ isopen }) => (isopen ? "all 0.7s ease" : "0s")};
	//opacity: ${({ isopen }) => (isopen ? "1" : "0")};
`;

export const DropdownLink = styled(Link)`
	display: flex;
	align-items: center;
	padding: 5px 0 5px 50px;
	background: var(--subitem-bg);
	font-size: 18px;
	font-weight: 400;
	text-decoration: none;
	transition: all 0.4s ease;
	span {
		font-size: 18px;
		font-weight: 400;
		color: var(--txt-color);
		transition: all 0.4s ease;
	}
	&:hover {
		background: var(--second-color);
	}
	&:focus {
		span {
			font-weight: 600;
		}
		background: var(--main-color);
	}
`;
