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
            img: 'assets/img/cook.jpg',
            link: 'createCardsActionA()'
        },
        {
            name: "Action (set B)",
            img: "assets/img/cry.jpg",
            link: 'createCardsActionB()'
        },
        {
            name: "Action (set C)",
            img: 'assets/img/fly.jpg',
            link: 'createCardsActionC()'
        },
        {
            name: "Animal (set A)",
            img: 'assets/img/pig.jpg',
            link: 'createCardsAnimalA()'
        },
        {
            name: "Animal (set B)",
            img: "assets/img/mouse.jpg",
            link: 'createCardsAnimalB()'
        },
        {
            name: 'Sea animal',
            img: 'assets/img/whale.jpg',
            link: 'createCardsSeaAnimal()'
        },
        {
            name: "Clothes",
            img: 'assets/img/blouse.jpg',
            link: 'createCardsClothes()'
        },
        {
            name: "Emotions",
            img: 'assets/img/surprised.jpg',
            link: 'createCardsEmotion()'
        }
    ];

function createCategories(){
    container.innerHTML = "";
    categories.forEach(key => {
        let keyElement = document.createElement("a");
        keyElement.setAttribute("href", "#");
        keyElement.setAttribute("onclick", key.link);
        
        keyElement.innerHTML = '<img src =' + key.img + '>'+key.name;
        keyElement.classList.add('category-card');

        container.appendChild(keyElement);
    });
};
createCategories();
/*CARDS OUTPUT */

