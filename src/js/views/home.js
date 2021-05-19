import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div id="traffic-light">
		<input type="radio" name="traffic-light-color" id="color1" value="color1" />
		<input type="radio" name="traffic-light-color" id="color2" value="color2" />
		<input type="radio" name="traffic-light-color" id="color3" value="colo3" />
	</div>
);
