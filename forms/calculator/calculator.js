

// button to add two numbers together 
btnAdd.onclick=function(){
  sum = parseInt(inptNum1.value) + parseInt(inptNum2.value)
  lblMath.value = `${inptName.value} The sum of the two inputs is  ${sum}` 
}

//button to multiply the two numbers together
btnMultiply.onclick=function(){
  lblMath.value = inptName.value + " The product of the two inputs is " + inptNum1.value*inptNum2.value
  
}