const email = document.querySelector("#email");
const menuOptions = document.querySelector("#menuOptions");
const burgerMenu = document.querySelector("#imgMenu");
const mobileOptions = document.querySelector(".mobileOptions");
const cartShopping = document.querySelector("#cartShopping");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const btnCloseProductDetail = document.querySelector(".product-detail-close");
const btnAddToCartContainer = document.querySelector("#countShoppingCart");
let cartCountShopp =0;
btnAddToCartContainer.innerText = cartCountShopp;

email.addEventListener("click", toggleMenuDesktop);
burgerMenu.addEventListener("click", toggleMenuMobile);
cartShopping.addEventListener("click", toggleOrderAside);
btnCloseProductDetail.addEventListener("click", closeProductDetailAside);    

function toggleMenuDesktop() {
  console.log(menuOptions);
  // menuOptions.classList.remove('menu');
  const isOrderMenuClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isOrderMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  menuOptions.classList.toggle("inactive");
}


function toggleMenuMobile() {
  //When I click on the menu mobile then the menu order is hidden
  const isOrderMenuClosed = shoppingCartContainer.classList.contains("inactive");
  // menuOptions.classList.remove('menu');
  //imgMenu.classList.toggle('inactive');
  if (!isOrderMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();
  mobileOptions.classList.toggle("inactive");
}


function toggleOrderAside() {
  //When I click on the the menu order then menu mobile is hidden
  const isMobileMenuClosed = mobileOptions.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileOptions.classList.add("inactive");ñ

  }
  shoppingCartContainer.classList.toggle("inactive");

    //If I click on the shopping cart and Product detail is open then this will be closed.
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive"); 
    }


  
}
function closeProductDetailAside(){

  productDetailContainer.classList.add("inactive");
}

function openProductDetailAside(){
  //If shopping cart is open and I click on the product detail then shopping cart must be closed.
  shoppingCartContainer.classList.add("inactive");	
  productDetailContainer.classList.remove("inactive");
}

function incrementShoppingCart(){
  cartCountShopp+=1; 
  btnAddToCartContainer.innerText = cartCountShopp;
  //console.log("Incrementing shopping cart" + cartCountShopp);
  //console.log(cartCount);
}

/**shopping cart */

// const productList =[];

const productList = [];
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Pantalla",
    price: 220,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Compu",
    price: 620,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Motorcycle",
    price: 300,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Car",
    price: 1000,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
  name: "Airplane",
  price: 1200000,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });

productList.push({
  name: "Intel Core i7",
  price: 30000,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

renderProducts(productList);



function renderProducts(arr) {
  let cartCount = 0;
  console.log(cardsContainer);
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    btnCloseProductDetail
   // productImg.addEventListener("click", toggleMenuDesktop);
    productImg.addEventListener("click", openProductDetailAside);

    // if(!productImg.classList.contains("inactive")){
    //   btnCloseProductDetail
    // }
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productImgCart.setAttribute("id", "btnAddToCart");
    productImgCart.addEventListener("click", incrementShoppingCart);

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
