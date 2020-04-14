const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu-list");
const overlay = document.querySelector(".menu-overlay")

let menuOpen = false;

menuBtn.addEventListener("click", (e) => {
    if(!menuOpen){
        menuBtn.classList.add("open");
        menuList.classList.remove("menu-list__hidden");
        overlay.classList.add('visible');
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuList.classList.add("menu-list__hidden");
        overlay.classList.remove('visible');
        menuOpen = false;
    }
});

overlay.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    menuList.classList.add("menu-list__hidden");
    overlay.classList.remove('visible');
    menuOpen = false;
});

menuList.addEventListener("click", (e) => {
    if(e.target.tagName == "A"){
        menuBtn.classList.remove("open");
        menuList.classList.add("menu-list__hidden");
        overlay.classList.remove('visible');
        menuOpen = false;
    }
});


/* CATEGORIES OUTPUT */
const container = document.querySelector('.container');
const categories = [
    {
        name: "Action (set A)",
        img: 'assets/img/fly.jpg'
    },
    {
        name: "Action (set B)",
        img: "assets/img/cry.jpg"
    },
    {
        name: "Action (set C)",
        img: 'assets/img/cook.jpg'
    },
    {
        name: "Animal (set A)",
        img: 'assets/img/pig.jpg'
    },
    {
        name: "Animal (set B)",
        img: "assets/img/mouse.jpg"
    },
    {
        name: 'Sea animal',
        img: 'assets/img/whale.jpg'
    },
    {
        name: "Clothes",
        img: 'assets/img/blouse.jpg'
    },
    {
        name: "Emotions",
        img: 'assets/img/surprised.jpg'
    }
];

categories.forEach(key => {
    const keyElement = document.createElement("a");
    keyElement.setAttribute("href", "#");
    
    keyElement.innerHTML = '<img src =' + key.img + '>'+key.name;
    keyElement.classList.add('card');

    container.appendChild(keyElement);
});

