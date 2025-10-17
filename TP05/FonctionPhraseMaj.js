function Capitalisation(a_string)
{
    if(typeof a_string != "string")
    {
        throw "Erreur, le paramètre n'est pas une chaîne de caractères";
    }

    return a_string.charAt(0).toUpperCase() + String(a_string).slice(1);
}

function CapitalisationPhrase(a_phrase)
{
    if(typeof a_phrase != "string")
    {
        throw "Erreur, le paramètre n'est pas une chaîne de caractères";
    }

    let finalSentence = "";
    const decomposedSentence = a_phrase.split(" ");
    
    for(let i = 0; i < decomposedSentence.length; i++)
    {
        finalSentence += Capitalisation(decomposedSentence[i]);

        if(i < decomposedSentence.length - 1)
        {
            finalSentence += " ";
        }
    }

    return finalSentence;
}

try
{
    let capitalisationPhrase = CapitalisationPhrase("salut la compagnie");
    console.log(capitalisationPhrase);
}
catch(e)
{
    console.log(e);
}

try
{
    let capitalisationPhrase = CapitalisationPhrase("y a du soleil et des nanas narlilali lala");
    console.log(capitalisationPhrase);
}
catch(e)
{
    console.log(e);
}

try
{
    let capitalisationPhrase = CapitalisationPhrase(2153154);
    console.log(capitalisationPhrase);
}
catch(e)
{
    console.log(e);
}