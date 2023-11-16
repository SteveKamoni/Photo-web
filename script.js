'use strict'

//? NAvbar

const toggleBtn = document.querySelector('.menu-toggle');
const dropDown = document.querySelector('.dropdown-menu');
const close = document.querySelector('.menu-toggle-close')

toggleBtn.addEventListener('click', function(){
    dropDown.classList.toggle('open');
})

// ? slideshow-js
let index = 0;
displayImages();

function displayImages() {
    const images = document.getElementsByClassName('image');
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    
    index++;
    if (index > images.length) {
        index = 1;
    }
    
    images[index - 1].style.display = "block";
    
    setTimeout(displayImages, 10000); // Call the function again after 2 seconds
}

//? welcome section js

'use strict'

//? Get a reference to the article-container element
const articleContainer = document.querySelector('.article-container');
const button = document.querySelector('.button');

//? Function to remove the gap on mouseover
function removeGapOnMouseOver() {
    articleContainer.style.gridGap = '0';
}

//? Function to restore the gap on mouseout
function restoreGapOnMouseOut() {
    articleContainer.style.gridGap = '20px';
}

//? Add transition to the article-container for a smooth effect
articleContainer.style.transition = 'grid-gap 0.6s ease-in-out';

//? Add event listeners for mouseover and mouseout
articleContainer.addEventListener('mouseover', removeGapOnMouseOver);
articleContainer.addEventListener('mouseout', restoreGapOnMouseOut);

button.addEventListener('click', removeGapOnMouseOver);
