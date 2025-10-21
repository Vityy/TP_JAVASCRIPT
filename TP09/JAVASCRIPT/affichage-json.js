let data;

function Init()
{
    let req = new XMLHttpRequest();
    req.open("GET", "https://digicode.cleverapps.io/json/pays/pollution");
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            data = JSON.parse(req.responseText);

            InitialiserTableau();
        }
    }
    req.send();
}

function InitialiserTableau()
{
    const titre = document.querySelector("#titre");
    const annee = document.querySelector("#annee");
    const corpsTableau = document.querySelector("#corps");

    titre.innerHTML = `Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}`;

    for(let i = 0; i < data.pays.length; i++)
    {
        const pays = data.pays[i];
        let lignePays = document.createElement("tr");

        let colonneDrapeau = document.createElement("td");
        colonneDrapeau.className = "drapeau";
        let drapeau = document.createElement("img");
        drapeau.src = `https://flagcdn.com/24x18/${pays.code}.png`;
        colonneDrapeau.append(drapeau);
        lignePays.append(colonneDrapeau);

        let colonneNom = document.createElement("td");
        colonneNom.className = "nom";
        colonneNom.innerHTML = `${pays.nom}`;
        lignePays.append(colonneNom);

        let colonneValeur = document.createElement("td");
        colonneValeur.className = "center";
        colonneValeur.innerHTML = `${pays.valeur}`;
        lignePays.append(colonneValeur);

        let colonnePourcentage = document.createElement("td");
        colonnePourcentage.className = "center";
        colonnePourcentage.innerHTML = `${pays.pourcentage}`;
        lignePays.append(colonnePourcentage);

        corpsTableau.append(lignePays);
    }
}