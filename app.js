let btns=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg"); 

let turn0 =true;
const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(turn0){
            btn.innerText ="O";
            turn0=false;
        }else{
            btn.innerText="X";
            turn0=true;
        }
        btn.disabled=true;
        checkwinner();
    });
});
let count=0;
const checkwinner=()=>{
    
    for( let pattern of winPattern){
        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;
         
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1== pos2 && pos2==pos3){
                console.log("WINNER", pos1);
                showWinner(pos1);
                count=0;
            }
            else{       
                count++;      
            }    
        } 
    }
    console.log(count);
    if(count>=19){
        console.log("DRAW");
        draw();
        count=0;
    }
}

const disablebtns=()=>{
    for( let btn of btns){
        btn.disabled=true;
    }
}
const enablebtns=()=>{
    for( let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
}
const draw=()=>{
    msg.innerText="GAME DRAW";
    msgContainer.classList.remove("hide");
    disablebtns();
}

const showWinner=(winner)=>{
    msg.innerText= "Winner is "+winner;
    msgContainer.classList.remove("hide");
    disablebtns();
}

const resetGame=()=>{
    turn0=true;
    enablebtns();
    msgContainer.classList.add("hide");
    count=0;
    };

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);