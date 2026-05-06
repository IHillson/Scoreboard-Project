let fighters = ["☠️", "🦅", "🦉", "🦇", "🐗", "🐴", "🫎", "🦂", "🕷️", "🐘", "🐫", "🦬", "🐲", "🐉", "🐋"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let fighter1 = Math.floor( Math.random() * fighters.length )
    let fighter2 = Math.floor( Math.random() * fighters.length )
    stageEl.textContent = fighters[fighter1] + " vs " + fighters[fighter2]
})


//☠️🦅🦉🦇🐗🐴🫎🦂🕷️🐘🐫🦬🐲🐉🐋