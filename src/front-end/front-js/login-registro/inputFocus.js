// handlers
const handleFocusIn = ({ target }) => {
    const span = target.nextElementSibling;
    if (span) {
        span.classList.add("spanActive");
    }
};

const handleFocusOut = ({ target }) => {
    const span = target.nextElementSibling;
    if (span && target.value.trim() === '') {
        span.classList.remove("spanActive");
    }
};

// selectors
const listaInputs = document.querySelectorAll(".inputsVerificar");

// events
listaInputs.forEach((input) => {
    input.addEventListener("focus", handleFocusIn);
    input.addEventListener("blur", handleFocusOut);
});
