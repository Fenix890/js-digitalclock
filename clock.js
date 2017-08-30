//This function will keep running as long as the browser is open
setInterval(function () {
    //Create object
    var currentTime = new Date();
    
    //Create other variables
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = "AM";
    
    //Figure out if AM or PM
    if (hours >= 12) {
        period = "PM";
    }
    
    //Display the time problems
    if (hours > 12) {
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    //Format time display
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
    
    //Display the time
    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
    
}, 1000);