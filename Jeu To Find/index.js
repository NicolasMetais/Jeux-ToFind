var number;
var toFind;
var compteur = 0;

pick();

function pick(){
    toFind = Math.floor(Math.random()*1000);
}
console.log(toFind);
number = parseInt(prompt("Rentre un nombre entre 1 et 1000"));

do{
    if (number > toFind){
        number = parseInt(prompt("Trop grand, réessaye: Rentre un nombre entre 1 et 1000"));
        compteur++;
        console.log(number);
    } else if (number < toFind) {
        number = parseInt(prompt("Trop petit, réessaye: Rentre un nombre entre 1 et 1000"));
        compteur++;
        console.log(number);
    }
}while (number === toFind)




if (number === toFind) {
   alert("Bien joué le nombre étais bien: " + toFind + " ! Tu as réussi en: " + compteur + "essais");
}
