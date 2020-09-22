window.addEventListener("load", e => {
    window.addEventListener("click", e => {
        if (e.target.id == 'suite') {
            e.target.parentElement.classList.add("masque");
            e.preventDefault();
        }
    });
});