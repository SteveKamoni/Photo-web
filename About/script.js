'use strict'


//? NAvbar

const toggleBtn = document.querySelector('.menu-toggle');
const dropDown = document.querySelector('.dropdown-menu');
const close = document.querySelector('.menu-toggle-close')

toggleBtn.addEventListener('click', function(){
    dropDown.classList.toggle('open');
})


let index = 0;
displayStory();


function displayStory () { 
    const story = document.getElementsByClassName('story-container');
    
    for(let i = 0; i < story.length;i++) {
        story[i].style.display = "none";
    }
    
    index++;
    if(index > story.length){
        index = 1;
    }

    story[index-1].style.display = "flex";
    setTimeout(displayStory, 10000);
}
