console.log("party");

var today = moment().format("YYYY-MM-DDTHH:mm");
$("#currentDay").text(today);

var timeBlocks = document.getElementsByClassName("description");
console.log(timeBlocks);

var curTimeBlock = (moment().format("H"));
console.log(curTimeBlock);

curTimeBlock = curTimeBlock - 9;
console.log(curTimeBlock);

console.log(timeBlocks[0]);

for (var i = 0; i < timeBlocks.length; i++){
    console.log(timeBlocks[i].attributes[0]);
    if (i === curTimeBlock){
        timeBlocks[i].className += " present";
    }
    else if (i < curTimeBlock){
        timeBlocks[i].className += " past";
    }
    else{
        timeBlocks[i].className += " future";
    }
}