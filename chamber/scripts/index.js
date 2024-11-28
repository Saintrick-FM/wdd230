


document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const burgerMenu = document.querySelector(".burger-menu");
   

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("close");
      burgerMenu.classList.toggle("open");


if (nav.classList.contains("close"))  {

    nav.style.display="flex"
   
    
}else{
    
    nav.style.display="none"
   

}
    });
  });