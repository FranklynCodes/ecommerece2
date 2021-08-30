import React from "react";

export default function SideDrawer({ show }) {
	const sideDrawerClass = ["sidedrawer"];

	if (show) {
		// Animation via css class
		sideDrawerClass.push("show");
	}
	return <div className={sideDrawerClass.join(" ")}></div>;
}
