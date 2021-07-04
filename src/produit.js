alert("bienvenue les amis");
//Recup chaine de requete dans l'url
let queryString_url_id = document.location.search;
console.log(queryString_url_id);

//Extraction de l'id par la methode 2
let urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

// Valeur de l'id
let id = urlSearchParams.get("id")
console.log(id);

//application de la methode Fetch
const URL = "http://localhost:3000/api/teddies";

document.addEventListener("DOMContentLoaded", () => {
  const produitSeul = document.getElementById("produit");
  if (produitSeul) {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => afficherProduit(response));
  }


  
  function afficherProduit(produit){
    
    produitSeul.innerHTML = `
    <div id="produit" class="produit">
				<p class="photo" id="photo"><img src="" alt="" ></p>                   
				<h2 class="titre" id="titre">je syus là</h2>
				<div class=" col-lg-4">
					<label for="lense-select">Couleurs </label>
					<select name="lenses" id="lense-select" class="mb-2"></select>
				</div>
				<div class="selectCouleur" id="selectCouleur">
					<label for="couleur-choisie">couleur</label>
					<select id="couleur-choisie" name="couleurs" id="couleur-choisie"></select>
				</div>				
				<p class="price" id="price"></p>
				<p class="description" id="description">lorem</p>					
			</div>
    `;
  }
});
request.open("GET", url + '/' + id)
