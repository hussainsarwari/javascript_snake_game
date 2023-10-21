//  this game created by mohammad hussain in october, 27 ,2022


// debugger
// variables
let snake=document.querySelector("#snake");
let seed=document.querySelector("#seed");
let highscore=document.querySelector("#high_score");
let score=document.querySelector("#score");
let play_btn=document.querySelector("#play");
let massage=document.querySelector("#massage");
let left_clicked=true;
let right_clicked=true;
let up_clicked=true;
let down_clicked=true;
let direction;
let stop1,stop2,stop3,stop4;
// random number
let ran_x=1160*Math.random();
// let ran_x=1
let ran_y=480*Math.random();
// let ran_y=0


console.log('ranx:'+ran_x);
console.log('rany'+ran_y);
// call  functions


play_btn.addEventListener("click",()=>{

   play_btn.style.display="none";

})


// move the snake 
let x=190,y=110;

document.onkeydown=function (e){
if(e.keyCode==37 && left_clicked){//left
   // debugger
      stop1=setInterval(()=>{
         x-=1;
         console.log('x:'+x)
            snake.style.left=x+"px";
        if ((x==parseInt(ran_x) ||parseInt(ran_x)<=186 ) &&  (y==parseInt(ran_y) ||parseInt(ran_y)<=103 )) {
         if((parseInt(ran_x)<=186) && (x==183)){
            alert(12)
         }
         else if(parseInt(ran_x)>=186){
alert(7777)
         }
        } 
        
         if(x==183){
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
      y-=1;
      snake.style.top=y+"px";
      console.log("y:"+(y-99));
   //    if (y==parseInt(ran_y) ||parseInt(ran_y)<=103 ) {
   //       if((parseInt(ran_y)<=103) && (y==103)){
   //          alert(6666666666612)
   //       }
   //       else if(parseInt(ran_y)>=103){
   // alert(777777777777778898777)
   //       }
   //      }    
//lose game
      if(y==99){
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
      x+=1;
      console.log('x:'+x);
      snake.style.left=x+"px";
      if (x==parseInt(ran_x) ||parseInt(ran_x)<=186 ) {
         if((parseInt(ran_x)<=186) && (x==183)){
            alert(12)
         }
         else if(parseInt(ran_x)>=186){
alert(7777)
         }
        } 
        
      if(x==1163){
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
   y+=1;
   snake.style.top=y+"px";
   console.log("y:"+(y-99));
 
   if (y==parseInt(ran_y) ||parseInt(ran_y)<=103 ) {
      if((parseInt(ran_y)<=103) && (y==103)){
         alert(6666666666612)
      }
      else if(parseInt(ran_y)>=103){
alert(777777777777778898777)
      }
     } 
   if(y==480){
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
  seed.style.left=ran_x+"px";
  seed.style.top=ran_y+"px";
  if(parseInt(seed.style.left)<=186){
   seed.style.left=185+"px";

  }
  if(parseInt(seed.style.top)<110){
   seed.style.top=103+"px";
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