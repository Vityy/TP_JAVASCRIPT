let societe = 
{
    "nom" : "Google",
    "siegeSocial" : "Googleplex, Mountain View, California, United States",
    "fondateurs" : [
        {"nom" : "Larry Page", "dateEtLieuDeNaissance" : "26/03/1973 à Ease Lansing, Michigan"},
        {"nom" : "Sergey Brin", "dateEtLieuDeNaissance" : "21/08/1973 à Moscou, Union Soviétique"}
    ],
    "chiffreAffaires" : [
        {"annee" : "2008", "resultat" : "16.49"},
        {"annee" : "2012", "resultat" : "37.97"},
        {"annee" : "2016", "resultat" : "89.46"},
        {"annee" : "2018", "resultat" : "136.2"}
    ]
}

console.log("Societe: " + societe.nom);

for(let i = 0; i < societe.fondateurs.length; i++)
{
    console.log("fondateur: " + societe.fondateurs[i].nom);
    console.log("né le: " + societe.fondateurs[i].dateEtLieuDeNaissance);
}

for(let i = 0; i < societe.chiffreAffaires.length; i++)
{
    console.log("chiffre d'affaire " + societe.chiffreAffaires[i].annee + ": " + societe.chiffreAffaires[i].resultat);
}