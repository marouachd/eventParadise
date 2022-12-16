
const toaster = document.getElementById("toast");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const toast = new bootstrap.Toast(toaster);
    toast.show()
});

