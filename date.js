function date() {
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
    var date = year + "-" + month + "-" + day;

    return date;
};

const date_min = date();

const date = document.querySelector('#date')
date.setAttribute("min", date_min)

date.addEventListener("change", (event) => {
    if (this.validity.valueMissing) {
        this.classList.add("is-invalid")
    } else {
        this.classList.add('is-valid')
    }

    if (this.validity.rangeUnderflow) {
        this.classList.add('is-invalid')
    } else {
        this.classList.add('is-valid')
    }

});