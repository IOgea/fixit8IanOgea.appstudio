


btnAdd.onclick=function(){
  sum = parseInt(inptNum1.value) + parseInt(inptNum2.value)
  lblMath.value = `${userName} The sum of the two inputs is  ${sum}` 
}

btnMultiply.onclick=function(){
  lblMath.value = userName + " The product of the two inputs is " + inptNum1.value*inptNum2.value
}