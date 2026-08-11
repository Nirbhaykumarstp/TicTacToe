let playerInfo = [
    { p1Name: "", isTurn: false, wins: 0 },
    { p2Name: "", isTurn: false, wins: 0 }
]


function gameStart() 
{
    const plyr1Name = prompt("Enter the Player1 Name")
    const plyr2Name = prompt("Enter the Player2 Name")
    if(!(plyr1Name===null || plyr2Name===null))
    {
        if(!(plyr1Name=="" || plyr2Name==""))
        {
            document.getElementById("Start").style.display="none"
            document.getElementById("resetbtn").style.display="block"
            playerInfo[0].p1Name = plyr1Name
            playerInfo[0].isTurn = true
            playerInfo[1].p2Name = plyr2Name

            console.log(plyr1Name, plyr2Name)

            document.getElementById("plyr-1-name").innerText = playerInfo[0].p1Name
            document.getElementById("plyr-2-name").innerText = playerInfo[1].p2Name
            let buttons = document.querySelectorAll(".btn")
            console.log(buttons)
            document.getElementById("turn").innerText = playerInfo[0].p1Name
            buttons.forEach((b) => {
                b.addEventListener("click", () => {
                    if(playerInfo[0].isTurn)
                    {
                        b.innerText = "X"
                        document.getElementById("turn").innerText = playerInfo[1].p2Name
                        playerInfo[0].isTurn = false
                        playerInfo[1].isTurn = true
                    }
                    else{
                        b.innerText = "O"
                        document.getElementById("turn").innerText = playerInfo[0].p1Name
                        playerInfo[0].isTurn = true
                        playerInfo[1].isTurn = false
                    }
                    b.disabled=true
                })
            })
        }
        else{
            alert("Please Enter a appropriate Name")
        }
    }

}