function getAge() {
    if (isNaN(age.value) || isNaN(age.value)){
        alert("Merci de n'entrer que des ciffres...");
    } else{
        if (age.value >= 18) {
            alert ("Vous êtes majeur");
        } else {
            alert ("Vous êtes mineur");
        }
    }
}
