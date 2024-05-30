burger=document.querySelector(".burger");
ul=document.querySelector(".ul");
navbar=document.querySelector(".nav")



burger.addEventListener("click",(e)=>{
    ul.classList.toggle("v-class");
    navbar.classList.toggle("h-resp");

    console.log("clicked");
})
