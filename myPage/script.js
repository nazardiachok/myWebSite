const burger = document.querySelector(".header__burger");
const popup = document.querySelector(".popup");
 
if (burger)
/* if (popup) */
burger.addEventListener('click', hamHandler);
function hamHandler (e) {
    e.preventDefault();
    popup.classList.toggle("open");

    console.log("burger clicked")
}


/* 
function hamHandler (e) {
    if(popup){
        e.preventDefault();
    popup.classList.toggle("open")
    }
} */
/* ================ */

/* window.onload=function(){
    
    burger.addEventListener('click', hamHandler);
    
    function hamHandler (e) {
        e.preventDefault();
        popup.classList.toggle("open")
    }
} */