// ==========================
// AEQVA PREMIUM WATER JS
// ==========================

// WhatsApp Number
const whatsappNumber = "918506027413";

// Order Function
function orderProduct(productName){

let message =
`Hello AEQVA Premium Water,

I want to order:

${productName}

Please share more details.`;

let whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,"_blank");

}

// Gallery Image Popup

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const popup =
document.createElement("div");

popup.classList.add("image-popup");

popup.innerHTML = `
<div class="popup-content">
<span class="close-popup">&times;</span>
<img src="${img.src}">
</div>
`;

document.body.appendChild(popup);

popup.querySelector(".close-popup")
.addEventListener("click",()=>{

popup.remove();

});

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});

// Sticky Header Shadow

window.addEventListener("scroll",()=>{

const header =
document.querySelector(".header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 5px 15px rgba(0,0,0,.2)";

}else{

header.style.boxShadow =
"none";

}

});

// Simple Product Cart

let cart = [];

function addToCart(name,price){

cart.push({

product:name,
price:price

});

alert(name + " added to cart");

updateCart();

}

function updateCart(){

console.log(cart);

}

// Contact Form (Future Ready)

function sendMessage(){

alert(
"Thank you for contacting AEQVA Premium Water."
);

}

// Product Image Upload Preview

const uploadInputs =
document.querySelectorAll(".product-upload");

uploadInputs.forEach(input=>{

input.addEventListener("change",(e)=>{

const file =
e.target.files[0];

if(file){

const reader =
new FileReader();

reader.onload = function(event){

const image =
input.parentElement
.querySelector(".product-img");

image.src =
event.target.result;

}

reader.readAsDataURL(file);

}

});

});

// Welcome Message

window.onload = ()=>{

console.log(
"AEQVA Premium Water Website Loaded Successfully"
);

};

// Dynamic Year

const footerYear =
document.getElementById("year");

if(footerYear){

footerYear.innerHTML =
new Date().getFullYear();

}
const heroImages = [
    "images/hero-banner.jpg",
    "images/hero-banner2.jpg",
    "images/hero-banner3.jpg",
    "images/hero-banner4.jpg"
];

let sliderIndex = 0;

setInterval(() => {
    sliderIndex++;

    if(sliderIndex >= sliderImages.length){
        sliderIndex = 0;
    }

    document.getElementById("sliderImage").src =
    sliderImages[sliderIndex];

}, 3000);