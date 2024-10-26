const endDate = new Date('26 Oct 2024 18:23:00').getTime();
const startDate = new Date().getTime();


let time = setInterval(function updateTimer(){
    const now1 = new Date().getTime();

    const distanceCovered = now1 - startDate;
    const distancePanding = endDate - now1;


    const oneDayInMillis = (24*60*60*1000);
    const oneHoursInMillis = (60*60*1000);
    const oneMinsInMillis = (60*1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor((distancePanding)/(oneDayInMillis));
    const hours = Math.floor((distancePanding%(oneDayInMillis)/(oneHoursInMillis)));
    const minutes = Math.floor((distancePanding%(oneHoursInMillis)/(oneMinsInMillis)));
    const seconds = Math.floor((distancePanding%(oneMinsInMillis)/(oneSecondInMillis)));

    //link in UI 
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;
    //set width for progress bar;
    document.getElementById("progress-bar").style.width = percentageDistance + "%";


    if(distancePanding < 0){
        clearInterval(time);
        document.getElementById('countdown').innerHTML = "EXPIRED";
        document.getElementById('progress-bar').style.width = "100%";   
    }
},1000);