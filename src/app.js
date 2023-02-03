// https://raw.githubusercontent.com/Vibhi24/E-commerce/main/data/data.json
import {ProductContainer} from "./components/ProductContainer.js";

const  root = document.getElementById("root");
const url = "https://raw.githubusercontent.com/Vibhi24/E-commerce/main/data/data.json";

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    const container = new ProductContainer(data);
    container.mount(root);
})
.catch((err) => {
    console.log("Error occured", err)
})