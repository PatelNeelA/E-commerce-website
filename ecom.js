let mainPage = document.querySelector(".main");
let  blog = document.querySelector(".trends");

let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");

let contact =document.querySelector (".contact");
let about = document.querySelector(".about");

console.log(card);

function homes(){
    mainPage.style.display = "flex";
    card.style.display = "block"; 
    card2.style.display = "block"; 
    blog.style.display = "block";
    about.style.display ="none";
    contact.style.display ="none";

    document.getElementById("home").style.color="red";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";

}

function shops(){
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display ="none";
    card.style.display = "block"; 
    card2.style.display = "block"; 
    contact.style.display ="none";

    document.getElementById("shop").style.color="red";
    document.getElementById("home").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
}

function blogs(){
    mainPage.style.display = "none";
    card.style.display = "none"; 
    card2.style.display = "none"; 
    blog.style.display = "block";
    about.style.display ="none";
    contact.style.display ="none";

document.getElementById("blog").style.color="red";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
document.getElementById("contact").style.color="black";
}

function abouts(){
    mainPage.style.display = "none";
    card.style.display = "none"; 
    card2.style.display = "none"; 
    blog.style.display = "none";
    about.style.display ="block";
    contact.style.display ="none";

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="red";
document.getElementById("contact").style.color="black";

}

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none"; 
    card2.style.display = "none"; 
    blog.style.display = "none";
    about.style.display ="none";
    contact.style.display ="block";

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
document.getElementById("contact").style.color="red";
}

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display = "none";
    card.style.display = "none"; 
    card2.style.display = "none"; 
    blog.style.display = "none";
    about.style.display ="none";
    contact.style.display ="none";

    document.querySelector(".cart").style.display="flex"
}

function addcart(){
    alert("Added to cart");
    location.reload()
}