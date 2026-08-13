let playerInfo = 
[
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
            let countforClick=0
            buttons.forEach((b) => {
                b.addEventListener("click", () => {
                    countforClick++
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
                    checkWinner(countforClick)
                })
            })

            let checkWinner=(noofClicks)=>{
                let winCondition=[
                    [0,1,2],    //0
                    [3,4,5],    //1
                    [6,7,8],    //2
                    [0,3,6],    //3
                    [1,4,7],    //4
                    [2,5,8],    //5
                    [0,4,8],    //6
                    [2,4,6]     //7
                ]
                for(let condition of winCondition)
                {
                    console.log(condition)
                    let button1=buttons[condition[0]].innerText
                    let button2=buttons[condition[1]].innerText
                    let button3=buttons[condition[2]].innerText
                    console.log("button1",button1)
                    console.log("button2",button2)
                    console.log("button3",button3)
                    if(button1=="X" && button2=="X" && button3=="X")
                    {
                        console.log("player1 winner")
                        document.getElementById("winner-name").innerText=playerInfo[0].p1Name
                        playerInfo[0].wins+=1
                        document.getElementById("p1-score").innerText=playerInfo[0].wins
                        buttons.forEach((b)=>{
                            b.disabled=true
                        })
                        document.getElementById("winner-declare").style.display="block"
                    }
                    else if(button1=="O" && button2=="O" && button3=="O")
                    {
                        console.log("player2 winner")
                        document.getElementById("winner-name").innerText=playerInfo[1].p2Name
                        playerInfo[1].wins+=1
                        document.getElementById("p2-score").innerText=playerInfo[1].wins
                        buttons.forEach((b)=>{
                            b.disabled=true
                        })
                        document.getElementById("winner-declare").style.display="block"
                    }
                    else if(!(button1=="" && button2=="" && button3=="") && (noofClicks-1==winCondition.length))
                    {
                        console.log("draw")
                    }
                }
                
            }
        }
        else{
            alert("Please Enter a appropriate Name")
        }
    }

}