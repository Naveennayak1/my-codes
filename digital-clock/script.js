var button=document.getElementById("button")

// function clicked(){
//     console.log("hello")
// }



// taking date 




function gettingDate(){

    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    
    var sec=date.getSeconds();


var h1hrs=document.getElementById("hrs").innerText=(hr);

var h1min=document.getElementById("mins").innerText=(min);
var h1sec=document.getElementById("sec").innerText=(sec);
// taking date done

}

setInterval(gettingDate, 1000);




var alermtext=document.getElementById("alert")

function clicked(){
  const selectElement = document.getElementById("morning");
  const selectedValue = selectElement.value;
  console.log(selectedValue);



  if(selectedValue>8 && selectedValue<12){
    console.log("hello");
     var back=document.getElementById("image");

     back.style.background="(url/assets/.png)";
 var lunchtext="its lunxh time";

 var alarmtext=document.getElementById("alert").innerText=(lunchtext);
 window.location.href = "alarm.html";

}
 else if(selectedValue>12 && selectedValue<16){

  var back=document.getElementById("image");

  back.style.background="(url/assets/clock_logo.png)";
var worktext="its working  time";

var alarmtext=document.getElementById("alert").innerText=(worktext);

 }


}
