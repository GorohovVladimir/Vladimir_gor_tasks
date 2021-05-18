(function(){
    
var emoji = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"];

function mySlider (arr, id) {

 const container = document.querySelector(id);
 
 let i = 0;
 
setInterval(function(){
    container.innerHTML = `<img class="slider__image" src="Image/${emoji[i]}" />`;
    i++;
    if(i >= emoji.length){
        i = 0;
    }
}, 2000)
   
}

mySlider(emoji, '#slider');

})();