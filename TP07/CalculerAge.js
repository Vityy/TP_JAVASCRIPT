const dateNaissance = new Date("April 22, 1994 09:00:00");

function CalculerAge(a_dateDeNaissance)
{
    if(Object.prototype.toString.call(a_dateDeNaissance) != "[object Date]")
    {
        throw "Erreur, la date de naissance n'est pas dans un format correct";
    }

    const diffTemps = Date.now() - dateNaissance;
    const secondesTotales = diffTemps / 1000;
    const heuresTotales = secondesTotales / 3600;
    const anneesTotales = Math.floor(heuresTotales / 8760);
    const heuresRestantes = heuresTotales % 8760;
    const moisRestants = Math.floor(heuresRestantes / 730.001);

    console.log("Vous avez " + anneesTotales + " ans et " + moisRestants + " mois");
}

try
{
    CalculerAge(dateNaissance);
}
catch(e)
{
    console.log(e);
}

try
{
    CalculerAge(22041994);
}
catch(e)
{
    console.log(e);
}