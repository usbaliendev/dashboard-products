import React from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import logo from "../../assets/images/cleverlogo.svg";
import { sidebarData } from "../../assets/JsonData/sidebar_routes";
import SidebarItem from "./SidebarItem";

import {
	SidebContainer,
	NavHeader,
	TitleBox,
	Logo,
	Bckg,
	SideItems,
} from "./style";

const Sidebar = (props) => {
	let isopen = true;
	const activeItem = sidebarData.findIndex(
		(item) => item.route === props.location.pathname
	);
	console.log(sidebarData);

	return (
		<IconContext.Provider
			value={{
				color: "var(--main-color)",
				className: "react-icons",
				size: "20px",
			}}
		>
			<SidebContainer>
				<NavHeader className="navheader" isopen={isopen}>
					{isopen ? (
						<Logo className="Logo">
							<Bckg>
								<img src={logo} alt="" />
							</Bckg>
						</Logo>
					) : (
						<Logo className="Logo">
							<Bckg>
								<img src={logo} alt="" />
							</Bckg>
						</Logo>
					)}
					<TitleBox>
						<span className="logo-name">CleverSystems</span>
					</TitleBox>
				</NavHeader>

				<SideItems className="sidebaritems">
					{sidebarData.map((item, index) => {
						return (
							<Link to={item.subNav ? "#" : item.route} key={index}>
								<SidebarItem
									subitem={item}
									active={index === activeItem}
									isopen={isopen}
								/>
							</Link>
						);
					})}
				</SideItems>
			</SidebContainer>
		</IconContext.Provider>
	);
};

export default Sidebar;
