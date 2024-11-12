var start = new Date();

function stopTime(){
  var stop = new Date();
  var diff = stop.getTime()-start.getTime();
  diff/=600;
  alert("You have been on this page for " + diff + " seconds");
}
