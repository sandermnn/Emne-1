

function updateview() {
    document.getElementById('app').innerHTML = `
        <p>Once, there was a ${chosenAdjective[0] || "____"} ${chosenAdjective[1] || "____"} that ${chosenAdjective[2] || "____"} in the ${chosenAdjective[3] || "____"} -and great things happened. The End.</p> 
            <button onclick="pickedAdjective(this)">${adjektiv1}</button>
            <button onclick="pickedAdjective(this)">${adjektiv2}</button>
            <button onclick="pickedAdjective(this)">${adjektiv3}</button>
            <button onclick="pickedAdjective(this)">${adjektiv4}</button>
            <button onclick="pickedAdjective(this)">${adjektiv5}</button>
            <button onclick="pickedAdjective(this)">${adjektiv6}</button>
            <button onclick="pickedAdjective(this)">${adjektiv7}</button>
            <button onclick="pickedAdjective(this)">${adjektiv8}</button>

    `;


}