import React from 'react'
import { useSelector } from "react-redux";

function Consuming () {
    const user = useSelector((state) => state.mouse.value);
    return (
		<div className="consuming">
			<h1>Consuming Component</h1>
				<h1>X position : {user.x}</h1>
				<h1>Y position : {user.y}</h1>
			</div>
		);
}

export default Consuming
