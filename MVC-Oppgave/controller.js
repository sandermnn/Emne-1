function pickedAdjective(index) {
    let valgteAdjetiv = adjektiver[index];


    document.getElementById('pickedAdjective').innerHTML = `Du valgte ${valgteAdjetiv}`;

    chosenAdjective.push(valgteAdjetiv);



    updateview();




}