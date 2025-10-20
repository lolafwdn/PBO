class Vehicle {
  move() {
    console.log("Kendaraan bergerak");
  }
}

class Car extends Vehicle {
  // overriding
  move() {
    console.log("Mobil berjalan di jalan raya");
  }
}

class Boat extends Vehicle {
  // overriding
  move() {
    console.log("Kapal berlayar di laut");
  }
}

// Membuat objek dari masing-masing class
const vehicle = new Vehicle();
vehicle.move(); // Output: Kendaraan bergerak

const car = new Car();
car.move(); // Output: Mobil berjalan di jalan raya

const boat = new Boat();
boat.move(); // Output: Kapal berlayar di laut
