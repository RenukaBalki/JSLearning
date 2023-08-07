class Vehicle {
  constructor(name, engine, color, company, wheeler) {
    this.vehicleName = name;
    this.vehicleEngine = engine;
    this.vehicleColor = color;
    this.vehicleCompany = company;
    this.vehicleTyre = wheeler;
  }
  show() {
    console.log(
      `Vehicle information ${this.vehicleName} ${this.vehicleEngine} ${this.vehicleColor} ${this.vehicleCompany} ${this.vehicleTyre}`
    );
  }
}
let vehicleInfo = new Vehicle("FZ", 220, "red", "Yamaha", 2);
let vehicleInfo1 = new Vehicle("FZ", 220, "black", "Yamaha", 2);
let vehicleInfo2 = new Vehicle("FZ", 220, "white", "Yamaha-model2", 2);
let vehicleInfo3 = new Vehicle("FZ", 220, "green", "Yamaha", 2);
let vehicleInfo4 = new Vehicle("FZ", 220, "yellow", "Yamaha", 2);

let arrayVehicle = [
  vehicleInfo,
  vehicleInfo1,
  vehicleInfo2,
  vehicleInfo3,
  vehicleInfo4,
];
console.log(`Traversing array`);
for (const vehicleInfo of arrayVehicle) {
  vehicleInfo.show();
}

