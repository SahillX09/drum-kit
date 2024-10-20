var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
      
    })
}

document.addEventListener("keypress", function(event){
makeSound(event.key);

buttonAnimation(event.key);

});

function makeSound(key){
    switch (key) {

        case"w":
          var crash = new Audio("sounds/crash.mp3");
          crash.play(); // To play the audio
        break;

        case"a":
          var kickbass = new Audio("sounds/kick-bass.mp3");
          kickbass.play(); // To play the audio
        break;
        
        case"s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play(); // To play the audio
        break;

        case"d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play(); // To play the audio
        break;

        case"j":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play(); // To play the audio
        break;

        case"k":
           var tom3= new Audio("sounds/tom-3.mp3");
           tom3.play(); // To play the audio
        break;

        case"l":
          var kickbass  = new Audio("sounds/kick-bass.mp3");
          kickbass.play(); // To play the audio
        break;

        default: console.log(buttonInnerHTML);
       
        }

}


function buttonAnimation(currentkey){
  
    var activeButton=document.querySelector("."+ currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
     
        activeButton.classList.remove("pressed");
    },100);
}
