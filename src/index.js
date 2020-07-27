console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function addImage(image) {
    let img = document.createElement("img");
    img.src = image
    document.body.appendChild(img)
}

document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        console.log(json)
        let images = json.message
        images.forEach(addImage)
    })
    
});