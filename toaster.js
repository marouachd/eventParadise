
const toaster = document.getElementById("toast");

form.addEventListener("submit", (event) => {
    const toast = new bootstrap.Toast(toaster);

    toast.show()
});

