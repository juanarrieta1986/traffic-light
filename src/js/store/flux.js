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
				console.log("45");
				const store = getStore();
				if (store.colorRojo == "rgb(104, 38, 38)") {
					console.log("48");
					setStore({ colorRojo: "#FF0000" });
				} else {
					console.log("49");
					setStore({ colorRojo: "rgb(104, 38, 38)" });
				}
			},
			yellowColor: () => {
				const store = getStore();
				if (store.colorAmarillo == "rgb(121, 121, 50)") {
					setStore({ colorAmarillo: "#FFFF00" });
				} else setStore({ colorAmarillo: "rgb(121, 121, 50)" });
			},
			greenColor: () => {
				const store = getStore();
				if (store.colorVerde == "rgb(56, 121, 56)") {
					setStore({ colorVerde: "#00FF00" });
				} else setStore({ colorVerde: "rgb(56, 121, 56)" });
			}
		}
	};
};

export default getState;
