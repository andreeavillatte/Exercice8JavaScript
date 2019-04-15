function verifyAge() {
    // recuperer les variables
    var age = document.querySelector('#age').value;
    // on a verifié en premier que l'age était introduites, après que la saisie est une chiffre
    if (age && !isNaN(age)) {
        if (age >= 18) {
            alert("Vous êtes majeur");
        } 
        else {
            alert("Vous êtes mineur");
        }
    }
}

document.getElementById('submit').onclick = function(){verifyAge()}