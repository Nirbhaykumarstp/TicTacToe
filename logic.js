let playerInfo = [
    { p1Name: "", isTurn: false, wins: 0 },
    { p2Name: "", isTurn: false, wins: 0 }
]


function gameStart() {
    const plyr1Name = prompt("Enter the Player1 Name")
    const plyr2Name = prompt("Enter the Player2 Name")

    playerInfo[0].p1Name = plyr1Name
    playerInfo[0].isTurn = true
    playerInfo[1].p2Name = plyr2Name

    console.log(plyr1Name, plyr2Name)

    document.getElementById("plyr-1-name").innerText = playerInfo[0].p1Name
    document.getElementById("plyr-2-name").innerText = playerInfo[1].p2Name
    let buttons = document.querySelectorAll(".btn")
    console.log(buttons)

    buttons.forEach((b) => {
        b.addEventListener("click", () => {
            if(playerInfo[0].isTurn)
            {
                b.innerText = "X"
                playerInfo[0].isTurn = false
                playerInfo[1].isTurn = true
            }
            else{
                b.innerText = "O"
                playerInfo[0].isTurn = true
                playerInfo[1].isTurn = false
            }
        })
    })
    document.getElementById("turn").innerText = playerInfo[0].p1Name


}