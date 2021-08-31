import React from "react";

export default function BackDrop({ show, click }) {
	return show && <div id="BACKDROP-STYLE" onClick={click}></div>;
}
