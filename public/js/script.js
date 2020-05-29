$(function(){
$('[data-toggle="tooltip"]').tooltip();
});




        let cart = [];
    const products = document.querySelector("div.sell-center").children
    for (let i = 0; i < products.length; i++) {
        products[i].addEventListener('click', function(){
            productContent = this.getElementsByTagName("span");
            currentProduct = [productContent]
            product = {
                productName:currentProduct[0][0].textContent,
                sellingPrice:currentProduct[0][1].textContent,
                productQuantity:currentProduct[0][2].textContent
            };
            cart.unshift(product)
            for (item of cart) {
                document.querySelector('#productQuantity').textContent = item.productQuantity;
                document.querySelector('#productName').textContent = item.productName;
                document.querySelector('#sellingPrice').textContent = item.sellingPrice;
            }
            // console.log(cart);
            })
        };

        // <span id="productQuantity" class="cart-item-title">12</span>
        // <span id="productName" class="cart-item-title">Biro</span>
        // <span id="sellingPrice" class="cart-item-title">#123</span>