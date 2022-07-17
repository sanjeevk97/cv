let timer = document.getElementById("timer");

let btn = document.getElementById("button");

let input = document.querySelector("input");


// let x = 0 ;
// let interval = setInterval(() =>{
   
//     if(x == 5) 
//      clearInterval(interval);

//      x++;
//      console.log("hello") ;
// } , 1000);

let x ; // global input value 
let interval ;


btn.addEventListener("click" , calback) ;

//event listner callback
function calback (){

    x = input.value;

   timer.textContent = x ;
   console.log(x);

  
   interval = setInterval(cb , 1000);
}

//setInterval callback
function cb(){
   
   if(x > 0)
    x--;
   else 
    x++;
  
   if(x == 0 ){
      clearInterval(interval) ;
   }
   
   console.log(x);
   timer.textContent = x ;

  
}
