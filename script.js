let userSequence=[];
let gameSequence=[];
let score=[];
let start=null;
let level=0;
let h2=document.querySelector("h2");
let div1=document.querySelector("#div1");
let div2=document.querySelector("#div2");
let div3=document.querySelector("#div3");
let div4=document.querySelector("#div4");
let currDiv=null;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(start==null){
        alert("Your game has been started.");
        start=1;
        levelUp();
    }
    else{
        alert("Your game is already started.");
    }
})

function flashing(btn){
    let color=btn.style.backgroundColor;
    btn.style.backgroundColor="white";
    setTimeout( function () {
        btn.style.backgroundColor=color;
    },300);
}

function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomDiv=Math.floor(Math.random()*4+1);
    currDiv=('div'+randomDiv);
    gameSequence.push(currDiv);
    console.log("Game seq= ",gameSequence);
        if(randomDiv==1){
            flashing(div1);
            // currDiv=div1;
        }

        else if(randomDiv==2){
            flashing(div2);
            // currDiv=div2;

        }

        else if(randomDiv==3){
            flashing(div3);
            // currDiv=div3;

        }
        else if(randomDiv==4){
            flashing(div4);
            // currDiv=div4;

        }
}

function btnPressed(){
    // console.log("Button was pressed.");
    userSequence.push(this.id);//parent buttom div that is in 75 line.this=btn
    // userSequence=[];
    console.log("user seq= ",userSequence);
    checkSequence(userSequence.length-1);

}

let allBtns=document.querySelectorAll(".div-btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed)
}


function checkSequence(idx){
        if(userSequence[idx]===gameSequence[idx]){
            if(userSequence.length==gameSequence.length){
                setTimeout(levelUp,500);
            }
        }
        else{
            score.push(level-1);
            h2.innerHTML=`Game Over! Your Score was ${level-1} <br>Press any key to restart`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){

            document.querySelector("body").style.backgroundColor="bisque";

            },1000)
            h3.innerText=`Highest Score :- ${highestScore()}`;
            reset();
        }
    
}

function reset(){
 userSequence=[];
 gameSequence=[];
 start=null;
 level=0;
}
let highest=-1;
function highestScore(){
    for(let i in score){
        if(highest<score[i]){
            highest=score[i];
        }
    }
    return highest;
}