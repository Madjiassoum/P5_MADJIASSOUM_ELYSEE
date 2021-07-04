/*
// tu créer la structure du produit en JS (format HTML)
    
    
    /* 
    ' <div class="container-produits">
            <div id="produit">
                <img src="${nom_imageUrl[i]}"/>
                <div class="name"><span>${nom_name[i]}</span></div>
                <div class="price"><span>${nom_price[i]}</span></div>
                <a href="pages/produit/?id=${produit._id}" class="description">${nom_description[i]}</a>
            </div>
        </div>
     ';
     */
    /*
     positionElement.innerHTML = structureProduits;
     document.getElementsByClassName("container-produts").innerHTML += product;
     affichageProduits(response);
        
}
*/
      /*
      
      
      */
      // tu ajoute le produit en question dans l'html (div avec l'id products)

     // document.getElementsByClassName("container-produts").innerHTML += product;});

//Declaration de variables
/*
let colors= [];
let _id = [];
let name = [];
let price = [];
let imageUrl = [];
let description = [];
let structureProduits = '';
let i = [];

//fonction affichants la liste des produits
function affichageProduits(response) {
    //choisir un sélecteur de la page html
    const positionElement = document.querySelector('.container-produits');
    

    //la boucle for pour afficher tous les produits
    for (i=0; i < response.length; i++){

        //Mettre les données dans les variables
        response.forEach((element, i) =>{
            colors[i] = element.colors;
            _id[i] = element._id;
            name[i] = element.name;
            price[i] = element.price;
            imageUrl[i] = element.imageUrl;
            description[i] = element.description;
        });
        structureProduits + =

        <div class="container-produits">
            <div class="produit">
                <img src="${imageUrl[i]}" class="photo-accueil"/>
                <div class="name"><span>${name[i]}</span></div>
                <Selection class="colors">
                    
                </Selection>
                <div class="price"><span>${price[i]}</span></div>
                <div class="description"><span>${description[i]}</span></div>

            </div>
        </div>
    }
    positionElement.innerHTML = structureProduits
}



fetch(URL)
.then(async (responseData) =>{   
    const response = await responseData.json()
    console.log(response[0]);
    try {
        
        let description = [];
        console.log(description);   
    function affichageProduits(response) {
        const positionElement = document.querySelector('.container-produits');
    
    response.forEach(element, i) =>{

    });
};
    affichageProduits();
    
    
    }
    catch(err){
        console.log(err);
    }
})





/*Déclaration de variables
let colors= [];
let _id = [];
let name = [];
let price = [];
let imageUrl = [];
let description = [];


/fonction qui va ajouter les produits automatiquement
function affichageProduits(response) {
/ Container de produits de l'accueil
const  selectContainer = document.querySelector(".container-produits");

/Mettre les données dans les variables
    response.forEach((element, i) => {  
        _id[i] = element._id;      
        

        document.getElementsByClassName("container-produits").innerHTML += product;


    });
    console.log(_id)

}
affichageProduits();



// Fonction pouvant servir à créer des éléments de la liste
/*function createNode(element){
    return document.createElement(element);
}
/* Ajouter un el au parent en utilisant
    document.createElement */
/*function append(parent, el){
    return parent.appendChild(el);
}

//* Récupèration des données de l'API avec fetch-----------------------------------
fetch(URL)
  .then((resp) => resp.json()) // tu convertis la réponse en JSON
  .then(function(data) => {
    // tu crée une deuxieme promesse avec les données en JSON
   
    // Promise //
    //function(item).forEach((item) => {
      // tu boucle sur le tableau des produits 
      //productsListe.innerHTML += (products, index);
      // tu créer la structure du produit en JS (format HTML)
      // tu ajoute le produit en question dans l'html (div avec l'id products)
/*
      const product = `<div class="productsListe">
		<div class="name">${item.name}</div>
		<img class="photo" src="${item.imageUrl}" />
	  </div>`;

      document.getElementById("productsListe").innerHTML += product;
    });
    /*
                        response.forEach(({
                            _id,
                            name,
                            price,
                            description,
                            imageUrl,
                        }) => {
                            //* Création variable container------------------------------------------------------
                            let container = document.getElementById("products")

                            //* Template : page teddies---------------------------------------------------------
                            let div = document.createElement("div")
                            let img = document.createElement("img")
                            let h3 = document.createElement("h3")
                            let h4 = document.createElement("h4")
                            let p = document.createElement("p")
                            let a = document.createElement("a")

                            //* Création des "noeuds" du nom de l'appareil------------------------------------
                            let elemName = document.createTextNode(name)                                                      
                            let elemPrice = document.createTextNode(price /1 + " €")
                            let elemDescription = document.createTextNode(description)

                            //* Affichage des données---------------------------------------------------------
                            a.href = './pages/produit.html?id=' + _id
                            a.textContent = "Pour plus de détails"
                            img.src = imageUrl                           

                            //ordre
                            container.appendChild(div)
                            div.appendChild(img)
                            div.appendChild(h3)
                            div.appendChild(h4)
                            div.appendChild(p)
                            div.appendChild(a)
                            h3.appendChild(elemName)
                            h4.appendChild(elemPrice)
                            p.appendChild(elemDescription)   
                            
                            container.className = "d-flex"
                            div.className = "card col-lg-4 p-3 m-5"
                           // div.className = "col-sm-6"                
                            //h3.className = "name"
                            p.className = "description"            
                            img.className = " photo-img card-img-top p-3 img-fluid w-100"
                            a.className = "btn btn-2"                            
                        })

                    } else {
                        reject(console.log('erreur :' + error));
                        reject(console.log(error));
                    }
                }
            }
            request.open("GET", URL);
            request.send();
        })
    })
*/
