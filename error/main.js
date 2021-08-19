


function blinker(element, duration)
{
       element.style.opacity = 0;
       setTimeout(function(){  element.style.opacity = 1;}, duration);  
}

setInterval(function(){ blinker(document.getElementById("exclamation-triangle"), 500) }, 1000);