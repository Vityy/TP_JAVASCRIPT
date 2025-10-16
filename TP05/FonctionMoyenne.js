function CalculMoyenne(a_array)
{
    let somme = 0;

    if(a_array.length == 0)
    {
        return 0;
    }

    for(let i = 0; i < a_array.length; i++)
    {
        if(typeof a_array[i] == "string" || typeof a_array[i] == "boolean")
        {
            return ("Erreur: l'élément à l'index " + i + " n'est pas un nombre.");
        }
        else
        {
            somme += a_array[i];
        }
    }

    return somme / a_array.length;
}

const array1 = [2, -7, 23, 58, 7, 19];
const array2 = [2, -7, 23, 58, 7, 19, "Mama mia"];
const array3 = [];
const stringText = "Holy Mother!";

console.log(CalculMoyenne(array1));
// console.log(CalculMoyenne(array2));
// console.log(CalculMoyenne(array3));
// console.log(CalculMoyenne(stringText));