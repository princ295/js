
let timer;
var sec= 0, min= 0, hour= 0

let start_btn= document.getElementById('start')
let stop_btn= document.getElementById('stop')

let reset_btn= document.getElementById('reset')

start_btn.addEventListener('click', function(){
    console.log('starT')
    timer= setInterval(TimerHandler,100)

    reset_btn.disabled= true
})

stop_btn.addEventListener('click',function(){
    timer= clearInterval(timer)

    reset_btn.disabled= false

})

reset_btn.addEventListener('click',function(){
    sec= 0, min= 0,hour= 0;
    timer= '00:00:00'

    reset_btn.disabled= true
})


function TimerHandler(){
    sec++;
    if(sec == 60){
        sec= 0
        min++
    }
    if(min == 60){
        min= 0
        hour++
    }
    DisplayTimer();
}
function DisplayTimer(){
    let timer_element= document.getElementById('timer')
    let ser_pretty= sec, min_pretty= min, hour_pretty= hour;
    if(sec < 10){
        ser_pretty= "0"+sec
    }
    if(min < 10){
        min_pretty= "0"+min
    }
    if(hour < 10){
        hour_pretty= "0"+hour
    }
    timer_element.innerHTML = hour_pretty+ " : "+ min_pretty+ " : "+ ser_pretty;
}
