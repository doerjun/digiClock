const clock=document.querySelector('#clock');
let time;
let backColor;
const changeTime=function(){
  const date=new Date().toLocaleTimeString();
  clock.innerHTML=date
  
}
//let time=setInterval(changeTime,1000)
function randomColor(){
  const hex=`01234567890ABCDE`;
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}
const backgroundColor=function(){
  const colors=randomColor();
  clock.style.backgroundColor=colors
}
function startTime(){
  if(!time){
    time=setInterval(changeTime,1000)
    backColor=setInterval(backgroundColor,10000)


  }
  //time=setInterval(changeTime,1000)
}




const stopTime=function(){
  clearInterval(time);
  time='';
  clearInterval(backColor);
  backColor=null;
}
document.querySelector('#start').addEventListener('click',startTime)

document.querySelector('#bnt').addEventListener('click',stopTime)
