'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


console.log(document.documentElement)
const header = document.querySelector('.header')
const allSections =document.querySelectorAll('.sections')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)


const message = document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML =
`We use cookies for improved functionality and analytics. <button class='btn 
btn--close--cookie'> Got it! </button>`

// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))

header.before(message)
header.after(message)

//Delete
document.querySelector('.btn--close--cookie').addEventListener(
  'click', function(){
    message.remove()
  }
)


//styles
message.style.backgroundColor = '#37383d'
message.style.width = 600


console.log(header.style.color) 
console.log(Number.parseFloat(getComputedStyle(header).width) + 80 + 'px')

const section1 = document.querySelector('#section--1')
const btnScrollTo = document.querySelector('.btn--scroll-to')
btnScrollTo.addEventListener('click', function(e){
const s1coords = section1.getBoundingClientRect() //where it is..its cordiante
console.log(s1coords)
//to acheive smooth scrolling
// window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset)
//newest modernmethod
section1.scrollIntoView({behaviour : 'smooth'})
})


console.log('current X\Y', window.pageXOffset, window.pageYOffset) //current x and y coordinate 0f the page


//to get the viewport of the page
console.log(document.documentElement.clientHeight, document.documentElement.clientWidth)

//EventListewners

const randomInt =  (min,max)  => {
 return Math.floor(Math.random() * (max -min + 1) + min)
}

console.log(randomInt(0,255))

const randomColor = () => {
 return `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`
}
console
document.querySelector('.nav__link')
.addEventListener('click', function(e){
  console.log(randomColor())
  this.style.backgroundColor = randomColor()
})
document.querySelector('.nav__links')
.addEventListener('click', function(e){
  console.log(randomColor())
  this.style.backgroundColor = randomColor()
})
document.querySelector('.nav')
.addEventListener('click', function(e){
  console.log(randomColor())
  this.style.backgroundColor = randomColor()
})


