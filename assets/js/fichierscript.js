
document.getElementById('clickButton').onclick = showAlert; // appel de fonction au clic sur l'ID clickbutton
function showAlert() { // prend les valeurs et calcul le resultat
    var shoeSize = document.getElementById('shoeSize').value; // declare variable shoeSize
    var birth = document.getElementById('birth').value; // declare variable birth
    var result = ((shoeSize * 2 + 5) * 50 - birth + 1769); // declare variable calcul

    var result2 = shoeSize * 2; 
        result2 = result2 + 5;
        result2 = result2 * 50;
        result2 = result2 - birth;
        result2 = result2 + 1769;

    var result3 = shoeSize * 2;
        result3 += 5;
        result3 *= 50;
        result3 -= birth;
        result3 += 1769;

    alert('Result :' + result);
}