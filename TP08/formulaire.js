button = document.querySelector("#validation-button");
button.addEventListener("click", TryValidateForm);

function TryValidateForm()
{
    try
    {
        PushForm();
    }
    catch(e)
    {
        console.error(e);
    }
}

function PushForm()
{
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const dateDeNaissance = document.querySelector("#date").value;

    // console.log(dateDeNaissance);

    if(nom == "" )
    {
        throw "Le nom doit être renseigné";
    }
    else if(prenom == "")
    {
        throw "Le prénom doit être renseigné";
    }
    else if(dateDeNaissance == "")
    {
        throw "La date de naissance doit être renseigné";
    }
}