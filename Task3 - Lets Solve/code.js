function calculate_and_display()
{
    var n = Number(document.getElementById("n").value);
    var m = Number(document.getElementById("m").value);
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var d = Number(document.getElementById("d").value);
    if(m>n){
        floor_difference = m-n;
    }else{
        floor_difference = n-m;
    }

    pure_walking = d*n;
    pure_elevator = (floor_difference*a)+b+c+(n*a)+b;
    elevator_and_walking = (floor_difference*d)+b+c+(m*a)+b;
    
    if(pure_walking<=pure_elevator && pure_walking<=elevator_and_walking){
        document.getElementById("Result").innerHTML = "Shortest Distance is :"+pure_walking
    }else if(pure_elevator<=pure_walking && pure_elevator<=elevator_and_walking){
        document.getElementById("Result").innerHTML = "Shortest Distance is :"+pure_elevator
    }else{
        document.getElementById("Result").innerHTML = "Shortest Distance is :"+elevator_and_walking
    }
}