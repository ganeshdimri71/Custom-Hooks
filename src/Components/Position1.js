import React from "react";
import useMouse from "../Hooks/useMouse";

function Position1() {
	console.log("position 1 is changed...!");
	const pos1 = useMouse(); /*  */
	return (
		<div className="position1">
			<h1>Position 1</h1>
			<h1>
				{pos1.x} {pos1.y}
			</h1>
		</div>
	);
}

export default Position1;
