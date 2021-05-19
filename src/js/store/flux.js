const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			colorRojo: ["rgb(104, 38, 38)"],
			colorAmarillo: ["rgb(121, 121, 50)"],
			colorVerde: ["rgb(56, 121, 56)"]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			redColor: () => {
				const store = getStore();
				if ((store.colorRojo[0] = "rgb(104, 38, 38)")) {
					setStore({ colorRojo: "#FF0000" });
				} else setStore({ colorRojo: "rgb(104, 38, 38)" });
			},
			yellowColor: () => {
				const store = getStore();
				if ((store.colorAmarillo[0] = "rgb(104, 38, 38)")) {
					setStore({ colorAcolorVerdemarillo: "#FF0000" });
				} else setStore({ colorVerde: "rgb(104, 38, 38)" });
			},
			greenColor: () => {
				const store = getStore();
				if ((store.colorVerde[0] = "rgb(104, 38, 38)")) {
					setStore({ colorVerde: "#FF0000" });
				} else setStore({ colorVerde: "rgb(104, 38, 38)" });
			}
		}
	};
};

export default getState;
