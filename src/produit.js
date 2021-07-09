alert("bienvenue les amis");
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
    produitSeul.innerHTML= `                  
        <p class="photo"><img src="${produit.imageUrl}" alt=""></p>           
        <h2 class="title">${produit.name}</h2> 
        <div class="choix_couleur">
          <label for="choix_couleur">couleur</label> 
          <select class="choix_couleur" name="choix_couleur">
            ${produit.colors
              .map((color) => `<option>${color}</option>`)
              .join(", ")}
          </select>
        </div>
        <p class="price">${(produit.price) /10} €</p>               
        <p class="description">${produit.description}</p>
        `;
      }

/*  function renderProduit(product) {

    produitSeul.innerHTML = `
        <div class="produit">
                <p class="photo">
                    <img src="${produit.imageUrl}" alt="">
                </p>                
                <p class="title">${produit.name}</p>
                <select class="sizes" name="sizes">
                    ${produit.lenses
                      .map((lense) => `<option>${lense}</option>`)
                      .join(", ")}
                </select>
                <p class="description">${produit.description}</p>
                <p class="price">${renderPrice(produit.price)}</p>
                
            </div>
        `;
  }
  */
});
//Recup chaine de requete dans l'url
/*
let queryString_url_id = document.location.search;
console.log(queryString_url_id);

//Extraction de l'id par la methode 2
let urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

// Valeur de l'id
let id = urlSearchParams.get("id")
console.log(id);

 /*
  //la fonction afficher produit
        <div class="selectCouleur" id="selectCouleur">
          <label for="couleur-choisie">couleur</label>
          <select id="couleur-choisie" name="couleur" id="couleur-choisie"></select>
        </div>			     
       
    `;
  }
  */
 /*
});
function showItem(item) { 
  //Actualise l'image du produit
  pdtImg.alt = item.name;
  pdtImg.src = item.imageUrl;
  //Actualise le titre du produit 
  pdtTitle.textContent = item.name;
  //Actualise la description du produit 
  pdtDescription.textContent = item.description;
  //Actualise le prix unitaire du produit
  let totalPrice = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(item.price/100);
  pdtPrice.textContent = "Prix unitaire : " + totalPrice;
  //Actualise la liste des options de vernis
  let varnishList = item.varnish;
  //Remise à zéro du vernis précédent en le supprimant du localStorage 
  localStorage.removeItem("chosenVarnish");
  //Boucle pour créer une ligne du menu déroulant pour chaque vernis, différente selon les produits
  for (let i=0 ; i<varnishList.length ; i++) {
      let varnish = document.createElement("span");
      varnish.className = "dropdown-item";
      varnish.textContent = varnishList[i];
      //Quand le user clique sur l'option, elle reste affichée quand le menu se ferme
      varnish.addEventListener("click", function() {
          varnishBtn.textContent = varnishList[i];
          //Stockage du choix de vernis dans le localStorage
          localStorage.setItem("chosenVarnish", varnishList[i]);
      });
      varnishChoice.appendChild(varnish);
  }
  //Actualise le bouton d'ajout au panier
  pdtButton.setAttribute("data-id", item._id);
  pdtButton.addEventListener("click", addPdtGlobal); 
}
*/

      