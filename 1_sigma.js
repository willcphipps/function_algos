// given some number, print "adding up" to the console and add from 1 up to that numnber and return the sum
// Predcted output: sigma(5) should return 15   (I.E: 1+2+3+4+5 =15)

function sigma(num){
    var value = 0
    for(var i = 1; i <=num; i++){
        value = value + i;
    }    
    console.log("adding up");
    return value;
}
var sum = sigma(-10);
console.log(sum);

// sigma Test Cases:
// sigma(10)                                //Expected output: 55
// sigma(1)                                 //Expected output: 1
// sigma(0)                                 //Expected output: 0
// sigma(-10)                               //Expected output: 0