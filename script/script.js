var x = document.getElementById('mail');

function request() {
    let p = x.value;
    var n = p.indexOf("@");
    console.log(n);
    if (p == 0 || n == -1) {
        alert('Erreur, Rentrer votre adresse email ou completer avec des caractères spéciaux (\"@\").')
    } else {
        alert('Merci pour votre inscription, on se retrouve bientôt pour de nouvelle découverte musical !');

    }

}



window.addEventListener("load", e => {
    window.addEventListener("click", e => {
        if (e.target.id == 'suite') {
            console.log(e);
            e.target.parentElement.classList.add("masque");
            e.preventDefault();
        }
    });
});