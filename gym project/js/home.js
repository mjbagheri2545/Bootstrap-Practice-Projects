// humburger-menu
function toggleMenu(el){
    el.classList.toggle('active');
    console.log(el.attributes);
}

// contact us input
function valueManager(el){
    if(el.value){
        el.classList.add('valid');
    }else{
        el.classList.remove('valid');
    }
}
// scroll animation
let navigationBar = document.querySelector('.navigation-bar');

let honorsText = document.querySelector('.honors .text');
let honorsImage = document.querySelector('.honors .img');

let planCardOne = document.querySelector('.plans .card-one');
let planCardTwo = document.querySelector('.plans .card-two');
let planCardThree = document.querySelector('.plans .card-three');

window.addEventListener('scroll',windowScroll);

function windowScroll(){
    // navbar
    if(window.scrollY >= 200){
        navigationBar.style.padding = '5px 10px';
    }else{
        navigationBar.style.padding = '26px';
    }
    // honors animation 
    addAnimationOnScroll(657,807,'honors-anim',honorsText,honorsImage);

    //plans animation
    addAnimationOnScroll(657,757,'plans-anim',planCardOne);
    addAnimationOnScroll(657,757,'plans-anim',planCardTwo);
    addAnimationOnScroll(657,757,'plans-anim',planCardThree);
}

function addAnimationOnScroll(numberOne,numberTwo,className,...elements){
        if(elements[0].getBoundingClientRect().top <= numberOne){
            elements.forEach(element => {
                element.classList.add(className);
            });
        }
        if(elements[0].getBoundingClientRect().top >= numberTwo){
            elements.forEach(element => {
                element.classList.remove(className);
            });
        }
}
windowScroll();
