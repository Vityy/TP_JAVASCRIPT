function Init()
{
    let req = new XMLHttpRequest();
    req.open("GET", "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital");
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            let data = JSON.parse(req.responseText);

            CreerTableau()

            for(let i = 0; i < data.length; i++)
            {
                CreerLignePays(data[i]);
            }
        }
    }
    req.send();
}

function CreerTableau()
{
    const pageBody = document.querySelector("body");

    let tableauPays = document.createElement("table");

    let tableauHead = document.createElement("thead");
    let tableauTr = document.createElement("tr");

    let nomTitre = document.createElement("th");
    nomTitre.innerHTML = "Name";
    tableauTr.append(nomTitre);

    let capitaleTitre = document.createElement("th");
    capitaleTitre.innerHTML = "Capital";
    tableauTr.append(capitaleTitre);

    let populationTitre = document.createElement("th");
    populationTitre.innerHTML = "Population";
    tableauTr.append(populationTitre);

    let regionTitre = document.createElement("th");
    regionTitre.innerHTML = "Region";
    tableauTr.append(regionTitre);

    let tableauBody = document.createElement("tbody");
    tableauBody.id = "corps";

    tableauHead.append(tableauTr);
    tableauPays.append(tableauHead);
    tableauPays.append(tableauBody);

    pageBody.append(tableauPays);
}

function CreerLignePays(data)
{
    const tableBody = document.querySelector("#corps");

    let lignePays = document.createElement("tr");

    let colonneNom = document.createElement("td");
    colonneNom.innerHTML = `${data.name}`;
    colonneNom.className ="nom-pays";
    lignePays.append(colonneNom);

    let colonneCapitale = document.createElement("td");
    colonneCapitale.innerHTML = `${data.capital}`;
    colonneCapitale.className ="nom-capitale";
    lignePays.append(colonneCapitale);

    let colonnePopulation = document.createElement("td");
    let countryPopulation = parseInt(data.population).toLocaleString();
    colonnePopulation.innerHTML = `${countryPopulation}`;
    lignePays.append(colonnePopulation);

    let colonneRegion = document.createElement("td");
    colonneRegion.innerHTML = `${data.region}`;
    colonneRegion.className ="nom-region";
    lignePays.append(colonneRegion);

    tableBody.append(lignePays);
}