function Init()
{
    let req = new XMLHttpRequest();
    req.open("GET", "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies");
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

    let regionTitre = document.createElement("th");
    regionTitre.innerHTML = "Region";
    tableauTr.append(regionTitre);

    let populationTitre = document.createElement("th");
    populationTitre.innerHTML = "Population";
    tableauTr.append(populationTitre);

    let currencyTitre = document.createElement("th");
    currencyTitre.innerHTML = "Main Currency";
    tableauTr.append(currencyTitre);

    let languageTitre = document.createElement("th");
    languageTitre.innerHTML = "Main Language";
    tableauTr.append(languageTitre);

    let flagTitre = document.createElement("th");
    flagTitre.innerHTML = "Flag";
    tableauTr.append(flagTitre);

    let independentTitre = document.createElement("th");
    independentTitre.innerHTML = "Independent";
    tableauTr.append(independentTitre);

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

    let colonneRegion = document.createElement("td");
    colonneRegion.innerHTML = `${data.region}`;
    colonneRegion.className ="nom-region";
    lignePays.append(colonneRegion);

    let colonnePopulation = document.createElement("td");
    let countryPopulation = parseInt(data.population).toLocaleString();
    colonnePopulation.innerHTML = `${countryPopulation}`;
    lignePays.append(colonnePopulation);

    let colonneCurrency = document.createElement("td");
    colonneCurrency.innerHTML = `${(data.currencies != null && data.currencies.length > 0) ? data.currencies[0].name : "No Data"}`;
    lignePays.append(colonneCurrency);

    let colonneLanguage = document.createElement("td");
    colonneLanguage.innerHTML = `${data.languages[0].name}`;
    lignePays.append(colonneLanguage);

    let colonneDrapeau = document.createElement("td");
    let drapeau = document.createElement("img");
    drapeau.className ="drapeau";
    drapeau.src = `${data.flag}`;
    colonneDrapeau.append(drapeau);
    lignePays.append(colonneDrapeau);

    let colonneIndependent = document.createElement("td");
    colonneIndependent.innerHTML = `${data.independent}`;
    lignePays.append(colonneIndependent);

    tableBody.append(lignePays);
}