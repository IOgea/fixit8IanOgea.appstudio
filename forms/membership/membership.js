
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnSubmitName.onclick=function(){
  if (members.includes(inptName.value) == True) {
  lblMember.value = "You are already a member"
}
else {
  lblMember.value = "You are not already a member, you have been added to the members"
  members.push(inptName.value)
}
}

console.log(members)