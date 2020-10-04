// array of members 
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

// button that checks if the input name is already in the array, adds them if they aren't
btnSubmitName.onclick=function(){
  if (members.includes(inptName.value) == True) {
  lblMember.value = "You are already a member"
}
else {
  lblMember.value = "You are not already a member, you have been added to the members"
  members.push(inptName.value)
}
}

//button to change to the calculator form so the input name can be used on that form 
btnToCalc.onclick=function(){
  ChangeForm(calculator)
}
