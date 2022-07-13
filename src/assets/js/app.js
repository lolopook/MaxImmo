let menu = document.getElementById("menuBurger");
// console.log(menu);

let menuPop = document.getElementById("linkPagesMedia");
// console.log(menuPop);

let cross = document.getElementById("menuCross");
// console.log(cross);

menu.addEventListener("click",function(){
    menuPop.style.display = "block";

    menu.style.display = "none";

    cross.style.display = "block";
})

cross.addEventListener("click", function(){
    menuPop.style.display = "none";

    menu.style.display = "flex";

    cross.style.display = "none";
})


// Change Team images. 
// fleche carrousel gauche
// Arrow Left
let arrowleft = document.getElementById("arrowLeft");

// fleche carrouselle droite.
// Arrow Right
let arrowRight = document.getElementById("arrowRight");


//déclaration des Source des images.
// Var for src when the page load.
let  pictOneSource  = document.getElementById("pict1").src
let  pictTwoSource  = document.getElementById("pict2").src
let  pictThreeSource  = document.getElementById("pict3").src

// la constante des images pour changer la source.
//declaration of constants of images.
const pictOne = document.getElementById("pict1");
const pictTwo = document.getElementById("pict2");
const pictThree = document.getElementById("pict3");

// pour la flèche de droite / on utilise la constante pour 
// changer la sources et une class pour une continuité.

// it's a function for change image with a class to image.
// it's for only right arrow.
function right() {

    //Au click Si la classe pict1 est égale a one alors : 
    if (pictOne.classList == "one") {
        // on change les sources des images.
        pictOne.src = pictThreeSource;
        pictTwo.src = pictOneSource;
        pictThree.src = pictTwoSource;
        // on enlève la classe one et ajoute two. 
        pictOne.classList.remove("one");
        pictOne.classList.add("two");
    }
    else if (pictOne.classList == "two") {
        pictOne.src = pictTwoSource;
        pictTwo.src = pictThreeSource;
        pictThree.src = pictOneSource;
        pictOne.classList.remove("two");
        pictOne.classList.add("three");
    }
    else if (pictOne.classList == "three"){
        pictOne.src = pictOneSource;
        pictTwo.src = pictTwoSource;
        pictThree.src = pictThreeSource;
        pictOne.classList.remove("three");
        pictOne.classList.add("one");
    }
}

function left() {
    if (pictOne.classList == "one") {
        pictOne.src = pictTwoSource;
        pictTwo.src = pictThreeSource;
        pictThree.src = pictOneSource;
        pictOne.classList.remove("one");
        pictOne.classList.add("three");
    }
    else if (pictOne.classList == "three") {
        pictOne.src = pictThreeSource;
        pictTwo.src = pictOneSource;
        pictThree.src = pictTwoSource;
        pictOne.classList.remove("three");
        pictOne.classList.add("two");
    }
    else if (pictOne.classList == "two"){
        pictOne.src = pictOneSource;
        pictTwo.src = pictTwoSource;
        pictThree.src = pictThreeSource;
        pictOne.classList.remove("two");
        pictOne.classList.add("one");
    }
}

// Listener for right arrow and left below. 
arrowRight.addEventListener("click", function(){
    right()
})

arrowleft.addEventListener("click", function(){
    left()
})

