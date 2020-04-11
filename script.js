const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
const overlay = document.querySelector('.menu-overlay')
let menuOpen = false;

menuBtn.addEventListener('click', (e) => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuList.classList.remove('menu-list__hidden');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuList.classList.add('menu-list__hidden');
        menuOpen = false;
    }
});

overlay.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menuList.classList.add('menu-list__hidden');
    menuOpen = false;
});

menuList.addEventListener('click', (e) => {
    if(e.target.tagName == 'A'){
        menuBtn.classList.remove('open');
        menuList.classList.add('menu-list__hidden');
        menuOpen = false;
    }
});
