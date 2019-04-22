import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    // let role = localStorage.getItem('role');
    // if(role == "seller"){
    //   this.router.navigate(['/product_display']);
    // }
    // if(role == "buyer"){
    //   this.router.navigate(['/product_buy']);
    // }
    this.loginForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      alert("Enter Login Credentials");
    }
    this.userService.login(this.loginForm.value).subscribe(
      data => {
        alert("Login Successfully");
        console.log(data);
      }),
      err => console.log(err);

  }
  get f() {
    return this.loginForm.controls;
  }
}