const cards = { 
    'actionA': [
        {
            word: 'cook',
            translation: 'готовить',
            image: 'assets/img/cook.jpg',
            audioSrc: 'assets/audio/cook.mp3'
          },
          {
            word: 'drink',
            translation: 'пить',
            image: 'assets/img/drink.jpg',
            audioSrc: 'assets/audio/drink.mp3'
          },
          {
            word: 'clean',
            translation: 'чистить, убираться',
            image: 'assets/img/clean.jpg',
            audioSrc: 'assets/audio/clean.mp3'
          },
          {
            word: 'eat',
            translation: 'есть',
            image: 'assets/img/eat.jpg',
            audioSrc: 'assets/audio/eat.mp3'
          },
          {
            word: 'learn',
            translation: 'учить',
            image: 'assets/img/learn.jpg',
            audioSrc: 'assets/audio/learn.mp3'
          },
          {
            word: 'shave',
            translation: 'бриться',
            image: 'assets/img/shave.jpg',
            audioSrc: 'assets/audio/shave.mp3'
          },
          {
            word: 'carry',
            translation: 'нести',
            image: 'assets/img/carry.jpg',
            audioSrc: 'assets/audio/carry.mp3'
          },
          {
            word: 'repair',
            translation: 'чинить',
            image: 'assets/img/repair.jpg',
            audioSrc: 'assets/audio/repair.mp3'
          }
    ],
    'actionB': [
      {
        word: 'open',
        translation: 'открывать',
        image: 'assets/img/open.jpg',
        audioSrc: 'assets/audio/open.mp3'
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'assets/img/play.jpg',
        audioSrc: 'assets/audio/play.mp3'
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'assets/img/point.jpg',
        audioSrc: 'assets/audio/point.mp3'
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'assets/img/ride.jpg',
        audioSrc: 'assets/audio/ride.mp3'
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'assets/img/run.jpg',
        audioSrc: 'assets/audio/run.mp3'
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'assets/img/sing.jpg',
        audioSrc: 'assets/audio/sing.mp3'
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'assets/img/skip.jpg',
        audioSrc: 'assets/audio/skip.mp3'
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'assets/img/swim.jpg',
        audioSrc: 'assets/audio/swim.mp3'
      }
    ],
    'actionC': [
        {
            word: 'cry',
            translation: 'плакать',
            image: 'assets/img/cry.jpg',
            audioSrc: 'assets/audio/cry.mp3'
          },
          {
            word: 'dance',
            translation: 'танцевать',
            image: 'assets/img/dance.jpg',
            audioSrc: 'assets/audio/dance.mp3'
          },
          {
            word: 'dive',
            translation: 'нырять',
            image: 'assets/img/dive.jpg',
            audioSrc: 'assets/audio/dive.mp3'
          },
          {
            word: 'draw',
            translation: 'рисовать',
            image: 'assets/img/draw.jpg',
            audioSrc: 'assets/audio/draw.mp3'
          },
          {
            word: 'fish',
            translation: 'ловить рыбу',
            image: 'assets/img/fish.jpg',
            audioSrc: 'assets/audio/fish.mp3'
          },
          {
            word: 'fly',
            translation: 'летать',
            image: 'assets/img/fly.jpg',
            audioSrc: 'assets/audio/fly.mp3'
          },
          {
            word: 'hug',
            translation: 'обнимать',
            image: 'assets/img/hug.jpg',
            audioSrc: 'assets/audio/hug.mp3'
          },
          {
            word: 'jump',
            translation: 'прыгать',
            image: 'assets/img/jump.jpg',
            audioSrc: 'assets/audio/jump.mp3'
          }
    ],
    'animalA':[
      {
        word: 'cat',
        translation: 'кот',
        image: 'assets/img/cat.jpg',
        audioSrc: 'assets/audio/cat.mp3'
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'assets/img/chick.jpg',
        audioSrc: 'assets/audio/chick.mp3'
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'assets/img/chicken.jpg',
        audioSrc: 'assets/audio/chicken.mp3'
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'assets/img/dog.jpg',
        audioSrc: 'assets/audio/dog.mp3'
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'assets/img/horse.jpg',
        audioSrc: 'assets/audio/horse.mp3'
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'assets/img/pig.jpg',
        audioSrc: 'assets/audio/pig.mp3'
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'assets/img/rabbit.jpg',
        audioSrc: 'assets/audio/rabbit.mp3'
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'assets/img/sheep.jpg',
        audioSrc: 'assets/audio/sheep.mp3'
      }
    ],
    'animalB':[
      {
        word: 'bird',
        translation: 'птица',
        image: 'assets/img/bird.jpg',
        audioSrc: 'assets/audio/bird.mp3'
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'assets/img/fish1.jpg',
        audioSrc: 'assets/audio/fish.mp3'
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'assets/img/frog.jpg',
        audioSrc: 'assets/audio/frog.mp3'
      },
      {
        word: 'giraffe',
        translation: 'жираф',
        image: 'assets/img/giraffe.jpg',
        audioSrc: 'assets/audio/giraffe.mp3'
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'assets/img/lion.jpg',
        audioSrc: 'assets/audio/lion.mp3'
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'assets/img/mouse.jpg',
        audioSrc: 'assets/audio/mouse.mp3'
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'assets/img/turtle.jpg',
        audioSrc: 'assets/audio/turtle.mp3'
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'assets/img/dolphin.jpg',
        audioSrc: 'assets/audio/dolphin.mp3'
      }
    ],
    'clothes':[
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'assets/img/skirt.jpg',
        audioSrc: 'assets/audio/skirt.mp3'
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'assets/img/pants.jpg',
        audioSrc: 'assets/audio/pants.mp3'
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'assets/img/blouse.jpg',
        audioSrc: 'assets/audio/blouse.mp3'
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'assets/img/dress.jpg',
        audioSrc: 'assets/audio/dress.mp3'
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'assets/img/boot.jpg',
        audioSrc: 'assets/audio/boot.mp3'
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'assets/img/shirt.jpg',
        audioSrc: 'assets/audio/shirt.mp3'
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'assets/img/coat.jpg',
        audioSrc: 'assets/audio/coat.mp3'
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'assets/img/shoe.jpg',
        audioSrc: 'assets/audio/shoe.mp3'
      }
    ],
    'emotion':[
      {
        word: 'sad',
        translation: 'грустный',
        image: 'assets/img/sad.jpg',
        audioSrc: 'assets/audio/sad.mp3'
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'assets/img/angry.jpg',
        audioSrc: 'assets/audio/angry.mp3'
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'assets/img/happy.jpg',
        audioSrc: 'assets/audio/happy.mp3'
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'assets/img/tired.jpg',
        audioSrc: 'assets/audio/tired.mp3'
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'assets/img/surprised.jpg',
        audioSrc: 'assets/audio/surprised.mp3'
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'assets/img/scared.jpg',
        audioSrc: 'assets/audio/scared.mp3'
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'assets/img/smile.jpg',
        audioSrc: 'assets/audio/smile.mp3'
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'assets/img/laugh.jpg',
        audioSrc: 'assets/audio/laugh.mp3'
      }
    ],
    'seaAnimal':[
        {
          word: 'whale',
          translation: 'кит',
          image: 'assets/img/whale.jpg',
          audioSrc: 'assets/audio/whale.mp3'
        },
        {
          word: 'shark',
          translation: 'акула',
          image: 'assets/img/shark.jpg',
          audioSrc: 'assets/audio/shark.mp3'
        },
        {
          word: 'grampus',
          translation: 'касатка',
          image: 'assets/img/grampus.jpg',
          audioSrc: 'assets/audio/grampus.mp3'
        },
        {
          word: 'seal',
          translation: 'тюлень',
          image: 'assets/img/seal.jpg',
          audioSrc: 'assets/audio/seal.mp3'
        },
        {
          word: 'crab',
          translation: 'краб',
          image: 'assets/img/crab.jpg',
          audioSrc: 'assets/audio/crab.mp3'
        },
        {
          word: 'starfish',
          translation: 'морская звезда',
          image: 'assets/img/starfish.jpg',
          audioSrc: 'assets/audio/starfish.mp3'
        },
        {
          word: 'seahorse',
          translation: 'морской конёк',
          image: 'assets/img/seahorse.jpg',
          audioSrc: 'assets/audio/seahorse.mp3'
        },
        {
          word: 'octopus',
          translation: 'осьминог',
          image: 'assets/img/octopus.jpg',
          audioSrc: 'assets/audio/octopus.mp3'
        }
    ]
}

