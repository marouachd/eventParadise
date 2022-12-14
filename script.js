
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
if (day < 10) {
    day = "0" + day;
}
if (month < 10) {
    month = "0" + month;
}
var tdate = year + "-" + month + "-" + day;

const date_min = tdate;

const date = document.querySelector('#date')
date.setAttribute("min", date_min)

const form = document.querySelector("form"); //recupération de l'ensemble par form (tout les elements)
const elements = form.elements; // constante elements qui conserne les inputs 



for (const element of elements) { // for(String str: strings) // boucle
    const type = element.type;
    const id = element.id;
    const helpText = document.getElementById(`help${id}`);
    const select = document.querySelector("select");

    if (type != "submit") {
        element.addEventListener("invalid", (event) => { // chaque itération il ajoute un ecouteur de type 'invalide' on peut mettre type click&

            element.classList.add("is-invalid");
            date.classList.add("is-invalid");
            select.classList.add("is-invalid");
            helpText.classList.add("text-danger");

        });
    }
}

for (const element of elements) {
    const id = element.id;
    const helpText = document.getElementById(`help${id}`);
    const date = document.getElementById("date");
    element.addEventListener("change", (event) => {
        if (element.validity.valid) {
            element.classList.remove("is-invalid");
            element.classList.add("is-valid");
            helpText.classList.remove("text-danger");
            helpText.classList.add("text-success");

        } else {

            element.classList.remove("is-valid");
            element.classList.add("is-invalid");
            helpText.classList.remove("text-success");
            helpText.classList.add("text-danger");
        }
    });

}






