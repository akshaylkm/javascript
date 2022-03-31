let laptop ={
    cpu: "i9",
    ram:"5gb",

    greet: function(){
        console.log(this.cpu);
    }
}

laptop.greet();