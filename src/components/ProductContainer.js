import { ProductCard } from "./ProductCard.js";

class ProductContainer{
    constructor(productsData){
        this.productsData = productsData;
        this.isMounted = false;
    }
    render(){
        const products=document.createElement("div")
        const productsContainer=document.createElement("div");
        const containerHeading=document.createElement("h1");
        
        products.classList.add("products")
        productsContainer.classList.add("productsContainer");
        productsContainer.id="products_start";
        containerHeading.classList.add("container_heading");

        containerHeading.innerText= "PRODUCTS";

        productsContainer.appendChild(containerHeading);
        productsContainer.appendChild(products);
        this.productsData.forEach(element => {
            const p = new ProductCard(element);
            p.mount(products);
        });

        return productsContainer;
    }
    mount(el) {
        if(this.isMounted) return;
        if(el){
            el.appendChild(this.render());
            this.isMounted = true;
            return;
        }
        document.body.appendChild(this.render())
        this.isMounted = true;
        return;
    }
}
export {ProductContainer}