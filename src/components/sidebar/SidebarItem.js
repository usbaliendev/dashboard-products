import React, { useState } from "react";
import {
	SidebarWrapper,
	SubItem,
	IconBox,
	Arrowbox,
	DropdownLink,
} from "./stylesbitem";

const SidebarItem = (props) => {
	const active = props.active ? "active" : "";
	const [subnav, setSubnav] = useState(false);
	const showSubnav = () => setSubnav(!subnav);
	let isopen = props.isopen;
	let subItem = props.subitem;
	//console.log(props);
	console.log(subItem);
	//console.log(subItem.subNav);

	return (
		<>
			<SidebarWrapper
				className={subItem.subNav ? `itemSb comSub` : `itemSb semSub ${active}`}
				isopen={isopen}
				onClick={subItem.subNav && isopen ? showSubnav : null}
			>
				<SubItem className="subitem">
					<IconBox>{subItem.icon}</IconBox>
					<span>{subItem.title}</span>
				</SubItem>
				<Arrowbox isopen={isopen}>
					{subItem.subNav && subnav
						? subItem.iconOpened
						: subItem.subNav
						? subItem.iconClosed
						: null}
				</Arrowbox>
			</SidebarWrapper>
			{subnav && isopen
				? subItem.subNav.map((subitemx, index) => {
						console.log(subnav);
						return (
							<DropdownLink to={subitemx.route} key={index}>
								<span>{subitemx.title}</span>
							</DropdownLink>
						);
				  })
				: null}
		</>
	);
};

export default SidebarItem;
