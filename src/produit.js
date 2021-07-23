alert("bienvenue dans Produit");
function $_GET(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}

const API_URL = `http://localhost:3000/api/teddies/${$_GET("id")}`;

document.addEventListener("DOMContentLoaded", () => {
  const produitSeul = document.getElementById("produit");

  if (produitSeul) {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => renderProduit(data));
  }
  function renderProduit(produit) {
    produitSeul.innerHTML = `                  
        <p class="photo"><img src="${produit.imageUrl}" alt=""></p>           
        <h2 class="title">${produit.name}</h2> 
        <div class="divCouleur">
          <label for="choix_couleur">Choisir couleur</label> 
          <select id="choix_couleur" class="choix_couleur" name="choix_couleur">
            ${produit.colors
              .map((color) => `<option>${color}</option>`)
              .join(", ")}
          </select>
        </div>
        <p class="price">${produit.price / 100} €</p>               
        <p class="description">${produit.description}</p>
        `;
  }
});

//!obtention de prix total
document.addEventListener("DOMContentLoaded", () => {
  const nbChoisi = document.getElementById("divContainQtePrix");

  if (nbChoisi) {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => renderProduit(data));
  }
  function renderProduit(produit) {
    nbChoisi.innerHTML = ` 
        <p class="pQuantiteProduit" id="pQuantiteProduit">
            <label for="quantiteProduit">Quantité :</label>
            <select name="quantite" id="quantiteProduit" class="quantiteProduit">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>                 
        <p class="price"><strong>Total:</strong><span>${
          produit.price / 100
        }</span> €</p>        
        `;
  }
});
//! Selection couleur
//* sélection des objectifs---------------------------------------------------
let choisirColor = document.getElementById("choix_couleur");
document.addEventListener("change", function (e) {
  choisirColor = e.target.value;
});
//! sélection de la quantité
let quantiteProduit = document.getElementById("number");
document.addEventListener("change", function (e) {
  quantiteProduit = e.target.value;
  console.log(quantiteProduit);
});

//! Bouton ajouter au panier
let btnAjouterAuPanier = document.querySelector(".ajout");
btnAjouterAuPanier.addEventListener("click", () => {
  btnAjouterAuPanier.style.border = "2px solid blue";
  btnAjouterAuPanier.style.color = "blue";
  alert("Produit bien ajouté au panier");
});
console.log(btnAjouterAuPanier);

//? Récup et envoi données

//? selection de l'id du formulaire
// const idCouleur = document.querySelector(".choix_couleur");
// const choixCouleur = idCouleur.value;
// console.log(choixCouleur);
//! Ajouter des données dans le local Storage
// localStorage.setItem("titre", "valeur title");
// localStorage.setItem("prenom", "valeur prenom");
// localStorage.setItem("lieu", "valeur lieue");
// localStorage.setItem("couleur", "valeur couleur");
// localStorage.setItem("nom", "valeur nom");

// //! récupérer une donnée du local storage
// let maDonnee = localStorage.getItem("prenom");
// console.log(maDonnee);

// //! Supprimer une donnée du local storage
// localStorage.removeItem("lieu");
// localStorage.removeItem("nom");
// localStorage.removeItem("lieu");
// localStorage.removeItem("titre");
// localStorage.clear();

// console.log(localStorage);
