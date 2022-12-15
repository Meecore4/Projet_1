// MENU BURGER //

const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}


// ANIMATION //

const title = document.querySelector('h4');
const txt = "Nos chers délégués ♡"

function typewriter(delegue, index){

    if(index < delegue.length){

        setTimeout(() => {
            title.innerHTML += `${delegue[index]}`
            typewriter(txt, index + 1)
        },
         
        300);
     }
}

setTimeout(() => {

    typewriter(txt, 0)
},

200);