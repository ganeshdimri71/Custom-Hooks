import { useState } from "react";
import { useSelector } from "react-redux";

function useCounter() {
	const user = useSelector((state) => state.mouse.value);
    console.log("sjhdfsd")
    return user;
}

export default useCounter;
