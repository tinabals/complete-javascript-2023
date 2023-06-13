'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)

const openModal = function(){
    //  modal.style.display = 'block'
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal =  function(){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
      }


for(let i=0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal)
btnCloseModal.addEventListener
    ('click', closeModal
  )
overlay.addEventListener('click', closeModal)


//key up...when you lift your finger from the key
//keydown when you fire the key
//key prees when you press thr key down continually

document.addEventListener('keydown', function(e){
    console.log('a key was pressed', e.key)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal()
    }
})