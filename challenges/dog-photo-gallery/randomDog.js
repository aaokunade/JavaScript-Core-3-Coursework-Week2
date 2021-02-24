let dogGalleries = document.querySelector("#dog-galleries");
let dogGallery = document.querySelector("#dog-gallery");
let dogImage = document.querySelector("#dog-image");
dogGalleries.addEventListener("click", btnClicked);

function btnClicked(){
    // let image = image.src;
fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        
        return response.json();
        
})
    .then(function(data) {    
        dogImage.src = data.message;
       
})
     .catch(function(error){
        console.log("there is an error");
     })
 }

