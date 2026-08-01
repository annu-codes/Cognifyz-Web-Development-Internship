const images = document.querySelectorAll(".thumb");

const bigImage = document.getElementById("bigImage");

let current = 0;

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

bigImage.src=img.src;

current=index;

});

});

setInterval(()=>{

current++;

if(current>=images.length){

current=0;

}

bigImage.src=images[current].src;

},3000);