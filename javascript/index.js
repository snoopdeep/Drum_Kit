//document.querySelector("button").addEventListener("click",function (){alert("I got clicked");});
// function sayHi(){
//     alert("Hi");
// }
// document.querySelectorAll("button")[0].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[1].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[2].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[3].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[4].addEventListener("click", function (){alert("I got clicked");});
// var audio=new audio('audio1.mp3');
// audio.play();

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // 
      // this.style.color="White";
      switch(this.innerHTML)
      {
        case 'W': var audio = new Audio("sounds/tom-1.mp3");
                     audio.play();
                     break;
        case 'A': var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
        case 'S': var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
        case 'D': var audio=new Audio("sounds/tom-4.mp3");
                   audio.play();
                   break;  
        case 'J': var audio=new Audio("sounds/kick-bass.mp3");
                   audio.play();
                   break;         
        case 'K': var audio=new Audio("sounds/crash.mp3");
                   audio.play();
                   break;         
        case 'L': var audio=new Audio("sounds/snare.mp3");
                   audio.play();
                   break;                                

      }
    });

}
// 