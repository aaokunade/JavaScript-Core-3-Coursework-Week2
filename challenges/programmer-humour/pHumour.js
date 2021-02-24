function fetchProgrammerHumour(){
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(function(response) {
         return response.json();        
})
    .then(function(data){
        let image = document.createElement("img");
        document.body.appendChild(image);
        image.src = data.img;        
    })

    .catch(function(error){
        console.log("there is an error");
     })
}

fetchProgrammerHumour();