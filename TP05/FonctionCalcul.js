function Addition(a, b)
{
    if(typeof a != "number" || typeof b != "number")
    {
        throw "Erreur, un des paramètres n'est pas un nombre";
    }

    return a * b + a + b;
}


try
{
    let addition = Addition(5, 97);
    console.log(addition);
}
catch(e)
{
    console.log(e);
}

try
{
    let addition = Addition("Valentin", "Evan");
    console.log(addition);
}
catch(e)
{
    console.log(e);
}