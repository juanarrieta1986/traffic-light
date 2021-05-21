import React, { useContext } from "react";
//import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div id="traffic-light">
			<input
				type="radio"
				name="traffic-light-color"
				id="color11"
				value="color11"
				style={{ backgroundColor: store.colorRojo }}
				onClick={() => actions.redColor()}
			/>
			<input
				type="radio"
				name="traffic-light-color"
				id="color12"
				value="color12"
				style={{ backgroundColor: store.colorAmarillo }}
				onClick={() => actions.yellowColor()}
			/>
			<input
				type="radio"
				name="traffic-light-color"
				id="color13"
				value="color13"
				style={{ backgroundColor: store.colorVerde }}
				onClick={() => actions.greenColor()}
			/>
		</div>
	);
};
