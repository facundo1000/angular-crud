import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: String = 'Angular-Crud App';

  message: String = '';

  employees = [
    { name: 'Facundo', position: 'manager', email: "fmriver2004@hotmail.com" },
    { name: 'Thor', position: 'designer', email: "argentinaCampeon@afa.com" },
    { name: 'Darth Vader', position: 'Developer', email: "darksidegalaxy@yahoo.com" }
  ];

  model: any = {};
  model2: any = {};

  hideUpdate: Boolean = true;


  addEmployee(): void {
    this.employees.push(this.model);
    this.model = {};
    this.message = 'Empleado Agregado';
  }

  deleteEmployee(i: any): void {
    const answer = confirm(`Desea eliminar el usuario: ${this.employees[i].name}`);
    if (answer) {
      this.employees.splice(i, i);
      this.message = 'Empleado Eliminado';
    }
  }

  myValue: any = 0;
  editEmployee(i: any): void {

    this.hideUpdate = false;

    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    var i = this.myValue;
    for (var j = 0; j < this.employees.length; j++) {

      if (i == j) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.message = 'Informacion actualizada'
      }
    }
    this.hideUpdate = true;
  }

  closeAlert(): void {
    this.message = '';
  }

}