function createCardsActionA(){
    container.innerHTML = "";
    cards.actionA.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function createCardsActionB(){
    container.innerHTML = "";
    cards.actionB.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function createCardsActionC(){
    container.innerHTML = "";
    cards.actionC.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function createCardsAnimalA(){
    container.innerHTML = "";
    cards.animalA.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function createCardsAnimalB(){
    container.innerHTML = "";
    cards.animalB.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function createCardsEmotion(){
    container.innerHTML = "";
    cards.emotion.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function createCardsClothes(){
    container.innerHTML = "";
    cards.clothes.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function createCardsSeaAnimal(){
    container.innerHTML = "";
    cards.seaAnimal.forEach(elem => {
        let keyElement = document.createElement("div");
        const innerDiv = document.createElement("div");
        const frontDiv = document.createElement("div");
        const backDiv = document.createElement("div");
        const headerDiv = document.createElement("div");
        const rotate = document.createElement("div");

        keyElement.classList.add('card-container');
        innerDiv.classList.add('card');
        frontDiv.classList.add('front');
        backDiv.classList.add('back');
        headerDiv.classList.add('card-header');
        rotate.classList.add('rotate');

        keyElement.appendChild(innerDiv);
        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        innerDiv.appendChild(rotate);
        frontDiv.style.backgroundImage = "url(" + elem.image + ")";
        backDiv.style.backgroundImage = "url(" + elem.image + ")";
        frontDiv.innerHTML = '<div class="card-header">' + elem.word + '</div>';
        backDiv.innerHTML = '<div class="card-header">' + elem.translation +'</div>';
        
        container.appendChild(keyElement);
    });
    flip();
};

function flip(){
  let rotateIcons = document.querySelectorAll('.rotate');
  let back = document.querySelectorAll('.back');
  rotateIcons.forEach(function(elem){
    elem.addEventListener('click', (e) => {
      e.target.closest('.card').classList.add('flip');
    });
  });
  back.forEach(function(elem){
    elem.addEventListener('mouseout', (e) => {
      e.target.closest('.card').classList.remove('flip');
    });
  });
};
