function Bonjour(a_name)
{
    if(typeof a_name != "string")
    {
        throw "Erreur, le paramètre n'est pas une chaine de caractères";
    }
    else
    {
        console.log("Bonjour " + a_name);
    }
}

Bonjour("Arnaud");
// Bonjour(21);