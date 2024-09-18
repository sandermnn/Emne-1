

function updateview() {
    let html = `
    <p>Once, there was a ${chosenAdjective[0] || "____"} ${chosenAdjective[1] || "____"} that ${chosenAdjective[2] || "____"} in the ${chosenAdjective[3] || "____"} - and great things happend.The End.<p>
    <div id="buttons">
     ${createButtons()}
     </div>
     <div id="pickedAdjective"></div>

    `;
    document.getElementById('app').innerHTML = html;

}
function createButtons() {
    return adjektiver.map((adjektiv, index) => {
        return `<button onclick="pickedAdjective(${index})">${adjektiv}</button>`;
    }).join('');

}
