import React from 'react'
import useMouse from "../Hooks/useMouse";

function Position2 () {
    const pos2 = useMouse();
    return (
			<div className="position2">
				<h1>Position 2</h1>
				<h1>
					{pos2.x} {pos2.y}
				</h1>
			</div>
		);
}

export default Position2
