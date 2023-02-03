class ProductCard{
    constructor(individualData){
        this.individualData = individualData;
        this.isMounted = false;
    }

    // <div class="productCard">
    //     <div class="productImage">
    //         <img src="./assets/one.png" alt="">
    //     </div>
    //     <div class="productDescription">
    //         <h3>Shirt</h3>
    //         <div class="rating">
    //             <i class="fa fa-star"></i>
    //             <i class="fa fa-star"></i>
    //             <i class="fa fa-star"></i>
    //             <i class="fa fa-star"></i>
    //             <i class="fa fa-star-half-o"></i>
    //         </div>
    //         <h5>Rs. 1999</h5>
            
    //     </div>
    //     <button>Add To Cart</button>
    // </div>
    render(){
        const {title, image, price} = this.individualData;

        const productCard = document.createElement("div");
        const productImageDiv = document.createElement("div");
        const productImage = document.createElement("img");
        const productDescription = document.createElement("div");
        const productTitle = document.createElement("h3");
        const productPrice = document.createElement("h5");
        const addToCartBtn = document.createElement("button");

        productCard.classList.add("productCard");
        productImageDiv.classList.add("productImage")
        productDescription.classList.add("productDescription");

        productImage.src = "https://vibhi24.github.io/E-commerce/assets/" + image;
        productTitle.innerText = title;
        productPrice.innerText = price;
        addToCartBtn.innerText = "Add To Cart"

        productCard.appendChild(productImageDiv);
        productImageDiv.appendChild(productImage);
        productCard.appendChild(productDescription);
        productDescription.appendChild(productTitle);
        productDescription.appendChild(productPrice);
        productCard.appendChild(addToCartBtn);

        return productCard;
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
export {ProductCard}