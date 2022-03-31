//  let laptop = {
//     cpu:"i7",
//     ram:"4GB",

//     greet: function(){
//         console.log(this.cpu);
//     }
// }
// laptop.greet();
 
let laptop1 = {
    cpu:"i7",
    ram:"8gb",

    greet: function(){
        console.log(this.cpu);
    }
}
let laptop2 = {
    cpu:"i9",
    ram:"4gb",

    greet: function(){
        console.log(this.cpu);
    }
}

if(laptop1.cpu >= laptop2.cpu){
    console.log(laptop1);
}
else{
    console.log(laptop2);
}
  
