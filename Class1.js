//Creating object functions 

const car = {
    name : "Tesla", 
    model : "M32",
    Year: 2025,

    //Creating functions inside an object 
    move : function(){
        return console.log(this.name +" is moving.");
    }

}

car.move(); 
