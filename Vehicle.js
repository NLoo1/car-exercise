class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep";
    }
    
    toString(){
        return "Make: " + make + "\n" + "Model: " + model + "\n" + "Year: " + this.year;
    }


}