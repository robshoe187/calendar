today = moment()
todayDate = today.format('dddd, MMMM Do YYYY')
todayTime = today.format('H')
var todayText = document.createTextNode(todayDate)
document.getElementById("currentDay").appendChild(todayText)

var nineFive = ['9','10','11','12','1','2','3','4','5']
var nineFiveTwentyFour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (var i = 0; i < 9; i++) {
        document.getElementById("timeBlock").innerHTML += `<div class="row" id = "row ${i}" >
            <div class="col-2 hour"> ${nineFive[i]} </div>
            <div class="col-8"><textarea id = "text${i}"></textarea></div>
            <div class="col-2 saveBtn"> <button type="button " id = "button${i}"<img src = "save.svg" alt="Save Icon"/>Save</button>
            </div>
        </div>`
    
        if (nineFiveTwentyFour[i] < todayTime) {
            document.getElementById(`row ${i}`).classList.add("past")
        } else if (nineFiveTwentyFour[i] == todayTime) {
            document.getElementById(`row ${i}`).classList.add("present")
        } else if (nineFiveTwentyFour[i] > todayTime) {
            document.getElementById(`row ${i}`).classList.add("future")
        }
    
    }
for (let i = 0; i < 9; i++) {
    document.getElementById(`text${i}`).innerHTML = localStorage.getItem(`save${i}`)
    
}

document.getElementById("button0").addEventListener("click", function(){
    var textGrab0 = document.getElementById("text0").value;
    localStorage.setItem("save0", textGrab0)
})
document.getElementById("button1").addEventListener("click", function(){
    var textGrab1 = document.getElementById("text1").value;
    localStorage.setItem("save1", textGrab1)
})
document.getElementById("button2").addEventListener("click", function(){
    var textGrab2 = document.getElementById("text2").value;
    localStorage.setItem("save2", textGrab2)
})
document.getElementById("button3").addEventListener("click", function(){
    var textGrab3 = document.getElementById("text3").value;
    localStorage.setItem("save3", textGrab3)
})
document.getElementById("button4").addEventListener("click", function(){
    var textGrab4 = document.getElementById("text4").value;
    localStorage.setItem("save4", textGrab4)
})
document.getElementById("button5").addEventListener("click", function(){
    var textGrab5 = document.getElementById("text5").value;
    localStorage.setItem("save5", textGrab5)
})
document.getElementById("button6").addEventListener("click", function(){
    var textGrab6 = document.getElementById("text6").value;
    localStorage.setItem("save6", textGrab6)
})
document.getElementById("button7").addEventListener("click", function(){
    var textGrab7 = document.getElementById("text7").value;
    localStorage.setItem("save7", textGrab7)
})
document.getElementById("button8").addEventListener("click", function(){
    var textGrab8 = document.getElementById("text8").value;
    localStorage.setItem("save8", textGrab8)
})