today = moment()
todayDate = today.format('dddd, MMMM Do YYYY')
var todayText = document.createTextNode(todayDate)
document.getElementById("currentDay").appendChild(todayText)
