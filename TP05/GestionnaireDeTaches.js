function CreerGestionnaire()
{
    return tableauDeTaches = {
        "taskArray" : [],
        AjouterTache(description)
        {
            console.log("===== Ajouter Tache =====\n");
            this.taskArray.push({"description" : description, "terminee" : false});
            this.AfficherTaches();
        },
        TerminerTache(index)
        {
            console.log("===== Terminer Tache n° " + (index + 1) + " =====\n");
            this.taskArray[index].terminee = true;
            this.AfficherTaches();
        },
        AfficherTaches()
        {
            console.log("===== Afficher Taches =====\n");

            for(let i = 0; i < this.taskArray.length; i++)
            {
                console.log("Tache: " + this.taskArray[i].description);
                console.log("Terminee: " + this.taskArray[i].terminee);
            }

            console.log("\n");
        }
    };
}

let taskArray = CreerGestionnaire();

taskArray.AjouterTache("Sortir le chien");
taskArray.AjouterTache("Faire la vaisselle");
taskArray.TerminerTache(1);