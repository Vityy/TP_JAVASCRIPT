function ControleTableau(a_array)
{
    for(let i = 0; i < a_array.length; i++)
    {
        if(typeof a_array[i] == "string" || typeof a_array[i] == "boolean")
        {
            return false;
        }
    }

    return true;
}

const array1 = [2, -7, 23, 58, 7, 19];
const array2 = [2, -7, 23, 58, 7, 19, "Mama mia"];
const array3 = [];

console.log(ControleTableau(array1));
// console.log(ControleTableau(array2));
// console.log(ControleTableau(array3));