import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminPermissions } from 'src/app/classes/admin-permissions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public allowedAreaOptions: string [];
  public permissions: AdminPermissions;

  public permissionForm = this.fb.group({
    createUser: [false],
    readUser: [false],
    updateUser: [false],
    deleteUser: [false],
    // allowedAreas: []
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.allowedAreaOptions = [ 'Admin', 'Module1', 'Module2', 'Module3' ];
    this.permissions = new AdminPermissions(false, true, false, false, ['Admin']);

    this.permissionForm = this.fb.group({
      createUser: [this.permissions.CreateUser],
      readUser: [this.permissions.ReadUser],
      updateUser: [this.permissions.UpdateUser],
      deleteUser: [this.permissions.DeleteUser],
      // allowedAreas: []
    });

  }

  public onSubmit() {
    const value = this.permissionForm.value;

    // tslint:disable-next-line:no-debugger
    debugger;
  }

}
