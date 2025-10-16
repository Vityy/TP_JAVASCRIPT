function Capitalisation(a_string)
{
    return a_string.charAt(0).toUpperCase() + String(a_string).slice(1);
}

function CapitalisationPhrase(a_phrase)
{
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

console.log(CapitalisationPhrase("salut la compagnie"));