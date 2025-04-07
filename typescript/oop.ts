type modifyEmployeeInformationType = {
  name: string;
  age: number;
  job: string;
};

class Employee {
  employeeName: string;
  employeeAge: number;
  employeeJob: string;

  constructor(name: string, age: number, job: string) {
    this.employeeName = name;
    this.employeeAge = age;
    this.employeeJob = job;
  }

  get printEmployee() {
    return `이름: ${this.employeeName}, 나이: ${this.employeeAge}, 직업: ${this.employeeJob}`;
  }

  set modifyEmployeeInformation({
    name,
    age,
    job,
  }: modifyEmployeeInformationType) {
    this.employeeName = name;
    this.employeeAge = age;
    this.employeeJob = job;
  }
}

// public, private, protected

const employee1 = new Employee("이상진", 20, "개발자");
console.log(employee1.printEmployee);
