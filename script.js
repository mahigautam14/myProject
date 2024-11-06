console.log("Welcome to tic tac toe");
let music = new Audio("./media/music.mp3");
let audioturn = new Audio("./media/ting.mp3");
let gameOver = new Audio("./media/gameover.mp3");
let turn = "X";
let isGameOver = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";

}
//Function to check a win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxText [e[0]].innerText === boxText[e[1]].innerText) && (boxText [e[2]].innerText === boxText[e[1]].innerText) && (boxText [e[0]].innerText !== "")){
            document.querySelector('.info').innerText  = "Congratulations!!!!! "+boxText[e[0]].innerText + " is Won";
            isGameOver = true;
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = "200px";
            gameOver.play();
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', (e)=>{
        if(boxText.innerText == ''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!isGameOver)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
                music.play();
            }
            else{
                music.pause();
            }
        }
    })
})

//Add onclick listner to reset button

reset.addEventListener('click', ()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element =>{
        element.innerText = '';
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
        
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+turn;
    
})