
// switch that changes the background color of the form 
swtchColor.onclick=function(){
  document.body.style.backgroundColor = "red";
  lblColor.value = "The color of the switch text was changed to red and the switch makes the background color red"
}


// slider that gives the value when it is changed 
sldrSize_input.onchange=function(){
    lblSldr.value = "The current value of the slider is " + sldrSize.getValue()
}
