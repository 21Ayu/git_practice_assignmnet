let a=7;
let count =0;
for(let i=1;i<a;i++){
    if(a%i==0){
        count++
    }
}
if(count===1){
    console.log("Prime number");
}
else{
    console.log("Not a prime number");
}
