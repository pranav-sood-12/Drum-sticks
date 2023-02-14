var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    
    // document.querySelectorAll(".drum")[i].addEventListener("click",function(){alert("i got clicked!")});
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
        {
            console.log(this)
           if(this.innerHTML == "W")
           {
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
           }
        }
    );


}





// var audio = new Audio("sounds/tom-1.mp3")
// audio.play()