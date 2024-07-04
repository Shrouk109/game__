let secretNumber=Math.trunc(Math.random()*20)+1;
// document.querySelector(".number").textContent=secretNumber;

let score=20;
let numScore=document.querySelector(".numScore").textContent;

document.querySelector(".check").addEventListener
('click',function(){
  let gessNumber=Number(document.querySelector("#num").value);
  if(!gessNumber){
    document.querySelector(".textChange").textContent=
    'No Number';
  }else if(gessNumber === secretNumber){
    document.querySelector(".number").textContent=secretNumber;
    document.querySelector('.textChange').textContent=
    'Correct Number';
    document.querySelector(".numHeighscore").textContent=score;
    document.body.style.backgroundColor="#60b347";
    document.querySelector("#num").style.backgroundColor="#60b347";
  }else if(gessNumber > secretNumber){
    if(score>1){
      document.querySelector('.textChange').textContent=
      'high number';
      --score;
      document.querySelector(".numScore").textContent=score;
    }else{
      document.querySelector(".numScore").textContent=0;
      document.querySelector('.textChange').textContent=
      'looser';
    }
    
  }else if(gessNumber < secretNumber){
    if(score>1){
      document.querySelector('.textChange').textContent=
      'low number';
      score--;
      document.querySelector(".numScore").textContent=score;
    }else{
      document.querySelector(".numScore").textContent=0;
      document.querySelector('.textChange').textContent=
      'looser looser looser';
    }
  }
  
});

document.querySelector(".again").addEventListener("click",function(){
  location.reload();
})