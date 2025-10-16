function Capitalisation(a_string)
{
    return a_string.charAt(0).toUpperCase() + String(a_string).slice(1);
}

console.log(Capitalisation("hexecosiohexecomptahexaphobie"));