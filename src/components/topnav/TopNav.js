import React from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import Dropdown from "../dropdown/Dropdown";
import ThemeMenu from "../thememenu/ThemeMenu";
import notifications from "../../assets/JsonData/notification.json";
import user_image from "../../assets/images/funcionaria.png";
import user_menu from "../../assets/JsonData/user_menus.json";
import { userMenu } from "../../assets/JsonData/user-menus";
import { FaBell } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

import {
	TopnavWrapper,
	SearchBox,
	TopnavRight,
	ItemRight,
	TopNavUser,
	ImgBox,
	UserName,
	UserDropMenu,
	IconBox,
	NotiDropMenu,
} from "./style";
//import "./topnav.css";

const curr_user = {
	display_name: "Veneza Guara I",
	tipo_user: "Tipo usuario",
	image: user_image,
};

const renderUserToggle = (user) => (
	<TopNavUser className="topnav-user">
		<ImgBox className="user-image">
			<img src={user.image} alt="" />
		</ImgBox>
		<UserName className="user-name">
			<span>{user.display_name}</span>
			<br />
			{/* <span>{user.tipo_user}</span> */}
		</UserName>
	</TopNavUser>
);

const renderUserMenu = (item, index) => (
	<Link to="/" key={index}>
		<UserDropMenu className="dropdown-menu">
			<IconBox>{item.icon}</IconBox>
			<span>{item.content}</span>
		</UserDropMenu>
	</Link>
);

const renderNotificationItem = (item, index) => (
	<NotiDropMenu className="dropdown-menu" key={index}>
		<i className={item.icon}></i>
		<span>{item.content}</span>
	</NotiDropMenu>
);

const Topnav = () => {
	return (
		<TopnavWrapper className="topnav-wrapper">
			<SearchBox className="searchbox">
				<input type="text" placeholder="Search here..." />
				{/* <i className="bx bx-search"></i> */}
				<IconContext.Provider value={{ size: "20px" }}>
					<BiSearchAlt className="react-icon" />
				</IconContext.Provider>
			</SearchBox>
			<TopnavRight className="topnav-right">
				<ItemRight className="right-item">
					{/* dropdown here */}
					<Dropdown
						customToggle={() => renderUserToggle(curr_user)}
						contentData={userMenu}
						renderItems={(item, index) => renderUserMenu(item, index)}
					/>
				</ItemRight>
				<ItemRight className="right-item">
					<Dropdown
						icon={"bx bxs-bell"}
						badge="12"
						contentData={notifications}
						renderItems={(item, index) => renderNotificationItem(item, index)}
						renderFooter={() => <Link to="/">View All</Link>}
					/>
					{/* dropdown here */}
				</ItemRight>
				<ItemRight className="right-item">
					<ThemeMenu />
				</ItemRight>
			</TopnavRight>
		</TopnavWrapper>
	);
};

export default Topnav;
