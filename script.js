
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

// var timeSlot = [“”,“”,“”,“”,“”,“”,“”,“”,“”]
function loadData (){
    //grab timeslot data from local storage ‘get item’
    //loop thru timeSlot on screen
    //for each row on the screen check timeslot array for non empty string
    //set up eventTime, get the match < 9 ‘+=12’
    //calculate timeSlot index = to match - 9
    //if non empty string set textarea for row to string in the arrow pointed by index
    //
}
//function save data
function saveData (){
    console.log("hi");
    //event handled when you click save button
    //event time
    //convert to military time ‘+12’
    //set index = military time - 9
    //save incoming text in array
    //save array in local storage
}

$(".saveBtn").on("click", saveData);