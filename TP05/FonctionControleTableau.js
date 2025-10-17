function ControleTableau(a_array)
{
    if(!Array.isArray(a_array))
    {
        throw "Erreur, le paramètre n'est pas un tableau";
    }

    for(let i = 0; i < a_array.length; i++)
    {
        if(typeof a_array[i] != "number")
        {
            throw "Erreur, le paramètre à l'index " + i + " n'est pas un nombre";
            // return false;
        }
    }

    return true;
}

const array1 = [2, -7, 23, 58, 7, 19];
const array2 = [2, -7, 23, 58, 7, 19, "Mama mia"];
const array3 = [];
const stringText = "Holyyyyy";

try
{
    let controle = ControleTableau(array1);
    console.log(controle);
}
catch(e)
{
    console.log(e);
}

try
{
    let controle = ControleTableau(array2);
    console.log(controle);
}
catch(e)
{
    console.log(e);
}

try
{
    let controle = ControleTableau(array3);
    console.log(controle);
}
catch(e)
{
    console.log(e);
}

try
{
    let controle = ControleTableau(stringText);
    console.log(controle);
}
catch(e)
{
    console.log(e);
}