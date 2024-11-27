const urlparam=new URLSearchParams(window.location.search);
const Username=urlparam.get('username');
const namespan=document.querySelector(".coc");
namespan.textContent=Username;
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
let userchoice;
let computerscore=0;
let playerscore=0;


    rock.addEventListener("click",()=>
        {
         userchoice="rock";
           document.getElementById("loading").style.display="inline-block";
         setTimeout(()=>{
            document.getElementById("loading").style.display="none";
            game();

         },2000);
        });
        
        paper.addEventListener("click",()=>
        {
            userchoice="paper";
              document.getElementById("loading").style.display="inline-block";
         setTimeout(()=>{
            document.getElementById("loading").style.display="none";
            game();

         },2000);
        });
        
        scissor.addEventListener("click",()=>
        {
               userchoice="scissor"; 
                 document.getElementById("loading").style.display="inline-block";
         setTimeout(()=>{
            document.getElementById("loading").style.display="none";
            game();

         },2000);
        });
        
    
function computerchoice()
{
let arr=["rock","paper","scissor"];
let random=Math.floor(Math.random()*(3-0)+0);
let computerchoice=arr[random];
return computerchoice;
}
function game()
{   
    
    let cchoice=computerchoice();
    let result=(userchoice==="rock"&&cchoice==="rock")?"It is a Tie!":(userchoice==="rock"&&cchoice=="paper")?"Computer won! paper beat rock":(userchoice==="rock"&&cchoice==="scissor")?"player won! rock beats scissor":(userchoice==="paper"&&cchoice==="paper")?"It is a Tie!":(userchoice==="paper"&&cchoice==="scissor")?"Computer won! scissor beat paper":(userchoice==="paper"&&cchoice==="rock")?"player won! paper beats rock":(userchoice==="scissor"&&cchoice==="scissor")?"It is a Tie!":(userchoice==="scissor"&&cchoice==="rock")?"Computer won! rock beat scissor":(userchoice="scissor"&&cchoice==="paper")?"player won! paper beats rock":null;
    if(result==="Computer won! paper beat rock"||result==="Computer won! scissor beat paper"||result==="Computer won! rock beat scissor")
    {
        computerscore++;
        userchoice="";
        cchoice="";

    }
    else if(result==="player won! rock beats scissor"||result==="player won! paper beats rock"||result==="player won! scissor beats paper")
    {
        playerscore++;
        userchoice="";
        cchoice="";
    }
    console.log(result);
    console.log(playerscore);
    console.log(computerscore);
    
    
    const result1=document.querySelector(".result");
let p=document.querySelector("#one");
console.log(p);

let span1=result1.querySelector("#two");
let span2=result1.querySelector("#three");
p.textContent=result;
span1.textContent=playerscore;
span2.textContent=computerscore;
    
    
    
}






