class Garage{

    constructor(vehicles, capacity){
        this.vehicles = vehicles;
        this.capacity = capacity;
    }

    constructor(capacity){
        this.capacity = capacity;
        vehicles = [];
    }
    constructor(){
        vehicles = [];
        capacity = 0;
    }

    add(vehicle){
        if (vehicle instanceof Vehicle){
            this.vehicles.push(vehicle);
            return "Vehicle added!";
        } else if(this.vehicles.length == capacity){
            return "Sorry, we're full";
        } 
        else{
            return "Only vehicles are allowed in here!"
        }
    }
}