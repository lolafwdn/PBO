class Employee {
  constructor() {
    this.salary = 0;
  }

  calculateBonus() {
    console.log();
  }
}
class KaryawanTetap extends Employee {
  constructor() {
    super();
    this.salary = 8000000; 
  }

  calculateBonus() {
    this.bonus = this.salary * 0.10; 
    console.log(`Budi (karyawan tetap, gaji ${this.salary}) dengan bonus ${this.bonus}`);
  }
}

class KaryawanKontrak extends Employee {
  constructor() {
    super();
    this.salary = 6000000; 
  }

  calculateBonus() {
    this.bonus = this.salary * 0.05; 
    console.log(`Sita (karyawan kontrak, gaji ${this.salary}) dengan bonus ${this.bonus}`);
  }
}

const budi = new KaryawanTetap();
budi.calculateBonus();

const sita = new KaryawanKontrak();
sita.calculateBonus();