//  this game created by mohammad hussain in october, 27 ,2022


// debugger
// variables
let snake=document.querySelector("#snake");
let seed=document.querySelector("#seed");
let highscore=document.querySelector("#high_score");
let score=document.querySelector("#score");
let play_btn=document.querySelector("#play");
let massage=document.querySelector("#massage");
let x=0,y=0;
let left_clicked=true;
let right_clicked=true;
let up_clicked=true;
let down_clicked=true;
let direction;
let stop1,stop2,stop3,stop4;
// random number
let ran1=1160*Math.random();
let ran2=480*Math.random();



// call  functions


play_btn.addEventListener("click",()=>{

   play_btn.style.display="none";

})


// move the snake 
let g=190,h=110;

document.onkeydown=function (e){
if(e.keyCode==37 && left_clicked){//left
   // debugger
      stop1=setInterval(()=>{
         g-=2;
            snake.style.left=g+"px";
         
        
         if(g==183){
            alert("you losed");
      }
         },7)
         clearInterval(stop2);
         clearInterval(stop3);
         clearInterval(stop4);
         direction="right_left"
         set_direction();  
         left_clicked=false
right_clicked=true;
up_clicked=true;
down_clicked=true;
   

}

else if(e.keyCode==38 && up_clicked)
{

  stop2= setInterval(()=>{//top
      h-=1;
      snake.style.top=h+"px";
    
//lose game
      if(h==99){
      alert("you losed");
      }
     
      },7)
      clearInterval(stop1);
      clearInterval(stop3);
      clearInterval(stop4);
      direction="top_down";
      set_direction();
      up_clicked=false;
       left_clicked=true;
 right_clicked=true;
down_clicked=true;

}
if(e.keyCode==39 && right_clicked){
  stop3= setInterval(()=>{//right
      g+=1;
      snake.style.left=g+"px";
      if(g==1163){
         alert("you losed");
         }
      },7)
      clearInterval(stop1);
      clearInterval(stop2);
      clearInterval(stop4);
      direction="right_left"
      set_direction();
      right_clicked=false
      down_clicked=true

 left_clicked=true;
 up_clicked=true;
}else if(e.keyCode==40 && down_clicked){//down
stop4=setInterval(() => {
   h+=1;
   snake.style.top=h+"px";
   if(h==480){
      alert("you losed");
      }
}, 7);    
clearInterval(stop1);
clearInterval(stop2);
clearInterval(stop3);
direction="top_down";
set_direction();
down_clicked=false

 left_clicked=true;
 right_clicked=true;
 up_clicked=true;

}
}   





seed_possion();

increase_snake();




// function
let newElement;
let d=20;
function increase_snake(){
  
}
function set_direction(){
if (direction=="right_left"){
   snake.style.transform="rotate(0deg)";
}else if(direction=="top_down"){
   snake.style.transform="rotate(90deg)";
}
}

function seed_possion(){
  seed.style.left=ran1+"px";
  seed.style.top=ran2+"px";
  if(parseInt(seed.style.left)<=190){
   seed.style.left=240+"px";

  }
  if(parseInt(seed.style.top)<110){
   seed.style.top=150+"px";
  }

}
// increase score
let no=0;
setInterval(() => {                  

   if((parseInt(snake.style.left)>=(parseInt(seed.style.left)-20) && parseInt(snake.style.left)<=(parseInt(seed.style.left)+20)))
   {
   if((parseInt(snake.style.top)>=(parseInt(seed.style.top)-20) && parseInt(snake.style.top)<=(parseInt(seed.style.top)+20))){

   }}
      
}, 1);


// save score
score=0;

function save_score(){


} 