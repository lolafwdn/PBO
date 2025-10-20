class Employee {
  constructoe () {
    this.baseSalary
  }
  calculateSalary() {}
}

class FullTimeEmployee extends Employee {
        calculateSalery() {
    console.log(`gaji karyawan tetap adalah ${this.baseSalary}`);
  }
}

class PartTimeEmployee extends Employee {
  calculateSalary(totalHours) {
    this.baseSalary = 50000;
    this.totalSalary = this.baseSalary * totalHours;
    console.log(`Karyawan part-time adalah total jam kerja/bulan ${totalHours}, dengan gaji per jam ${this.baseSalary}, maka gaji bulan ini adalah ${this.totalSalary}`)
  }
}

const fullTime = new FullTimeEmployee();
fullTime.calculateSalary(); 

const partTime = new PartTimeEmployee();
partTime.calculateSalary(40)