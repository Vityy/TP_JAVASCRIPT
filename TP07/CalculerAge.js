const dateNaissance = new Date("April 22, 1994 09:00:00");

function CalculerAge(a_dateDeNaissance)
{
    const diffTemps = Date.now() - dateNaissance;
    const secondesTotales = diffTemps / 1000;
    const heuresTotales = secondesTotales / 3600;
    const anneesTotales = Math.floor(heuresTotales / 8760);
    const heuresRestantes = heuresTotales % 8760;
    const moisRestants = Math.floor(heuresRestantes / 730.001);

    console.log("Vous avez " + anneesTotales + " ans et " + moisRestants + " mois");
}

CalculerAge(dateNaissance);