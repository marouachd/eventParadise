const form = document.querySelector("form"); //recupération de l'ensemble par form (tout les elements)
const elements = form.elements; // constante elements qui conserne les inputs 

for (const element of elements) { // for(String str: strings) // boucle
    const type = element.type;
    const id = element.id;
    if (type != "submit") {
        element.addEventListener("invalid", (event) => { // chaque itération il ajoute un ecouteur de type 'invalide' on peut mettre type click
            const helpText = document.getElementById(`help${id}`);

            element.classList.add("is-invalid");
            helpText.classList.add("text-danger");

            element.addEventListener("change", (event) => {
                element.classList.remove("is-invalid");
                element.classList.add("is-valid");
                helpText.classList.remove("text-danger");
            });



        });









        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("implement form reset");
            console.log("implement toaster");
        });
    }
}