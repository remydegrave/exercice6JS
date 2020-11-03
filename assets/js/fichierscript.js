document.getElementById('button_valider').onclick =showAlert;

function showAlert(){
    var sizeFoot = document.getElementById('sizeFoot').Value;
    var birthdayYear = document.getElementById ('birthdayYear').Value;
    var result =(((((pointure*2)+5)*50)-naissance)+1769);

alert('Resultat :' + result)
}