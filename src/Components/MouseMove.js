import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { mousePos } from "../Features/mouse";
import { mouseClick } from "../Features/mouse";

function MouseMove() {
	const [position, setPosition] = useState({});
	const dispatch = useDispatch();
	const handleMouseMove = (e) => {
		let posX = e.clientX;
		let posY = e.clientY;
		console.log("The value of ClientX is : ", posX);
		console.log("The value of ClientY is : ", posY);
		setPosition({ x: posX, y: posY });
		console.log("The value of position is : ", position);
		dispatch(mouseClick({ ...position }));
	};
	return (
		<div
			className="position"
			style={{ backgroundColor: "aqua", width: "100vw", height: "100vh" }}
			width={window.innerWidth}
			height={window.innerHeight}
			onMouseMove={handleMouseMove}
		></div>
	);
	/* const [position, setPosition] = useState({});
	const dispatch = useDispatch();

	const handleMouseMoveOnStage = (e) => {
		let pos = e.target.getStage().getPointerPosition();
		setPosition(pos);
		console.log(position);
	};
	return (
		<div>
			<Stage
				width={window.innerWidth}
				height={window.innerHeight}
				onMouseMove={handleMouseMoveOnStage}
			></Stage>
			<button
				onClick={() => {
					dispatch(mousePos(position));
				}}
			>Get Position</button>
		</div>
	); */
}

export default MouseMove;
