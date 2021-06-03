//* Création variable Url --------------------------------------------------------
let URL = "http://localhost:3000/api/teddies/"

//* Récupèration des données de l'API avec fetch-----------------------------------
fetch(URL)
    .then(response => response.json())
    .then(response => { // Promise //
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        resolve(JSON.parse(request.responseText))
                        //* récupèration de chaque élément du tableau Array----------------------------------
                        response.forEach(({
                            _id,
                            name,
                            price,
                            description,
                            imageUrl,
                        }) => {
                            for(i=0; i < response.length; i++){
                                console.log(+i);
                            }
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
                            a.href = './produit.html?id=' + _id
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
