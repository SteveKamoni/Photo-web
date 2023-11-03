'use strict'

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
