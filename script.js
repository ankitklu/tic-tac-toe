let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let msg= document.querySelector("#msg");
let message= document.querySelector(".message");
let newGame= document.querySelector("#new-game");

let turn0 =true;

reset.addEventListener("click",()=>{
    console.log("Clicked");
})

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button is clicked");
        if(turn0){
            box.innerText="O";
            turn0 = false;
        }
        else{
            box.innerText= "X";
            turn0 = true;
        }
        box.disabled= true;
        checkWinner();
    });
});

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    message.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(val)=>{
    message.classList.remove("hide");
    msg.innerText=`Winner is: ${val}`;
    disableBoxes();
}

const checkWinner =()=>{
    for(let patterns of winPatterns){
        let pos1val= boxes[patterns[0]].innerText;
        let pos2val= boxes[patterns[1]].innerText;
        let pos3val= boxes[patterns[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val==pos3val){
                console.log("Winner");
                showWinner(pos1val);
            }
        }
    }

}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);