function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navegation = document.querySelector('.navbar');
    toggleMenu.classList.toggle('active');
    navegation.classList.toggle('active');
}

window.onclick=()=>{
    toggleMenu.classList.remove('active');
    navegation.classList.remove('active');
}