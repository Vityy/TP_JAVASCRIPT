function Capitalisation(a_string)
{
    if(typeof a_string != "string")
    {
        throw "Erreur, le paramètre n'est pas une chaîne de caractères";
    }

    return a_string.charAt(0).toUpperCase() + String(a_string).slice(1);
}

try
{
    let capitalisation = Capitalisation("hexecosiohexecomptahexaphobie");
    console.log(capitalisation);
}
catch(e)
{
    console.log(e);
}

try
{
    let capitalisation = Capitalisation(21);
    console.log(capitalisation);
}
catch(e)
{
    console.log(e);
}