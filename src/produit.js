const btnAjout = document.querySelector('.ajout');
btnAjout.addEventListener('click', () =>{
    alert('Bien ajouté au panier')
})



//* récupération de l'id produit dans l'url avec la méthode URLSearchParams----------
/*
let urlSearchParams = new URLSearchParams(document.location.search)
let id = urlSearchParams.get("id")
let URL = "http://localhost:3000/api/teddies/"

//* Affichage produit dans la page--------------------------------------------------
let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        teddy = JSON.parse(this.responseText)
        affichageProduit()
    }
}
//* initialisation de la requête-------------------------------------------------
request.open("GET", URL + '/' + id)
//* envoi de la requête----------------------------------------------------------
request.send()

//* affichage du produit---------------------------------------------------------
function affichageProduit() {

    //* Ciblage des données stockées-----------------------------------------------
    let titre = document.getElementById("name")
    let prix = document.getElementById("price")
    let description = document.getElementById("description")
    let image = document.getElementById("image")


    //*  Affichage des données--------------------------------------------------------
    titre.textContent = teddy.name
    prix.textContent = teddy.price / 100 + " €"
    description.textContent = teddy.description
    image.src = teddy.imageUrl


    //* Création des choix couleur------------------------------------------------
    let produitCouleur = document.getElementById("colors")
    let options = teddy.lenses
    options.forEach(function (element, color) {
        produitCouleur[color] = new Option(element, element)
    })

    //* sélection de couleur
    let selectionColor = document.getElementById("colors").addEventListener("change", function (e) {
        selectionColor = e.target.value;
    })

    //* sélection de la quantité---------------------------------------------------
    let quantiteProduit = document.getElementById("quantiteProduit").addEventListener('change', function (e) {
        quantiteProduit = e.target.value
    })
    */
