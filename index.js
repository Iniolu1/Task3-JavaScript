let count = document.getElementById("counter");
let add = document.getElementById("nextBtn");
let sub = document.getElementById("prevBtn");

add.addEventListener('click', function(){
    if(count.innerHTML < 50){
        count.innerHTML = parseInt(count.innerHTML) + 1;
    } else{
        count.innerHTML = 50;
    }
    
})

sub.addEventListener('click', function(){
    if(count.innerHTML == 0){
        count.innerHTML = 0
    } else{
        count.innerHTML = parseInt(count.innerHTML) - 1;
    }
})
