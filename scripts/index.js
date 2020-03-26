let destinations = document.getElementById("destinations");

let myRequest = new Request("https://arfp.eu/dataset/voyages.json");

fetch(myRequest)
    .then(reponse => reponse.json())
    .then(data => {
        Object.keys(data).forEach(function(k){
            addDestination(destinations, data[k]);
        });
    });

function addDestination(elemt, value){
    let destination = addElemt(elemt, 'div', "destination", "");

    addElemt(destination, 'h1', "title-destination", document.createTextNode(value.titre));

    let imgDestination = addElemt(destination, 'img', "img-destination", "");
    imgDestination.src = "./images/destination.jfif";

    addElemt(destination, 'article', "description-destination", document.createTextNode(value.description));

    let buttonDestination = addElemt(destination, 'button', "button-description", document.createTextNode("Lire la suite"));
}

function addElemt(parentElemt, typeElemt, className, value){
    let elemt = document.createElement(typeElemt);
    parentElemt.appendChild(elemt);
    elemt.className = className;
    if(value != ""){
        elemt.appendChild(value);
    }
    return elemt;  
}