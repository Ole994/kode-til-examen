let localStorage = JSON.parse(window.localStorage.getItem("storage"));

if(!localStorage){
    window.localStorage.setItem("storage", JSON.stringify([]));
}

const colorChange = document.querySelector(".img-bg");

const productsContainer = document.querySelector(".productsContainer");
//alt i localstorage er strings


// import { getExistingFavs } from "./js/";

colorChange.addEventListener("click", ()=>{
    colorChange.classList.toggle("itWorks")
}) 

const array = [
{ 
    id: 1,
    product: "dots"
},

{ 
    id: 2,
    product: "nice"
},

{ 
    id: 3,
    product: "nicest",
},
]


array.forEach((item) => {
    productsContainer.innerHTML += `
    <div class = "result">
        <h4>${item.product}</h4>
            <div class"button">
                <button id="${item.id}" >Click me</button>
            </div>
    </div>
    `
});

array.forEach((item)=>{
    const button = document.getElementById(`${item.id}`)
    button.addEventListener("click", ()=>{
        console.log("itWorks")
    })
})












