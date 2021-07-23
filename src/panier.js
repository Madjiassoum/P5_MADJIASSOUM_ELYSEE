alert("bienvenuePANIER");
function $_GET(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}

const promisePanier = fetch(`http://localhost:3000/api/teddies/`);
// const URL = `http://localhost:3000/api/teddies/${$_GET("id")}`;

promisePanier
  .then((response) => {
    console.log(response);
    const usersData = response.json();
    console.log(usersData);
    usersData.then((response) => {
      console.log(
        "Nom: " + response[1].name + "  " + "Prix: " + response[1].price
      );
    });
  })
  .catch((erreur) => {
    console.log("Il y a une" + erreur);
  });

// //!obtention de prix total
// document.addEventListener("DOMContentLoaded", () => {
//   const nbChoisi = document.getElementById("form_2");

//   if (nbChoisi) {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => renderProduit(data));
//   }
//   function renderProduit(produit) {
//     nbChoisi.innerHTML = `
//     <p id="nbOption">
//               <label for="number">Quantité :</label>
//               <input
//                 type="number"
//                 name="number"
//                 id="numberQte"
//                 min="1"
//                 max="50"
//                 placeholder="1 à"
//                 class="numberQ"
//                 required
//               />
//             </p>
//         <p class="price"><strong>Total:</strong>${
//           produit.price / 100
//         } €</p>
//         `;
//   }
// });
// const changerBtnAjout = document.querySelector(".ajout");
// changerBtnAjout.addEventListener("click", () => {
//   changerBtnAjout.style.border = "1px solid red";
//   changerBtnAjout.style.color = "blue";
//   changerBtnAjout.style.fontSize = "1.4em";
//   alert("Produit bien ajouté au panier");
// });
// console.log(changerBtnAjout);

// //! Ajouter des données dans le local Storage
// localStorage.setItem("titre", "valeur title");
// localStorage.setItem("prenom", "valeur prenom");
// localStorage.setItem("lieu", "valeur lieue");
// localStorage.setItem("couleur", "valeur couleur");
// localStorage.setItem("nom", "valeur nom");

// // //! récupérer une donnée du local storage
// // let maDonnee = localStorage.getItem("prenom");
// // console.log(maDonnee);

// // //! Supprimer une donnée du local storage
// // localStorage.removeItem("lieu");
// // localStorage.removeItem("nom");
// // localStorage.removeItem("lieu");
// // localStorage.removeItem("titre");
// // localStorage.clear();

// // console.log(localStorage.lieu);

// // produitSeul.innerHTML = `
// //     <div class="produit">
// //       <p class="p1">${produit.description}</p>
// //     </div
// //         `;
