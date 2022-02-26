var sideMenu = document.querySelector("aside");
var menuBtn = document.querySelector("#menu-btn")
var closeBtn = document.querySelector("#close-btn") 
var themeToggler = document.querySelector(".theme-toggler") 
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='block';
})

closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='none';
})  

//change theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
   
}) 
