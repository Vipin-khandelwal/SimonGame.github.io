var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var started=false;
var level=0

$(document).keypress(function () {
      if (!started) {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
      }
});


function checkAnswer(currentLevel) {
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("success");

            if (userClickedPattern.length === gamePattern.length) {
                  setTimeout(function () {
                        nextSequence();
                  }, 1000);
            }
      } else {
            wrong.play();
            $("body").addClass("game-over");

            setTimeout(function () {
                  $("body").removeClass("game-over");
            }, 200);
            $("h1").html("Game Over. Press Any Key to");
            console.log("wrong");
      }
}



$(".btn").click(function(){
      var userChosenColour= $(this).attr("id");            // attribute pass kane me
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      animatepress(userChosenColour);
})

function nextSequence(){
      userClickedPattern = [];
      level++;
      $("#level-title").text("Level " + level);
      var randomNumber=Math.floor(Math.random()*4);         // 0 to 3 random Number ke liye
      var randomChosenColour=buttonColours[randomNumber];   //  random Color ke liye
      gamePattern.push(randomChosenColour);                 // push = array me value set karne me
      $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColour);                        // playSound function ko call kiya
};

function playSound(name){                                   // playSound function
            var audio = new Audio("sounds/"+name+".mp3");   // name = userChosenColour
      audio.play();
      }

function animatepress(currentColor){                        // animation add karne me
      $("#"+currentColor).addClass("pressed");
      setTimeout(function(){
            $("#"+currentColor).removeClass("pressed");     // animation ko limited time bad remove karne me
      },100)

$("html").keypress(nextSequence())

}


