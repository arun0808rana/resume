const websiteInput = document.querySelector('.website');
websiteInput.style.width = '336px';

enableInputsAutoExpansion();















// function definitions
function enableInputsAutoExpansion() {
    const allInputs = Array.from(document.querySelectorAll('input'));
    allInputs.forEach(input => {
        input.addEventListener('input', resizeInput);
    })

    function resizeInput(e) {
        if (e.target.value.length < 6) {
            e.target.style.width = '100px';
        } else {
            e.target.style.width = (e.target.value.length) + "ch";
        }
    }
}